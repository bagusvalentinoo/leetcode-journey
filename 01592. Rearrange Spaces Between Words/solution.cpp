/**
 * Problem: 1592. Rearrange Spaces Between Words
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  string reorderSpaces(string text) {
    // Count total spaces in text
    int totalSpaces = 0;

    // Count each space character
    for (char ch : text)
      if (ch == ' ')
        totalSpaces++;

    // Split on spaces and drop empty entries to get words
    vector<string> words;
    string cur = "";
    for (char ch : text) {
      // Accumulate non-space characters into current word
      if (ch != ' ')
        cur += ch;
      // Push completed word and reset on space boundary
      else if (!cur.empty()) {
        words.push_back(cur);
        cur = "";
      }
    }

    // Push trailing word if text does not end with space
    if (!cur.empty())
      words.push_back(cur);

    // Handle single word: all spaces go to the end
    if (words.size() == 1)
      return words[0] + string(totalSpaces, ' ');

    // Compute number of gaps between adjacent words
    int gaps = words.size() - 1;

    // Compute even spaces per gap
    int perGap = totalSpaces / gaps;

    // Compute leftover spaces for the end
    int trailing = totalSpaces % gaps;

    // Build gap string of even spaces
    string gap(perGap, ' ');

    // Join words with even gaps
    string result = "";
    for (int i = 0; i < (int)words.size(); i++) {
      // Append next word
      result += words[i];
      // Append even gap except after last word
      if (i < (int)words.size() - 1)
        result += gap;
    }

    // Append leftover trailing spaces
    result += string(trailing, ' ');

    // Return string with evenly redistributed spaces
    return result;
  }
};
