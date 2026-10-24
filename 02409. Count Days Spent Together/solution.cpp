/**
 * Problem: 2409. Count Days Spent Together
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  int countDaysTogether(string arriveAlice, string leaveAlice, string arriveBob,
                        string leaveBob) {
    // Store the number of days in each month of a non-leap year
    vector<int> daysInMonth = {31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};

    // Convert a date into its one-based day of the year
    auto getDayOfYear = [&](string date) {
      // Extract the zero-based month and day from the date string
      int month = stoi(date.substr(0, 2)) - 1;
      int day = stoi(date.substr(3));

      // Initialize the day of the year to the day of the month
      int dayOfYear = day;

      // Add the days in the months preceding the date's month
      for (int i = 0; i < month; i++)
        dayOfYear += daysInMonth[i];

      // Return the date's day of the year
      return dayOfYear;
    };

    // Find the first day and last day shared by both stays
    int startDay = max(getDayOfYear(arriveAlice), getDayOfYear(arriveBob)),
        endDay = min(getDayOfYear(leaveAlice), getDayOfYear(leaveBob));

    // Return the inclusive overlap, or zero when the stays do not intersect
    return max(0, endDay - startDay + 1);
  }
};
