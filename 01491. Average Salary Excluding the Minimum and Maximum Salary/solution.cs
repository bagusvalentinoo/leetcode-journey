/**
 * Problem: 1491. Average Salary Excluding the Minimum and Maximum Salary
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public double Average(int[] salary)
  {
    // Sum all salaries
    int sum = 0;
    // Track minimum and maximum salary
    int min = int.MaxValue, max = int.MinValue;

    // Single pass to find sum, min, and max
    foreach (int sal in salary)
    {
      sum += sal;
      min = Math.Min(min, sal);
      max = Math.Max(max, sal);
    }

    // Return average excluding min and max
    return (double)(sum - min - max) / (salary.Length - 2);
  }
}
