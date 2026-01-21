/**
 * Problem: 3315. Construct the Minimum Bitwise Array II
 *
 * Difficulty: Medium
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution {
    public int[] MinBitwiseArray(IList<int> nums) {
        // Initialize empty array for results
        int[] result = new int[nums.Count];
        
        // Loop through all numbers in input
        for (int i = 0; i < nums.Count; i++) {
            // Get current number from input
            int currentNum = nums[i];
            
            // Apply bitwise transformation formula
            if (currentNum != 2) result[i] = currentNum - ((currentNum + 1) & (-currentNum - 1)) / 2;
            // For number 2, set result to -1
            else result[i] = -1;
        }
        
        // Return final transformed array
        return result;
    }
}
