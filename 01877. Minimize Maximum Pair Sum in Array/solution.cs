/**
 * Problem: 1877. Minimize Maximum Pair Sum in Array
 *
 * Difficulty: Medium
 *
 * Language: C#
 *
 * Performance: Runtime - 387 ms (Beats 100%)
 */

public class Solution {
    public int MinPairSum(int[] nums) {
        // Initialize min and max values
        int min = 100001, max = 0;
        
        // Find min and max in single pass
        for (int i = 0; i < nums.Length; i++) {
            // Update minimum value
            if (nums[i] < min) min = nums[i];
            
            // Update maximum value
            if (nums[i] > max) max = nums[i];
        }
        
        // Calculate range for frequency array
        int range = max - min + 1;
        
        // Create frequency buckets
        int[] buckets = new int[range];
        
        // Fill buckets with frequencies
        for (int i = 0; i < nums.Length; i++) buckets[nums[i] - min]++;
        
        // Initialize pointers and result
        int l = 0, r = range - 1, res = 0;
        
        // Pair smallest with largest
        while (l <= r) {
            // Skip empty left buckets
            if (buckets[l] == 0) l++;
            
            // Skip empty right buckets
            else if (buckets[r] == 0) r--;
            
            // Process current pair
            else {
                // Calculate pair sum (l + r + 2*min)
                int sum = l + r + (min << 1);
                
                // Update maximum result
                if (sum > res) res = sum;
                
                // Reduce frequency counts
                if (buckets[l] < buckets[r]) {
                    buckets[r] -= buckets[l];
                    l++;
                }
                else if (buckets[r] < buckets[l]) {
                    buckets[l] -= buckets[r];
                    r--;
                }
                else {
                    l++;
                    r--;
                }
            }
        }
        
        // Return minimum maximum pair sum
        return res;
    }
}
