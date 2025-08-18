/**
 * Problem: 679. 24 Game
 *
 * Difficulty: Hard
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

// abs returns the absolute value of a float64 number.
// Used to compare floating point results with a tolerance.
func abs(n float64) float64 {
	if n < 0 {
		return -n
	}
	
	return n
}

// operationsResult computes all possible results of applying basic arithmetic operations
// (+, -, *, /) between two float64 numbers a and b.
// It returns a slice containing the results of a-b, a+b, b-a, a*b, b/a (if a > 0), and a/b (if b > 0).
func operationsResult(a, b float64) []float64 {
	results := []float64{a - b, a + b, b - a, a * b}

	// Only perform division if the divisor is not zero to avoid division by zero.
	if a > 0 {
		results = append(results, b/a)
	}
	if b > 0 {
		results = append(results, a/b)
	}

	return results
}

// helper recursively checks if the given slice of float64 cards can be combined
// using arithmetic operations to reach the value 24.
// Returns true if possible, false otherwise.
func helper(cards []float64) bool {
	numCards := len(cards)

	// Base case: only one card left, check if it is close enough to 24.
	if numCards == 1 {
		return abs(cards[0]-24) <= 0.1
	}

	// Try every pair of cards and every possible operation between them.
	for i := 0; i < numCards; i++ {
		for j := i + 1; j < numCards; j++ {
			var remainingCards []float64

			// Build a new slice excluding the i-th and j-th cards.
			for k := 0; k < numCards; k++ {
				if k != i && k != j {
					remainingCards = append(remainingCards, cards[k])
				}
			}

			// Get all possible results of operations between cards[i] and cards[j].
			ops := operationsResult(cards[i], cards[j])

			// For each operation result, add it to the remaining cards and recurse.
			for _, op := range ops {
				remainingCards = append(remainingCards, op)

				if helper(remainingCards) {
					return true
				}

				// Backtrack: remove the last operation result.
				remainingCards = remainingCards[:len(remainingCards)-1]
			}
		}
	}

	return false
}

// judgePoint24 is the main function that checks if the input slice of integers cards
// can be combined using arithmetic operations to reach the value 24.
// Converts the input to float64 and calls the recursive helper function.
func judgePoint24(cards []int) bool {
	var floatCards []float64

	// Convert each integer card to float64 for calculation.
	for _, card := range cards {
		floatCards = append(floatCards, float64(card))
	}

	return helper(floatCards)
}
