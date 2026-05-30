/**
 * Problem: 1360. Number of Days Between Two Dates
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int DaysBetweenDates(string date1, string date2)
  {
    // Convert both date strings to DateTime objects
    DateTime firstDate = ConvertStringToDateTime(date1),
        secondDate = ConvertStringToDateTime(date2);

    // Calculate absolute difference in days between the two dates
    return Math.Abs((firstDate - secondDate).Days);
  }

  // Helper method to convert date string to DateTime
  public DateTime ConvertStringToDateTime(string dateString)
  {
    // Extract year from positions 0-3
    int year = int.Parse(dateString.Substring(0, 4));
    // Extract month from positions 5-6
    int month = int.Parse(dateString.Substring(5, 2));
    // Extract day from positions 8-end
    int day = int.Parse(dateString.Substring(8));

    // Create and return DateTime object
    return new DateTime(year, month, day);
  }
}
