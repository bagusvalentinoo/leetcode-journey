/**
 * Problem: 1491. Average Salary Excluding the Minimum and Maximum Salary
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func average(salary []int) float64 {
  // Sum all salaries, track minimum and maximum
  sum, minVal, maxVal := 0, salary[0], salary[0]

  // Single pass to find sum, min, and max
  for _, sal := range salary {
    sum += sal
    
    if sal < minVal {
      minVal = sal
    }
    if sal > maxVal {
      maxVal = sal
    }
  }

  // Return average excluding min and max
  return float64(sum-minVal-maxVal) / float64(len(salary)-2)
}
