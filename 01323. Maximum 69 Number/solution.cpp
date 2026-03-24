/**
 * Problem: 1323. Maximum 69 Number
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  int maximum69Number(int num) {
    // Convert number to string to easily access individual digits
    string s = to_string(num);

    // Iterate through each character in the string
    for (char &c : s) {
      // Find the first occurrence of '6'
      if (c == '6') {
        // Change it to '9'
        c = '9';
        // Stop after changing at most one digit
        break;
      }
    }

    // Convert back to integer and return
    return stoi(s);
  }
};
