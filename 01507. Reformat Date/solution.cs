/**
 * Problem: 1507. Reformat Date
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public string ReformatDate(string date)
  {
    // Extract month abbreviation via range and map to two-digit number using switch expression
    string month = date[^8..^5] switch
    {
      "Jan" => "01",
      "Feb" => "02",
      "Mar" => "03",
      "Apr" => "04",
      "May" => "05",
      "Jun" => "06",
      "Jul" => "07",
      "Aug" => "08",
      "Sep" => "09",
      "Oct" => "10",
      "Nov" => "11",
      _ => "12"
    };

    // Return formatted date as YYYY-MM-DD, padding single-digit day with leading zero
    return char.IsDigit(date[1])
        ? $"{date[^4..]}-{month}-{date[..2]}"
        : $"{date[^4..]}-{month}-0{date[..1]}";
  }
}
