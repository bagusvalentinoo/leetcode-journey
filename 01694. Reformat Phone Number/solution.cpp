/**
 * Problem: 1694. Reformat Phone Number
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  string reformatNumber(string number) {
    // Collect only digit characters, skipping spaces and dashes
    string digits;

    // Scan each character of the input
    for (char ch : number)
      if (ch >= '0' && ch <= '9')
        digits += ch;

    // Total count of digits to group
    int totalDigits = digits.size();

    // Store formatted blocks before joining
    vector<string> blocks;

    // Current read position inside digits
    int index = 0;

    // Take blocks of 3 while more than 4 digits remain
    while (totalDigits - index > 4) {
      // Take the next block of 3 digits
      blocks.push_back(digits.substr(index, 3));

      // Advance past the consumed block
      index += 3;
    }

    // Count digits left for the final grouping
    int remaining = totalDigits - index;

    // Four remaining digits split into two blocks of 2
    if (remaining == 4) {
      // Take the first pair of the final four
      blocks.push_back(digits.substr(index, 2));

      // Take the second pair of the final four
      blocks.push_back(digits.substr(index + 2, 2));
    }
    // Two or three remaining digits form one final block
    else
      blocks.push_back(digits.substr(index));

    // Join blocks with dashes
    string answer;
    for (int i = 0; i < (int)blocks.size(); i++) {
      // Append separator before every block except the first
      if (i > 0)
        answer += '-';

      // Append the current block
      answer += blocks[i];
    }

    // Return the dash-separated phone number
    return answer;
  }
};
