/**
 * Problem: 3637. Trionic Array I
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution {
    public bool IsTrionic(int[] nums) {
        // Array must have at least 4 elements for trionic pattern
        if (nums.Length < 4) return false;
        
        // Get array length
        int arrayLength = nums.Length;
        
        // Initialize pointer
        int pointer = 0;
        
        // First segment: strictly increasing
        while (pointer + 1 < arrayLength && nums[pointer] < nums[pointer + 1]) pointer++;
        
        // Check if we had at least one increasing step
        if (pointer == 0) return false;
        
        int decreasingStart = pointer;
        
        // Second segment: strictly decreasing
        while (pointer + 1 < arrayLength && nums[pointer + 1] < nums[pointer]) pointer++;
        
        // Check if we had at least one decreasing step
        if (pointer == decreasingStart) return false;

        int increasingStart = pointer;
        
        // Third segment: strictly increasing
        while (pointer + 1 < arrayLength && nums[pointer] < nums[pointer + 1]) pointer++;
        
        // Check if we had at least one increasing step and reached end
        if (pointer == increasingStart) return false;
        
        // Return true if we processed all elements
        return pointer == arrayLength - 1;
    }
}
