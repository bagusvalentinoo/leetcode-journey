/**
 * Problem: 1502. Can Make Arithmetic Progression From Sequence
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public bool CanMakeArithmeticProgression(int[] arr)
  {
    // Initialize minimum and maximum values
    int minValue = int.MaxValue, maxValue = int.MinValue;

    // Find minimum and maximum in the array
    foreach (int currentNumber in arr)
    {
      if (currentNumber < minValue) minValue = currentNumber;
      if (currentNumber > maxValue) maxValue = currentNumber;
    }

    // If all elements are equal, it forms an arithmetic progression
    if (maxValue == minValue) return true;

    // Get array length
    int arrayLength = arr.Length;

    // Check if range is divisible by (n - 1), otherwise no integer difference possible
    if ((maxValue - minValue) % (arrayLength - 1) != 0) return false;

    // Calculate expected common difference
    int commonDifference = (maxValue - minValue) / (arrayLength - 1);
    // Place each number at its correct index using cyclic sort (O(1) extra space)
    int currentIndex = 0;

    while (currentIndex < arrayLength)
    {
      // Calculate expected value at current index
      int expectedValue = minValue + commonDifference * currentIndex;

      // If current position already holds the correct value, move to next index
      if (arr[currentIndex] == expectedValue)
      {
        currentIndex++;
        continue;
      }

      // If current value does not align with the arithmetic progression
      if ((arr[currentIndex] - minValue) % commonDifference != 0) return false;

      // Calculate target index for the current value
      int targetIndex = (arr[currentIndex] - minValue) / commonDifference;

      // If duplicate value found at target position, cannot form progression
      if (arr[targetIndex] == arr[currentIndex]) return false;

      // Swap current element to its correct target position
      int tempValue = arr[currentIndex];
      arr[currentIndex] = arr[targetIndex];
      arr[targetIndex] = tempValue;
    }

    // All elements placed correctly, array forms an arithmetic progression
    return true;
  }
}
