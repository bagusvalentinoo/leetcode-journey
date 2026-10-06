/**
 * Problem: 1945. Sum of Digits of String After Convert
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  int getLucky(string s, int k) {
    // Store the result of the first digit-sum transformation
    int transformedValue = 0;

    // Convert each letter and add the digits of its alphabet position
    for (char character : s) {
      // Calculate the one-based alphabet position for the current letter
      int alphabetPosition = character - 'a' + 1;

      // Add both decimal digits to avoid constructing the converted integer
      transformedValue += alphabetPosition / 10 + alphabetPosition % 10;
    }

    // Perform the remaining digit-sum transformations
    for (int transformation = 1; transformation < k; transformation++) {
      // Store the sum of digits for the current transformed value
      int digitSum = 0;

      // Extract and add every digit from the current value
      while (transformedValue > 0) {
        // Add the least significant digit to the current sum
        digitSum += transformedValue % 10;
        // Remove the least significant digit before the next iteration
        transformedValue /= 10;
      }

      // Use the computed digit sum for the next transformation
      transformedValue = digitSum;
    }

    // Return the value after exactly k transformations
    return transformedValue;
  }
};
