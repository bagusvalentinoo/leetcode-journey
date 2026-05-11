/**
 * Problem: 2553. Separate the Digits in an Array
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution
{
  public int[] SeparateDigits(int[] nums)
  {
    // List to store individual digits
    List<int> result = new List<int>();

    // Iterate through the array from the end to the beginning
    for (int index = nums.Length - 1; index >= 0; index--)
    {
      // Get current number
      int currentNumber = nums[index];

      // Extract digits from the number
      while (currentNumber > 0)
      {
        // Add the last digit to the list
        result.Add(currentNumber % 10);
        // Remove the last digit
        currentNumber /= 10;
      }
    }

    // Reverse the list to get digits in correct order
    result.Reverse();

    // Return the result as an array
    return result.ToArray();
  }
}
