const fs = require("fs");
const path = require("path");

let { current_base: CURRENT_BASE } = require("./config.json");
const { exit } = require("process");
let NEW_BASE = process.argv[2];

if (NEW_BASE[NEW_BASE.length - 1] !== "/") {
    NEW_BASE += "/";
}

function processFile(filePath) {
    let content = fs.readFileSync(filePath, "utf-8");
    const regexp = new RegExp(
        `(\\[[a-zA-Z\\s]+\\]:\\s?)${CURRENT_BASE}(.+)`,
        "gm",
    );

    if (content.search(regexp) !== -1) {
        console.log(`Working on: ${filePath}! Changing to ${NEW_BASE}`);

        const updated = content.replace(regexp, `$1${NEW_BASE}$2`);

        fs.writeFileSync(filePath, updated);
    } else console.log(`Skipping on: ${filePath}!`);
}

function walk(dir) {
    for (const file of fs.readdirSync(dir)) {
        const full = path.join(dir, file);
        if (fs.statSync(full).isDirectory()) walk(full);
        else if (full.endsWith(".md")) processFile(full);
    }
}

if (CURRENT_BASE !== NEW_BASE) {
    walk("./recipes");

    const CONFIG_PATH = path.join("./", "config.json");
    const CONFIG_DATA = fs.readFileSync(CONFIG_PATH, "utf-8");
    const UPDATED_CONFIG_DATA = CONFIG_DATA.replace(CURRENT_BASE, NEW_BASE);

    fs.writeFileSync(CONFIG_PATH, UPDATED_CONFIG_DATA);
} else {
    console.error("SCRIPT ABORTED: Old base and New base are same.");
    console.log(`If you want to run anyway, Follow these:
        1. Open config.json file.
        2. Change '${NEW_BASE}' to any other value (Changing spelling does the trick, Only change things inside QUOTES).
        3. Run the command again!`);
    exit();
}