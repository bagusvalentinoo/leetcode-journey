/**
 * Problem: 3340. Check Balanced String
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func isBalanced(num string) bool {
	// Array to store sums: index 0 for even positions, index 1 for odd positions
	digitSums := [2]int{0, 0}

	// Iterate through each character in the string
	for position := 0; position < len(num); position++ {
		// Add digit to appropriate sum based on parity of index
		digitSums[position%2] += int(num[position] - '0')
	}

	// Return true if sums at even and odd indices are equal
	return digitSums[0] == digitSums[1]
}
