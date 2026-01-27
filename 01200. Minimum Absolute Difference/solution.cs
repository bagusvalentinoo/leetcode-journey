/**
 * Problem: 1200. Minimum Absolute Difference
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 8 ms (Beats 100%)
 */

public class Solution {
    public IList<IList<int>> MinimumAbsDifference(int[] arr) {
        // Find minimum and maximum values in array
        var minVal = arr[0];
        var maxVal = arr[0];
        
        // Scan array to determine value range
        for (var i = 1; i < arr.Length; ++i) {
            var num = arr[i];
            
            minVal = Math.Min(minVal, num);
            maxVal = Math.Max(maxVal, num);
        }
        
        // Calculate maximum possible difference
        var minDifference = maxVal - minVal;
        
        // Create boolean array to mark which values exist
        var buckets = new bool[minDifference + 1];
        
        // Mark all present values in buckets array
        for (var i = 0; i < arr.Length; ++i)
            buckets[arr[i] - minVal] = true;
        
        // Initialize result list
        var res = new List<IList<int>>();
        
        // Track previous value for difference calculation
        var prevVal = minVal;
        
        // Scan through all possible values in range
        for (var i = 1; i < buckets.Length; ++i) {
            // Skip if value doesn't exist in input
            if (!buckets[i]) continue;
            
            // Calculate current value from index
            var num = minVal + i;
            
            // Calculate difference with previous value
            var diff = num - prevVal;
            var leftVal = prevVal;
            
            // Update previous value for next iteration
            prevVal = num;
            
            // Skip if difference is larger than current minimum
            if (diff > minDifference) continue;
            
            // Reset result if smaller difference found
            if (diff < minDifference) {
                minDifference = diff;
                res.Clear();
            }
            
            // Add pair to result list
            res.Add(new[] { leftVal, num });
        }
        
        // Return all pairs with minimum absolute difference
        return res;
    }
}
