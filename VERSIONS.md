# CorpEase — Version History

Each row is a saved snapshot. Use the Git commands below to switch between them.

---

## How to save a new version

```bash
# From the project root (e:/GTC):
bash scripts/snapshot.sh "short description of what you built"

# Example:
bash scripts/snapshot.sh "added blog section to home page"
```

## How to view all versions

```bash
git log --oneline
```

## How to go back to a previous version

```bash
# Step 1: find the snapshot ID from git log --oneline
# It looks like:  a1b2c3d  snapshot: added blog section

# Step 2: create a temporary branch at that point to browse it
git checkout -b rollback a1b2c3d

# Step 3: if you want to KEEP this as the new current state (discard newer work):
git checkout main
git reset --hard a1b2c3d

# Step 4: to go back to latest after browsing:
git checkout main
```

## How to compare two versions

```bash
git diff a1b2c3d b2c3d4e -- src/pages/Home.jsx
```

---

## Version Log

| # | Tag / Commit msg | Date | What's in this version |
|---|---|---|---|
| v1.0 | `c040ec0` | 2026-04-24 | Full site: all 45 service pages, all pages, category SVGs, mega-menu |
| v1.1 | `b41266b` | 2026-04-24 | Unified Services mega-menu, 45 per-service SVGs, "Learn more" font fix, rehydration files |

---

*Update this table after every `snapshot.sh` run.*
