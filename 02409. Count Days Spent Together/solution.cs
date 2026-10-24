/**
 * Problem: 2409. Count Days Spent Together
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  // Store cumulative days before each month in a non-leap year.
  int[] dayStack = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];

  public int CountDaysTogether(string arriveAlice, string leaveAlice, string arriveBob, string leaveBob)
  {
    // Convert Alice's arrival and departure dates to days of the year.
    int a1 = CalPoint(arriveAlice), b1 = CalPoint(leaveAlice);

    // Convert Bob's arrival and departure dates to days of the year.
    int a2 = CalPoint(arriveBob), b2 = CalPoint(leaveBob);

    // Check whether Alice arrives during Bob's stay.
    if (a1 <= b2 && a1 >= a2)
    {
      // Return the overlap when Bob leaves before Alice.
      if (b1 > b2) return b2 - a1 + 1;

      // Return the overlap when Alice leaves first.
      return b1 - a1 + 1;
    }

    // Check whether Bob arrives during Alice's stay.
    if (a2 >= a1 && a2 <= b1)
    {
      // Return the overlap when Alice leaves before Bob.
      if (b2 > b1) return b1 - a2 + 1;

      // Return the overlap when Bob leaves first.
      return b2 - a2 + 1;
    }

    // Return zero when the stays do not overlap.
    return 0;
  }

  // Convert an MM-DD date to its day of the year.
  public int CalPoint(string MM_DD)
  {
    // Extract the month and day from the date string.
    int month;
    int day;
    TakeDayAndMonth(MM_DD, out month, out day);

    // Add the days before the month to the day of the month.
    return dayStack[month - 1] + day;
  }

  // Extract the month and day values from an MM-DD date.
  public void TakeDayAndMonth(string MM_DD, out int month, out int day)
  {
    // Parse the month digits.
    month = (MM_DD[0] - 48) * 10 + (MM_DD[1] - 48);
    // Parse the day digits.
    day = (MM_DD[3] - 48) * 10 + (MM_DD[4] - 48);

    // Complete the date parsing operation.
    return;
  }
}
