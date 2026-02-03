/**
 * Problem: 744. Find Smallest Letter Greater Than Target
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 10 ms (Beats 100%)
 */

public class Solution {
    public char NextGreatestLetter(char[] letters, char target) {
        // Initialize binary search bounds
        int left = 0;
        int right = letters.Length;
        
        // Perform binary search to find first character greater than target
        while (left < right) {
            int mid = (left + right) / 2;
            
            // Narrow search range based on comparison
            if (letters[mid] > target) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        
        // Use modulo to wrap around to first character if no greater character found
        return letters[left % letters.Length];
    }
}
