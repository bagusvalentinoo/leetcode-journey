/**
 * Problem: 1411. Number of Ways to Paint N × 3 Grid
 *
 * Difficulty: Hard
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution {
    public int NumOfWays(int n) {
        // Define the modulo constant to prevent integer overflow
        const int MOD = 1000000007;
        
        // Initialize counters for two types of patterns:
        // aba = patterns where first and third cells have same color (2 colors used)
        // abc = patterns where all three cells have different colors (3 colors used)
        long aba = 6, abc = 6;
        
        // Iterate through each row starting from row 2
        for (int i = 2; i <= n; i++) {
            // Calculate new values based on transition rules:
            // Each aba pattern can generate 3 new aba patterns and 2 new abc patterns
            // Each abc pattern can generate 2 new aba patterns and 2 new abc patterns
            long newAba = (aba * 3 + abc * 2) % MOD;
            long newAbc = (aba * 2 + abc * 2) % MOD;
            
            // Update counters for next iteration
            aba = newAba;
            abc = newAbc;
        }
        
        // Return total number of patterns modulo MOD
        return (int)((aba + abc) % MOD);
    }
}
