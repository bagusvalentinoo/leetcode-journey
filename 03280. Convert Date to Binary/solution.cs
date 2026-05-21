/**
 * Problem: 3280. Convert Date to Binary
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public string ConvertDateToBinary(string date)
  {
    // Offset to convert ASCII character to numeric digit
    const int digitOffset = '0';

    // Extract year from date string (positions 0-3)
    int year = 1000 * (date[0] - digitOffset) + 100 * (date[1] - digitOffset) + 10 * (date[2] - digitOffset) + (date[3] - digitOffset);
    // Extract month from date string (positions 5-6)
    int month = 10 * (date[5] - digitOffset) + (date[6] - digitOffset);
    // Extract day from date string (positions 8-9)
    int day = 10 * (date[8] - digitOffset) + (date[9] - digitOffset);

    // Convert each part to binary and join with hyphens
    return Convert.ToString(year, 2) + "-" + Convert.ToString(month, 2) + "-" + Convert.ToString(day, 2);
  }
}
