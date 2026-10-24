/**
 * Problem: 2409. Count Days Spent Together
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func countDaysTogether(arriveAlice string, leaveAlice string, arriveBob string, leaveBob string) int {
  // Store the number of days in each month of a non-leap year
  daysInMonth := []int{31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31}

  // Convert a date into its one-based day of the year
  getDayOfYear := func(date string) int {
    // Extract the zero-based month and day from the date string
    month := int(date[0]-'0')*10 + int(date[1]-'0') - 1
    day := int(date[3]-'0')*10 + int(date[4]-'0')

    // Initialize the day of the year to the day of the month
    dayOfYear := day

    // Add the days in the months preceding the date's month
    for i := 0; i < month; i++ {
      dayOfYear += daysInMonth[i]
    }

    // Return the date's day of the year
    return dayOfYear
  }

  // Convert all stay boundaries into days of the year
  aliceStart, aliceEnd := getDayOfYear(arriveAlice), getDayOfYear(leaveAlice)
  bobStart, bobEnd := getDayOfYear(arriveBob), getDayOfYear(leaveBob)

  // Start with Alice's range as the possible overlap
  startDay, endDay := aliceStart, aliceEnd
  
  // Move the start forward when Bob arrives later
  if bobStart > startDay {
    startDay = bobStart
  }
  // Move the end backward when Bob leaves earlier
  if bobEnd < endDay {
    endDay = bobEnd
  }

  // Return zero when the stays do not intersect
  if endDay < startDay {
    return 0
  }

  // Return the inclusive overlap between both stays
  return endDay - startDay + 1
}
