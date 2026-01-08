/**
 * Problem: 1975. Maximum Matrix Sum
 *
 * Difficulty: Medium
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

using System.Runtime.CompilerServices;

public class Solution {
    // Apply aggressive optimization hints to the compiler
    [MethodImpl(MethodImplOptions.AggressiveInlining | MethodImplOptions.AggressiveOptimization)]
    public long MaxMatrixSum(int[][] matrix) {
        // Initialize variables
        var min = int.MaxValue;    // Minimum absolute value found
        var sum = 0L;              // Total sum of absolute values (long to prevent overflow)
        var xor = 0;               // XOR of all original values (bitwise trick to track parity)
        
        // Iterate through all elements in the matrix
        foreach (var row in matrix) {
            foreach (var n in row) {
                // Calculate absolute value using bitwise operations:
                // sign = n >> 31 gives -1 for negative numbers, 0 for non-negative
                // (n ^ sign) - sign computes absolute value efficiently
                var sign = n >> 31;
                var abs = (n ^ sign) - sign;
                
                // Accumulate sum of absolute values
                sum += abs;
                // XOR all original values to track parity of negative count
                xor ^= n;
                // Update minimum absolute value
                min = Math.Min(min, abs);
            }
        }
        
        // Calculate final result:
        // - If xor >> 31 is 1 (odd number of negatives), subtract 2*min
        // - If xor >> 31 is 0 (even number of negatives), subtract 0
        return sum - (min << 1 & xor >> 31);
    }
}
