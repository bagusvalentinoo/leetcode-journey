/**
 * Problem: 3289. The Two Sneaky Numbers of Digitville
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int[] GetSneakyNumbers(int[] nums)
  {
    // Calculate expected length of array without duplicates
    int originalLength = nums.Length - 2;

    // Variables to store actual sum and sum of squares
    double actualSum = 0;
    double actualSquareSum = 0;

    // Calculate actual sum and sum of squares from input array
    foreach (int currentNumber in nums)
    {
      // Add current number to sum
      actualSum += currentNumber;
      // Add square of current number to sum of squares
      actualSquareSum += (long)currentNumber * currentNumber;
    }

    // Calculate expected sum of numbers from 0 to originalLength-1
    double expectedSum = originalLength * (originalLength - 1) / 2.0;
    // Calculate expected sum of squares of numbers from 0 to originalLength-1
    double expectedSquareSum = originalLength * (originalLength - 1) * (2 * originalLength - 1) / 6.0;

    // Difference between actual and expected sums
    double sumDifference = actualSum - expectedSum;
    // Difference between actual and expected sum of squares
    double squareDifference = actualSquareSum - expectedSquareSum;

    // Calculate the difference between the two duplicate numbers
    double differenceBetweenNumbers = Math.Sqrt(2 * squareDifference - sumDifference * sumDifference);

    // Calculate the two duplicate numbers
    int firstDuplicate = (int)((sumDifference - differenceBetweenNumbers) / 2),
        secondDuplicate = (int)((sumDifference + differenceBetweenNumbers) / 2);

    // Return the two duplicate numbers
    return new int[] { firstDuplicate, secondDuplicate };
  }
}
