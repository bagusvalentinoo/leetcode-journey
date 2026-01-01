/**
 * Problem: 66. Plus One
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
    vector<int> plusOne(vector<int>& digits) {
        // Iterate through the digits vector from rightmost digit to leftmost
        // digit.
        for (int i = digits.size() - 1; i >= 0; --i) {
            // Check if the current digit is less than 9.
            if (digits[i] < 9) {
                // Increment the current digit by one.
                digits[i]++;

                // Return the modified digits vector immediately.
                return digits;
            }

            // Set the current digit to 0 if it is 9 (carry over).
            digits[i] = 0;
        }

        // If all digits were 9, insert a new most significant digit 1 at the
        // beginning.
        digits.insert(digits.begin(), 1);
        
        // Return the final digits vector.
        return digits;
    }
};
