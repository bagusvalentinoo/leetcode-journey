/**
 * Problem: 3591. Check if Any Element Has Prime Frequency
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public bool CheckPrimeFrequency(int[] nums)
  {
    // Frequency array for numbers 0-100 (based on problem constraints)
    int[] frequency = new int[101];

    // Count occurrences of each number
    for (int index = 0; index < nums.Length; index++)
      frequency[nums[index]]++;

    // Check each number's frequency for primality
    for (int number = 0; number < frequency.Length; number++)
    {
      // If frequency is positive and prime, return true
      if (frequency[number] > 0 && IsPrime(frequency[number]))
        return true;
    }

    // No prime frequencies found
    return false;
  }

  // Helper method to check if a number is prime
  private bool IsPrime(int num)
  {
    // 1 is not prime
    if (num == 1)
      return false;
    // 2 is prime
    if (num == 2)
      return true;

    // Check divisibility from 2 up to square root
    for (int divisor = 2; divisor <= Math.Sqrt(num); divisor++)
    {
      // If divisible, number is not prime
      if (num % divisor == 0)
        return false;
    }

    // No divisors found, number is prime
    return true;
  }
}
