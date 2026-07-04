/**
 * Problem: 1464. Maximum Product of Two Elements in an Array
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int MaxProduct(int[] nums)
  {
    // Initialize two largest values with minimum integer value
    int largest = int.MinValue,
        secondLargest = int.MinValue;

    // Iterate through each number in the array
    foreach (int currentNumber in nums)
    {
      // If current number is greater than or equal to largest
      if (currentNumber >= largest)
      {
        // Shift largest to second largest
        secondLargest = largest;
        // Update largest with current number
        largest = currentNumber;
      }
      // If current number is between largest and second largest
      else if (currentNumber > secondLargest)
        // Update second largest
        secondLargest = currentNumber;
    }

    // Return product of (largest - 1) and (secondLargest - 1)
    return (largest - 1) * (secondLargest - 1);
  }
}
