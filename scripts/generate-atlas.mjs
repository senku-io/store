import { readdirSync, readFileSync, statSync, writeFileSync } from "fs";
import matter from "gray-matter";
import { join } from "path";

const config = {
    version: (JSON.parse(readFileSync(join('./', "atlas.json"), { encoding: "utf-8"}))?.version ?? 0) + 1,
    generated_at: new Date().toISOString(),
    nodes: {},
};

function processFile(file) {
    const md = readFileSync(file, { encoding: "utf-8" });
    const { data } = matter(md);

    const unique = file
        .trim()
        .replaceAll(".md", "")
        .split("/")
        .slice(1)
        .join("-");

    if (
        !data.type ||
        !data.keywords ||
        !data.name ||
        typeof data.type !== "string" ||
        typeof data.name !== "string" ||
        !Array.isArray(data.keywords)
    ) {
        console.log("Something went wrong in ", file);
        return;
    }

    config.nodes = {
        ...config.nodes,
        [unique]: {
            path: file,
            name: data.name,
            type: data.type,
            keywords: data.keywords,
        },
    };
}

function walk(dir) {
    for (const file of readdirSync(dir)) {
        const full = join(dir, file);
        if (statSync(full).isDirectory()) walk(full);
        else if (full.endsWith(".md")) {
            processFile(full);
        }
    }
}

walk("./recipes");

writeFileSync(join("./", "atlas.json"), JSON.stringify(config, null, 4), {encoding: "utf-8"});
