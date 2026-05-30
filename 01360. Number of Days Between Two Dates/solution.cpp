/**
 * Problem: 1360. Number of Days Between Two Dates
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution
{
public:
  int daysBetweenDates(string date1, string date2)
  {
    // Initialize tm structures for both dates
    struct tm tm1 = {}, tm2 = {};

    // Parse first date string (YYYY-MM-DD) into tm1 structure
    sscanf(date1.c_str(), "%d-%d-%d", &tm1.tm_year, &tm1.tm_mon,
           &tm1.tm_mday);

    // Parse second date string (YYYY-MM-DD) into tm2 structure
    sscanf(date2.c_str(), "%d-%d-%d", &tm2.tm_year, &tm2.tm_mon,
           &tm2.tm_mday);

    // Adjust year: tm_year represents years since 1900
    tm1.tm_year -= 1900;
    tm2.tm_year -= 1900;

    // Adjust month: tm_mon expects 0-11 (January = 0)
    tm1.tm_mon -= 1;
    tm2.tm_mon -= 1;

    // Convert tm structures to time_t (seconds since epoch)
    time_t time1 = mktime(&tm1);
    time_t time2 = mktime(&tm2);

    // Calculate difference in days and return absolute value
    return abs((int)(difftime(time1, time2) / (60 * 60 * 24)));
  }
};
