/**
 * Problem: 1323. Maximum 69 Number
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int Maximum69Number(int num)
  {
    // Iterate through each digit from right to left
    // t = remaining number to process, p = current place value (1, 10, 100, ...)
    // change = amount already added to num from previous changes
    for (int temp = num, placeValue = 1, amountAdded = 0; temp > 0; placeValue *= 10, temp /= 10)
    {
      // Check if current digit is 6
      if (temp % 10 == 6)
      {
        // Change 6 to 9: add 3 * placeValue to the number
        // Subtract previously added amount to avoid double counting
        num += 3 * placeValue - amountAdded;

        // Update the amount added for future iterations
        amountAdded = 3 * placeValue;
      }
    }

    // Return the maximum number after changing at most one 6 to 9
    return num;
  }
}
