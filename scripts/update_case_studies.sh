#!/bin/sh
set -euo pipefail

SCRIPT_DIR=$(cd "$(dirname "$0")" && pwd)
REPO_ROOT=$(cd "$SCRIPT_DIR/.." && pwd)

SRC_PATH=${1:-"$REPO_ROOT/../aiprinciples/first_principles_case_studies_complete.json"}
DEST_PATH="$REPO_ROOT/data/first_principles_case_studies_complete.json"

mkdir -p "$(dirname "$DEST_PATH")"
cp "$SRC_PATH" "$DEST_PATH"

echo "Updated case studies JSON: $DEST_PATH"
