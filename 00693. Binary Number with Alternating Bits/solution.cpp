/**
 * Problem: 693. Binary Number with Alternating Bits
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
    bool hasAlternatingBits(int n) {
        // XOR n with n shifted right by 1 bit
        // This creates a number where bits are 1 where adjacent bits differ
        int xorResult = n ^ (n >> 1);

        // For n with alternating bits, xorResult will be all 1's
        // Example: n = 5 (101) -> xorResult = 111 (7)
        // We need to check if xorResult is of form 2^k - 1
        // Using unsigned int to prevent overflow issues
        unsigned int uXor = xorResult;

        // Check if uXor is all ones (power of two minus one)
        // (uXor & (uXor + 1)) == 0 works for unsigned types without overflow
        return (uXor & (uXor + 1)) == 0;
    }
};
