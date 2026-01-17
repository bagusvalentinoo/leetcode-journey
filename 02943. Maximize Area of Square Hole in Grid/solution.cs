/**
 * Problem: 2943. Maximize Area of Square Hole in Grid
 *
 * Difficulty: Medium
 *
 * Language: C#
 *
 * Performance: Runtime - 3 ms (Beats 100%)
 */

public class Solution
{
    // Calculates maximum square area achievable by removing bars
    // GridHeight and GridWidth are unused parameters
    public int MaximizeSquareHoleArea(int GridHeight, int GridWidth, int[] HorizontalBars, int[] VerticalBars)
    {
        // Sort both arrays to find consecutive sequences
        Array.Sort(HorizontalBars);
        Array.Sort(VerticalBars);

        // Track longest consecutive sequences
        int maxHorizontalConsecutive = 1;
        int maxVerticalConsecutive = 1;
        int currentHorizontalConsecutive = 1;
        int currentVerticalConsecutive = 1;

        // Find longest consecutive sequence in horizontal bars
        for (int index = 1; index < HorizontalBars.Length; index++)
        {
            // Check if current bar is consecutive to previous
            if (HorizontalBars[index] == HorizontalBars[index - 1] + 1)
                currentHorizontalConsecutive++;
            else
                currentHorizontalConsecutive = 1;

            // Update maximum if current sequence is longer
            maxHorizontalConsecutive = Math.Max(maxHorizontalConsecutive, currentHorizontalConsecutive);
        }

        // Find longest consecutive sequence in vertical bars
        for (int index = 1; index < VerticalBars.Length; index++)
        {
            // Check if current bar is consecutive to previous
            if (VerticalBars[index] == VerticalBars[index - 1] + 1)
                currentVerticalConsecutive++;
            else
                currentVerticalConsecutive = 1;

            // Update maximum if current sequence is longer
            maxVerticalConsecutive = Math.Max(maxVerticalConsecutive, currentVerticalConsecutive);
        }

        // Square side = minimum consecutive bars + 1
        int squareSideLength = Math.Min(maxHorizontalConsecutive, maxVerticalConsecutive) + 1;

        // Return maximum square area
        return squareSideLength * squareSideLength;
    }
}
