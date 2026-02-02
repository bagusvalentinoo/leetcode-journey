/**
 * Problem: 3010. Divide an Array Into Subarrays With Minimum Cost I
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution {
    public int MinimumCost(int[] nums) {
        // Initialize two smallest values with maximum integer value
        int smallest = int.MaxValue;
        int secondSmallest = int.MaxValue;
        
        // Find two smallest elements in array (excluding first element)
        for (int i = 1; i < nums.Length; i++) {
            // Update smallest and second smallest values
            if (nums[i] <= smallest) {
                secondSmallest = smallest;
                smallest = nums[i];
            }
            // Update only second smallest if value is between smallest and secondSmallest
            else if (nums[i] <= secondSmallest) {
                secondSmallest = nums[i];
            }
        }
        
        // Return sum of first element plus two smallest elements
        return nums[0] + smallest + secondSmallest;
    }
}
