/**
 * Problem: 2976. Minimum Cost to Convert String I
 *
 * Difficulty: Medium
 *
 * Language: C#
 *
 * Performance: Runtime - 17 ms (Beats 100%)
 */

public class Solution {
    public long MinimumCost(string source, string target, char[] original, char[] changed, int[] cost) {
        // Initialize total cost accumulator
        long totalCost = 0;
        
        // Create distance matrix for 26 lowercase letters
        long[][] distance = new long[26][];
        
        // Initialize distance matrix with maximum values
        for (int i = 0; i < 26; i++) {
            distance[i] = new long[26];
            
            for (int j = 0; j < 26; j++) distance[i][j] = long.MaxValue;
        }
        
        // Build initial graph with direct conversion costs
        for (int i = 0; i < cost.Length; i++) {
            int fromIdx = original[i] - 'a';
            int toIdx = changed[i] - 'a';
            distance[fromIdx][toIdx] = Math.Min(distance[fromIdx][toIdx], cost[i]);
        }
        
        // Floyd-Warshall algorithm to find shortest paths
        for (int intermediate = 0; intermediate < 26; intermediate++)
            for (int from = 0; from < 26; from++)
                if (distance[from][intermediate] < long.MaxValue)
                    for (int to = 0; to < 26; to++)
                        if (distance[intermediate][to] < long.MaxValue)
                            distance[from][to] = Math.Min(distance[from][to], 
                                distance[from][intermediate] + distance[intermediate][to]);
        
        // Calculate total conversion cost for the string
        for (int i = 0; i < source.Length; i++) {
            // Skip if characters already match
            if (source[i] == target[i]) continue;
            
            int sourceIdx = source[i] - 'a';
            int targetIdx = target[i] - 'a';
            
            // Return -1 if no conversion path exists
            if (distance[sourceIdx][targetIdx] == long.MaxValue) return -1;
            
            // Add conversion cost to total
            totalCost += distance[sourceIdx][targetIdx];
        }
        
        // Return total minimum cost
        return totalCost;
    }
}
