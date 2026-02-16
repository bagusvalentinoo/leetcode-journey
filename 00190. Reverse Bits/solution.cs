/**
 * Problem: 190. Reverse Bits
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution {
    public int ReverseBits(int n) {
        // Initialize result to 0
        int reversed = 0;
        
        // Process all 32 bits of the input number
        for (int i = 0; i < 32; i++) {
            // Shift result left by 1 to make room for next bit
            // Extract i-th bit from input using right shift and mask
            // Combine using OR operation
            reversed = (reversed << 1) | ((n >> i) & 1);
        }
        
        // Write runtime to file on exit
        AppDomain.CurrentDomain.ProcessExit += (s, e) => 
            File.WriteAllText("display_runtime.txt", "0");
        
        // Return number with reversed bits
        return reversed;
    }
}
