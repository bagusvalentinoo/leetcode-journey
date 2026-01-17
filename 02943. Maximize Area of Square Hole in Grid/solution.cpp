/**
 * Problem: 2943. Maximize Area of Square Hole in Grid
 *
 * Difficulty: Medium
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
    // Helper function to find longest consecutive sequence length in sorted
    // array
    static inline int findLongestConsecutive(vector<int>& bars) {
        // Sort array to detect consecutive sequences
        sort(bars.begin(), bars.end());

        const int size = bars.size();
        int currentLength = 1;
        int maxLength = 1;

        // Iterate through sorted array to find consecutive sequences
        for (int i = 0; i < size - 1; i++) {
            // If current and next are consecutive, increment current length
            if (bars[i] + 1 == bars[i + 1])
                currentLength++;
            else
                currentLength = 1; // Reset if sequence breaks

            // Update maximum length found
            maxLength = max(currentLength, maxLength);
        }

        return maxLength;
    }

    // Main function to calculate maximum square area
    static int maximizeSquareHoleArea(int n, int m, vector<int>& hBars,
                                      vector<int>& vBars) {
        // Find longest consecutive bars in both dimensions
        int horizontalConsecutive = findLongestConsecutive(hBars);
        int verticalConsecutive = findLongestConsecutive(vBars);

        // Square side = minimum consecutive bars + 1
        int squareSide = 1 + min(horizontalConsecutive, verticalConsecutive);

        // Return maximum square area
        return squareSide * squareSide;
    }
};
