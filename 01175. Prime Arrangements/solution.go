/**
 * Problem: 1175. Prime Arrangements
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func numPrimeArrangements(n int) int {
	primeCount, nonPrimeCount := 0, 0 // Initialize counters for prime and non-prime numbers

	// Iterate through numbers from 1 to n to count primes and non-primes
	for i := 1; i <= n; i++ {
		if isPrime(i) {
			primeCount++ // Increment prime counter if i is prime
		} else {
			nonPrimeCount++ // Increment non-prime counter otherwise
		}
	}

	result := 1 // Initialize result for factorial calculation

	// Calculate factorial of primeCount modulo 1_000_000_007
	for i := 2; i <= primeCount; i++ {
		result *= i
		result %= 1000000007
	}
	// Calculate factorial of nonPrimeCount modulo 1_000_000_007
	for i := 2; i <= nonPrimeCount; i++ {
		result *= i
		result %= 1000000007
	}

	return result // Return the final result
}

// isPrime checks whether a given integer n is a prime number.
// Returns true if n is prime, false otherwise.
func isPrime(n int) bool {
	if n == 1 {
		return false // 1 is not a prime number
	}

	// Check divisibility from 2 up to n-1
	for i := 2; i < n; i++ {
		if n%i == 0 {
			return false // n is divisible by i, so not prime
		}
	}

	return true // n is prime
}
