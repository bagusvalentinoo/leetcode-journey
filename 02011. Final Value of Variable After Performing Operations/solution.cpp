/**
 * Problem: 2011. Final Value of Variable After Performing Operations
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  int finalValueAfterOperations(vector<string> &operations) {
    // Start X at its specified initial value
    int value = 0;

    // Adjust X according to each operation's middle character
    for (const string &operation : operations) value += operation[1] == '+' ? 1 : -1;

    // Return the final value of X
    return value;
  }
};
