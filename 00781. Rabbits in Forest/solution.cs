/**
 * Problem: 781. Rabbits in Forest
 *
 * Difficulty: Medium
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int NumRabbits(int[] answers)
  {
    // Frequency array for answers 0-1000 (stack allocated for performance)
    Span<int> answerGroups = stackalloc int[1001];

    // Count occurrences of each answer
    foreach (int answer in answers)
      answerGroups[answer]++;

    // Initialize total rabbits count
    int totalRabbits = 0;

    // Process answers from 1 to 1000 (answer 0 handled separately)
    for (int i = 1; i < answerGroups.Length; i++)
    {
      // Skip if no rabbits gave this answer
      if (answerGroups[i] == 0)
        continue;

      // Calculate number of groups needed for this answer
      // Each group has (i + 1) rabbits (i same-color rabbits + 1)
      // Formula: ceil(groups[i] / (i + 1)) * (i + 1)
      totalRabbits += ((answerGroups[i] + i) / (i + 1)) * (i + 1);
    }

    // Add rabbits that answered 0 (they are unique, each is a separate color)
    return totalRabbits + answerGroups[0];
  }
}
