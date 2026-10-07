/**
 * Problem: 1925. Count Square Sum Triples
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int CountTriples(int n)
  {
    // Track the number of ordered square triples.
    var count = 0;

    // Choose the smaller leg of each potential triple.
    for (int firstLeg = 1; firstLeg < n; firstLeg++)
    {
      // Choose the larger leg to avoid checking the same pair twice.
      for (int secondLeg = firstLeg + 1; secondLeg < n; secondLeg++)
      {
        // Calculate the potential hypotenuse for the current pair of legs.
        var hypotenuse = Math.Sqrt(firstLeg * firstLeg + secondLeg * secondLeg);

        // Stop when all remaining hypotenuses exceed the limit.
        if (hypotenuse > n)
          break;
        // Count both ordered triples when the hypotenuse is an integer.
        else if (hypotenuse == (int)hypotenuse)
          count += 2;
      }
    }

    // Return the total number of ordered square triples.
    return count;
  }
}
