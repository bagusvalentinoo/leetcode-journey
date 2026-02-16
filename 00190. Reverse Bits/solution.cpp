/**
 * Problem: 190. Reverse Bits
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
    int reverseBits(int n) {
        // Initialize result to 0
        int reversed = 0;

        // Process all 32 bits of the input number
        for (int i = 0; i < 32; i++) {
            // Shift result left by 1 to make room for next bit
            // Extract i-th bit from input using right shift and mask
            // Combine using OR operation
            reversed = (reversed << 1) | ((n >> i) & 1);
        }

        // Return number with reversed bits
        return reversed;
    }
};
