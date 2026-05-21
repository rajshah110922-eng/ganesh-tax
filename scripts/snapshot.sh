#!/bin/bash
# Usage: bash scripts/snapshot.sh "description of what you built"
# Saves a named snapshot of the current project state to local git.

set -e

DESCRIPTION="${1}"
DATE=$(date +%Y-%m-%d)

if [ -z "$DESCRIPTION" ]; then
  echo "Usage: bash scripts/snapshot.sh \"description of what you built\""
  exit 1
fi

cd "$(dirname "$0")/.."

# Stage everything (respects .gitignore — node_modules and dist are excluded)
git add -A

# Check if there's anything to commit
if git diff --cached --quiet; then
  echo "No changes to snapshot — working tree is clean."
  exit 0
fi

COMMIT_MSG="snapshot ($DATE): $DESCRIPTION"
git commit -m "$COMMIT_MSG"

HASH=$(git rev-parse --short HEAD)
echo ""
echo "  Snapshot saved: [$HASH] $COMMIT_MSG"
echo "  Run 'git log --oneline' to see all snapshots."
echo "  To go back: git checkout $HASH"
echo ""
