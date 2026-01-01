/**
 * Problem: 66. Plus One
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution {
    public int[] PlusOne(int[] digits) {
        // Iterate through the digits array from rightmost digit to leftmost digit.
        for (int i = digits.Length - 1; i >= 0; i--) {
            // Check if the current digit is less than 9.
            if (digits[i] < 9) {
                // Increment the current digit by one.
                digits[i]++;
                
                // Return the modified digits array immediately.
                return digits;
            }
            // Set the current digit to 0 if it is 9 (carry over).
            else {
                digits[i] = 0;
            }
        }

        // If all digits were 9, create a new array with length increased by 1.
        int[] result = new int[digits.Length + 1];
        // Set the most significant digit to 1 (other digits are 0 by default).
        result[0] = 1;

        // Return the final result array.
        return result;
    }
}
