/**
 * Problem: 1979. Find Greatest Common Divisor of Array
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func findGCD(nums []int) int {
  // Initialize smallest and largest with the first element
  smallest, largest := nums[0], nums[0]

  // Scan array to find minimum and maximum values
  for _, num := range nums {
    // Update smallest when a smaller value is found
    if num < smallest {
      smallest = num
    }
    // Update largest when a larger value is found
    if num > largest {
      largest = num
    }
  }

  // Return GCD of smallest and largest numbers
  return getGCD(smallest, largest)
}

// Helper to compute GCD of two numbers using Euclidean algorithm
func getGCD(a, b int) int {
  // Continue until remainder is zero
  for b != 0 {
    // Store remainder of a divided by b
    remainder := a % b

    // Move b into a for the next iteration
    a = b
    // Move remainder into b for the next iteration
    b = remainder
  }

  // Return the computed GCD
  return a
}
