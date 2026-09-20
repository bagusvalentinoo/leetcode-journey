/**
 * Problem: 1796. Second Largest Digit in a String
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int SecondHighest(string s)
  {
    // Initialize largest and second largest digits as not found
    int largest = -1,
        secondLargest = -1;

    // Iterate through each character in the string
    foreach (char currentChar in s)
    {
      // Skip non-digit characters
      if (currentChar < '0' || currentChar > '9') continue;

      // Convert digit character to numeric value
      int digit = currentChar - '0';

      // If digit is greater than largest
      if (digit > largest)
      {
        // Shift largest to second largest
        secondLargest = largest;
        // Update largest with current digit
        largest = digit;
      }
      // If digit is distinct from largest and greater than second largest
      else if (digit < largest && digit > secondLargest)
        // Update second largest
        secondLargest = digit;
    }

    // Return second largest digit or -1 if it does not exist
    return secondLargest;
  }
}
