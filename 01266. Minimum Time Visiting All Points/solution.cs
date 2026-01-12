/**
 * Problem: 1266. Minimum Time Visiting All Points
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution {
    public int MinTimeToVisitAllPoints(int[][] points) {
        int totalTime = 0;
        
        // Iterate through each consecutive pair of points
        for (int i = 1; i < points.Length; i++) {
            // Calculate x and y coordinate differences
            int xDiff = Math.Abs(points[i][0] - points[i - 1][0]);
            int yDiff = Math.Abs(points[i][1] - points[i - 1][1]);
            
            // Add maximum of xDiff and yDiff to total time
            totalTime += Math.Max(xDiff, yDiff);
        }
        
        return totalTime;
    }
}
