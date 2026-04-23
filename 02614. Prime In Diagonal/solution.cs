/**
 * Problem: 2614. Prime In Diagonal
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int DiagonalPrime(int[][] nums)
  {
    // Get the size of the square matrix
    var matrixSize = nums.Length;

    // Initialize result with center element if matrix size is odd and center is prime
    var maxPrimeFound =
      matrixSize % 2 == 1 && IsPrime(nums[matrixSize / 2][matrixSize / 2])
        ? nums[matrixSize / 2][matrixSize / 2]
        : 0;

    // Iterate through each row to check diagonal elements
    for (var row = 0; row < matrixSize; row++)
    {
      // Skip the center element if already processed (when row == n-row-1)
      if (row == matrixSize - row - 1)
        continue;

      // Check main diagonal element at (row, row)
      if (nums[row][row] > maxPrimeFound && IsPrime(nums[row][row]))
        maxPrimeFound = Math.Max(maxPrimeFound, nums[row][row]);

      // Check secondary diagonal element at (row, n-row-1)
      if (
        nums[row][matrixSize - row - 1] > maxPrimeFound
        && IsPrime(nums[row][matrixSize - row - 1])
      )
        maxPrimeFound = Math.Max(maxPrimeFound, nums[row][matrixSize - row - 1]);
    }

    // Return the largest prime found on diagonals
    return maxPrimeFound;

    // Helper function to check if a number is prime
    static bool IsPrime(int num)
    {
      // 1 is not prime
      if (num == 1)
        return false;
      // 2 is prime
      if (num == 2)
        return true;
      // Even numbers greater than 2 are not prime
      if (num % 2 == 0)
        return false;

      // Check odd divisors from 3 up to square root
      for (var divisor = 3; divisor * divisor <= num; divisor += 2)
        // If divisible, number is not prime
        if (num % divisor == 0)
          return false;

      // Number is prime
      return true;
    }
  }
}
