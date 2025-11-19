#!/usr/bin/env bash

set -e

# 1. Ask for problem title
read -rp "Enter LeetCode problem title (e.g. 2536. Increment Submatrices by One): " TITLE

# Trim leading and trailing whitespace from title
TITLE="${TITLE#"${TITLE%%[![:space:]]*}"}"
TITLE="${TITLE%"${TITLE##*[![:space:]]}"}"

if [ -z "$TITLE" ]; then
  echo "Empty input. Aborting."
  exit 1
fi

# 2. Ask for difficulty (Easy | Medium | Hard) - langsung setelah title, tanpa newline
DIFFICULTY=""
while true; do
  read -rp "Enter difficulty level [Easy | Medium | Hard]: " DIFFICULTY_RAW

  # Trim whitespace
  DIFFICULTY_RAW="${DIFFICULTY_RAW#"${DIFFICULTY_RAW%%[![:space:]]*}"}"
  DIFFICULTY_RAW="${DIFFICULTY_RAW%"${DIFFICULTY_RAW##*[![:space:]]}"}"

  case "${DIFFICULTY_RAW,,}" in
    easy)
      DIFFICULTY="Easy"
      break
      ;;
    medium)
      DIFFICULTY="Medium"
      break
      ;;
    hard)
      DIFFICULTY="Hard"
      break
      ;;
    *)
      echo "Invalid difficulty. Please type exactly: Easy, Medium, or Hard."
      echo
      ;;
  esac
done

FOLDER="$TITLE"
NUM=""
REST=""

# 3. If the title starts with a number, pad it to 5 digits
if [[ "$TITLE" =~ ^([0-9]+)[\.\)]?[[:space:]]*(.*)$ ]]; then
  NUM="${BASH_REMATCH[1]}"
  REST="${BASH_REMATCH[2]}"
  PADDED=$(printf "%05d" "$NUM")

  if [ -n "$REST" ]; then
    FOLDER="${PADDED}. ${REST}"
  else
    FOLDER="$PADDED"
  fi
fi

# 3.1 Map difficulty -> color for badge
COLOR=""
case "$DIFFICULTY" in
  Easy) COLOR="greenlight" ;;
  Medium) COLOR="orange" ;;
  Hard) COLOR="darkred" ;;
esac

echo
echo "Target folder:"
echo "  $FOLDER"
echo
echo "Difficulty:"
echo "  $DIFFICULTY"
echo

# 4. Create folder
mkdir -p "$FOLDER"

create_file() {
  local filepath="$1"
  local content="$2"

  if [ -e "$filepath" ]; then
    echo "  Skipped (already exists): $filepath"
  else
    printf '%s\n' "$content" > "$filepath"
    echo "  Created: $filepath"
  fi
}

echo "Creating files:"
echo

# README.md
create_file "$FOLDER/README.md" "$(cat <<EOF
<h1>
  <a href="https://leetcode.com/problems/">
    $TITLE
  </a>
</h1>

<img src="https://img.shields.io/badge/Difficulty-$DIFFICULTY-$COLOR" alt="Difficulty: $DIFFICULTY" />
<img src="https://img.shields.io/badge/Topics-Array%2C%20Greedy%2C%20Sliding%20Window-blue" alt="Topics: " />

<hr />


EOF
)"

# solution.go
create_file "$FOLDER/solution.go" "$(cat <<EOF
/**
 * Problem: $TITLE
 *
 * Difficulty: $DIFFICULTY
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */
EOF
)"

# solution.cpp
create_file "$FOLDER/solution.cpp" "$(cat <<EOF
/**
 * Problem: $TITLE
 *
 * Difficulty: $DIFFICULTY
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */
EOF
)"

# solution.cs
create_file "$FOLDER/solution.cs" "$(cat <<EOF
/**
 * Problem: $TITLE
 *
 * Difficulty: $DIFFICULTY
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */
EOF
)"

# solution.ts
create_file "$FOLDER/solution.ts" "$(cat <<EOF
/**
 * Problem: $TITLE
 *
 * Difficulty: $DIFFICULTY
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */
EOF
)"

# solution.js
create_file "$FOLDER/solution.js" "$(cat <<EOF
/**
 * Problem: $TITLE
 *
 * Difficulty: $DIFFICULTY
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */
EOF
)"

echo
echo "Done."
echo "You can now implement your solutions in each file."
echo
