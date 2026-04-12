import { spawn } from "child_process";

const changes = spawn("git", [
    "diff",
    "--name-status",
    "origin/develop...HEAD",
]);

changes.stdout.on("data", (data) => {
    const refined = String(data).trim().split(/\s+/);
    if (refined.length < 1) return new Error("Failed to find any changes");

    const [action, file, ...others] = refined;

    if (file.includes("recipes") && file.includes(".md")) {
        extractdata(file);
        switch (action) {
            case "A":
                createNewAtlasEntry();
                break;
            case "M":
                updateAtlasEntry();
                break;
            case "D":
                deleteAtlasEntry();
                break;
            default:
                break;
        }
    }
});
