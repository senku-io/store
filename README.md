# Senku IO Store

The structured knowledge repository for Senku IO.

This repository contains Markdown-based knowledge data used by the Senku
ecosystem. It is separated from the engine so the data remains portable, open,
and usable independently.

---

## What This Repository Does

- Stores survival knowledge as Markdown recipe
- Acts as the source of truth for Senku data
- Powers search indexing through `atlas.json`
- Supports offline use and community contributions

---

## Why Separate Store From Engine

Keeping data separate from the engine allows:

- Independent backups
- Easier community contributions
- Engine upgrades without rewriting data
- Direct access to raw knowledge files
- Long-term preservation of data

---

## Repository Structure

```text
store/
├── recipes/
│   └── [tier]/
│       └── [type]/
│           └── file.md
│
├── scripts/
├── atlas.json
└── package.json
```

Example:

```text
recipes/tier0/material/coal.md
recipes/tier0/tool/stone-axe.md
recipes/tier1/metal/copper-ingot.md
```

---

## Setup

### Clone Repository

```bash
git clone https://github.com/senku-io/store.git
cd store
npm install
```

### Configure Assets Path

To display images and blueprints correctly:

```bash
npm run setup:base [path/url]
```

> if using paths make sure its absolute path

Examples:

```bash
npm run setup:base /assets
npm run setup:base https://cdn.example.com/assets
```

If assets are not installed, text data still works but images will not display.

---

## Scripts

| Command                         | Purpose                           |
| ------------------------------- | --------------------------------- |
| `npm run setup:base [path/url]` | Configure image / asset base path |
| `npm run generate:atlas`        | Rebuild `atlas.json` index        |

---

## Contributing

Use the Senku writer/editor for recipe contributions.

Full guide: [Contribution Guide](./CONTRIBUTE.md)

Basic flow:

1. Open writer
2. Create or update data
3. Export Markdown
4. Fork repo
5. Add file in correct path
6. Open Pull Request

---

## Automation

This repository uses CI/CD for:

- Validation of recipe data
- Atlas index rebuilding
- Weekly maintenance tasks

---

## Related Repositories

- `senku-io/engine`
- `senku-io/assets`

---

## License

See [LICENSE](./LICENSE.md).

## Status

Early stage project. Structure may evolve as the archive grows.
