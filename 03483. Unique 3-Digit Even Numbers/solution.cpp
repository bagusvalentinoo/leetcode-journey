/**
 * Problem: 3483. Unique 3-Digit Even Numbers
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  int totalNumbers(vector<int> &digits) {
    // Frequency array for digits 0-9
    vector<int> digitCounts(10, 0);

    // Count occurrences of each digit in the input array
    for (const int &digit : digits)
      ++digitCounts[digit];

    // Counter for valid 3-digit even numbers
    int validNumberCount = 0;

    // Iterate through all possible 3-digit even numbers (100 to 998, step 2)
    for (int number = 100; number < 1000; number += 2) {
      // Extract digits: units place (k), tens place (j), hundreds place (i)
      int unitsDigit = number % 10, tensDigit = (number / 10) % 10,
          hundredsDigit = number / 100;

      // Tentatively use one occurrence of each digit
      --digitCounts[unitsDigit];
      --digitCounts[tensDigit];
      --digitCounts[hundredsDigit];

      // Check if all digit counts are non-negative (meaning digits were
      // available)
      validNumberCount +=
          (digitCounts[unitsDigit] >= 0 && digitCounts[tensDigit] >= 0 &&
           digitCounts[hundredsDigit] >= 0);

      // Restore the digit counts
      ++digitCounts[unitsDigit];
      ++digitCounts[tensDigit];
      ++digitCounts[hundredsDigit];
    }

    // Return total count of valid 3-digit even numbers
    return validNumberCount;
  }
};
