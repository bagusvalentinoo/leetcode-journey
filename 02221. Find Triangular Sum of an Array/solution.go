/**
 * Problem: 2221. Find Triangular Sum of an Array
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 5 ms (Beats 100%)
 */

// triangularSum calculates the triangular sum of the given array nums.
// It uses combinatorial mathematics to compute the result efficiently.
func triangularSum(nums []int) int {
	// Get the length of the input array.
	n := len(nums)
	// Initialize the result variable to store the final sum.
	res := 0

	// Iterate through each element in nums.
	for i := 0; i < n; i++ {
		// Calculate the binomial coefficient modulo 10 for current index.
		ncrMod10 := nCrMod10(n-1, i)
		// Update the result by adding the product of coefficient and element, modulo 10.
		res = (res + ncrMod10*nums[i]) % 10
	}

	// Return the computed triangular sum.
	return res
}

// nCrMod10 computes the binomial coefficient C(n, r) modulo 10.
// It uses the Chinese Remainder Theorem to combine results modulo 2 and 5.
func nCrMod10(n, r int) int {
	// Compute C(n, r) modulo 2.
	a, b := nCrModP(n, r, 2), nCrModP(n, r, 5)

	// Combine the results using CRT to get modulo 10.
	return crtCombine(a, 2, b, 5)
}

// nCrModP computes the binomial coefficient C(n, r) modulo a prime p.
// It uses Lucas' Theorem for efficient computation.
func nCrModP(n, r, p int) int {
	// Initialize result to 1.
	res := 1

	// Loop until both n and r are zero.
	for n > 0 || r > 0 {
		// Get the current digits of n and r in base p.
		np, rp := n % p, r % p

		// If r's digit is greater than n's, result is zero.
		if rp > np {
			return 0
		}

		// Multiply the result by the simple binomial coefficient modulo p.
		res = (res * simpleNcrMod(np, rp, p)) % p
		// Move to the next digit.
		n /= p
		r /= p
	}

	// Return the computed coefficient modulo p.
	return res
}

// simpleNcrMod computes C(n, r) modulo p for small n and r.
// It uses factorial properties and modular inverse.
func simpleNcrMod(n, r, p int) int {
	// Handle base cases where r is 0 or r equals n.
	if r == 0 || r == n {
		return 1
	}

	// Initialize numerator and denominator for the binomial formula.
	num, den := 1, 1

	// Compute numerator and denominator modulo p.
	for i := 0; i < r; i++ {
		num = (num * (n - i)) % p
		den = (den * (i + 1)) % p
	}

	// Return the result after multiplying by modular inverse of denominator.
	return (num * modInverse(den, p)) % p
}

// modInverse computes the modular inverse of a modulo m.
// It uses the extended Euclidean algorithm.
func modInverse(a, m int) int {
	// Get gcd and coefficients from extended GCD.
	g, x, _ := extendedGCD(a, m)

	// If gcd is not 1, inverse does not exist.
	if g != 1 {
		return 0
	}

	// Return the modular inverse in the range [0, m).
	return (x % m + m) % m
}

// extendedGCD computes the extended greatest common divisor of a and b.
// It returns gcd and coefficients x, y such that ax + by = gcd(a, b).
func extendedGCD(a, b int) (gcd, x, y int) {
	// Base case: if b is zero, gcd is a.
	if b == 0 {
		return a, 1, 0
	}

	// Recursively compute extended GCD for b and a mod b.
	gcd, x1, y1 := extendedGCD(b, a%b)

	// Update coefficients for current recursion level.
	x = y1
	y = x1 - (a/b)*y1

	// Return gcd and coefficients.
	return
}

// crtCombine combines two modular results using the Chinese Remainder Theorem.
// It finds x such that x ≡ a1 mod m1 and x ≡ a2 mod m2.
func crtCombine(a1, m1, a2, m2 int) int {
	// Compute the difference between the two results modulo m2.
	diff := (a2 - a1 + m2) % m2
	// Compute the modular inverse of m1 modulo m2.
	inv := modInverse(m1, m2)

	// Return the combined result modulo m1 * m2.
	return (a1 + m1*diff*inv) % (m1 * m2)
}
