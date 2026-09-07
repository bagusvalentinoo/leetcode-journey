/**
 * Problem: 1619. Mean of Array After Removing Some Elements
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public double TrimMean(int[] arr)
  {
    // Sort array in ascending order
    Array.Sort(arr);

    // Number of elements to remove from each end (5%) and end index of middle section
    int trim = arr.Length / 20, last = arr.Length - trim;

    // View middle 90% excluding smallest and largest 5% without copying
    Span<int> span = arr[trim..last];

    // Accumulate sum of middle elements
    int sum = 0;

    // Loop over middle span
    for (int i = 0; i < span.Length; i++) sum += span[i];

    // Return mean of remaining elements
    return (double)sum / (arr.Length - trim * 2);
  }
}
