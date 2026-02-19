/**
 * Problem: 1295. Find Numbers with Even Number of Digits
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution {
    public int FindNumbers(int[] nums) {
        int count = 0;
        
        // Iterate through each number in the array
        for (int i = 0; i < nums.Length; i++) {
            // Convert current number to string
            string str = Convert.ToString(nums[i]);
            
            // Get length of string representation
            int length = str.Length;
            
            // If length is even, increment count
            if (length % 2 == 0) count++;
        }
        
        return count;
    }
}
