/**
 * Problem: 412. Fizz Buzz
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func fizzBuzz(n int) []string {
	// Initialize result slice to store FizzBuzz strings
	result := make([]string, 0)

	// Iterate through numbers from 1 to n
	for i := 1; i <= n; i++ {
		// If number is divisible by both 3 and 5, append "FizzBuzz"
		if i%3 == 0 && i%5 == 0 {
			result = append(result, "FizzBuzz")
		} else if i%3 == 0 {
			// If number is divisible by 3 only, append "Fizz"
			result = append(result, "Fizz")
		} else if i%5 == 0 {
			// If number is divisible by 5 only, append "Buzz"
			result = append(result, "Buzz")
		} else {
			// Otherwise, append the number itself as a string
			result = append(result, strconv.Itoa(i))
		}
	}

	// Return the completed Fizz Buzz sequence
	return result
}
