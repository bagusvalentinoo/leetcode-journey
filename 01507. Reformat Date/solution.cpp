/**
 * Problem: 1507. Reformat Date
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  string reformatDate(string date) {
    // Split date into day, month, and year components via string stream
    string dayWithSuffix, monthAbbrev, yearString;
    stringstream stream(date);

    // Parse day with suffix, month abbreviation, and year
    stream >> dayWithSuffix >> monthAbbrev >> yearString;

    // Extract day number by removing ordinal suffix (last 2 chars) and pad to 2
    // digits
    string dayNumber = dayWithSuffix.substr(0, dayWithSuffix.size() - 2);
    string dayString = dayNumber.size() == 1 ? "0" + dayNumber : dayNumber;

    // Map month abbreviation to two-digit month number
    unordered_map<string, string> monthMap = {
        {"Jan", "01"}, {"Feb", "02"}, {"Mar", "03"}, {"Apr", "04"},
        {"May", "05"}, {"Jun", "06"}, {"Jul", "07"}, {"Aug", "08"},
        {"Sep", "09"}, {"Oct", "10"}, {"Nov", "11"}, {"Dec", "12"}};

    // Look up month number from abbreviation
    string monthString = monthMap[monthAbbrev];

    // Return formatted date as YYYY-MM-DD
    return yearString + "-" + monthString + "-" + dayString;
  }
};
