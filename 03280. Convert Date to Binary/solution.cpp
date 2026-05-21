/**
 * Problem: 3280. Convert Date to Binary
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
  string convertDateToBinary(string date)
  {
    // Extract year from date string (first 4 characters)
    string yearStr = date.substr(0, 4);
    // Extract month from date string (characters at positions 5-6)
    string monthStr = date.substr(5, 2);
    // Extract day from date string (characters at positions 8-9)
    string dayStr = date.substr(8, 2);

    // Convert string parts to integers
    int year = stoi(yearStr);
    int month = stoi(monthStr);
    int day = stoi(dayStr);

    // Strings to store binary representations
    string binaryYear = "";
    string binaryMonth = "";
    string binaryDay = "";

    // Convert year to binary
    while (year > 0)
    {
      // Prepend remainder (0 or 1) to binary string
      binaryYear = to_string(year % 2) + binaryYear;
      // Divide year by 2
      year /= 2;
    }

    // Convert month to binary
    while (month > 0)
    {
      // Prepend remainder (0 or 1) to binary string
      binaryMonth = to_string(month % 2) + binaryMonth;
      // Divide month by 2
      month /= 2;
    }

    // Convert day to binary
    while (day > 0)
    {
      // Prepend remainder (0 or 1) to binary string
      binaryDay = to_string(day % 2) + binaryDay;
      // Divide day by 2
      day /= 2;
    }

    // Join binary parts with hyphens and return
    return binaryYear + "-" + binaryMonth + "-" + binaryDay;
  }
};
