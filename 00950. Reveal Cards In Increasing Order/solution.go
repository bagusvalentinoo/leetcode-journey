/**
 * Problem: 950. Reveal Cards In Increasing Order
 *
 * Difficulty: Medium
 *
 * Language: Go
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

import (
	"sort"
)

func deckRevealedIncreasing(deck []int) []int {
	// Sort the input deck in ascending order
	n := len(deck)
	sort.Ints(deck)

	// Create a queue with indices 0 to n-1
	queue := make([]int, n)
	for i := range queue {
		queue[i] = i
	}

	// Initialize result array that will hold the final deck
	result := make([]int, n)
	index := 0

	// Simulate the reveal-draw process to determine each card's position
	for len(queue) > 0 {
		// Take the first position from the queue
		pos := queue[0]
		queue = queue[1:]

		// Place the current card at this position
		result[pos] = deck[index]
		index++

		// If queue not empty, move the next card to the bottom of the deck
		if len(queue) > 0 {
			queue = append(queue, queue[0])
			queue = queue[1:]
		}
	}

	return result
}