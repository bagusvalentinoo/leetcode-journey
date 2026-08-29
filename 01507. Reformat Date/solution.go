/**
 * Problem: 1507. Reformat Date
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */
 
func reformatDate(date string) string {
  // Split date into day, month, and year components
  dateParts := strings.Split(date, " ")

  // Extract day number by removing ordinal suffix and pad to 2 digits
  dayWithSuffix := dateParts[0]
  dayNumber := dayWithSuffix[:len(dayWithSuffix)-2]
  dayString := dayNumber
  if len(dayString) == 1 {
    dayString = "0" + dayString
  }

  // Map month abbreviation to two-digit month number
  monthMap := map[string]string{
    "Jan": "01",
    "Feb": "02",
    "Mar": "03",
    "Apr": "04",
    "May": "05",
    "Jun": "06",
    "Jul": "07",
    "Aug": "08",
    "Sep": "09",
    "Oct": "10",
    "Nov": "11",
    "Dec": "12",
  }

  // Look up month number from abbreviation
  monthString := monthMap[dateParts[1]]

  // Extract year component
  yearString := dateParts[2]

  // Return formatted date as YYYY-MM-DD
  return yearString + "-" + monthString + "-" + dayString
}
