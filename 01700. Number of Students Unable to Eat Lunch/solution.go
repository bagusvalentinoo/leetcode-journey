/**
 * Problem: 1700. Number of Students Unable to Eat Lunch
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func countStudents(students []int, sandwiches []int) int {
	// Count students preferring circular (0) and square (1)
	circularStudents, squareStudents := 0, 0

	// Tally each student preference
	for _, preference := range students {
		// Increment matching preference bucket
		if preference == 0 {
			circularStudents++
		} else {
			squareStudents++
		}
	}

	// Serve sandwiches from top of stack
	for _, sandwich := range sandwiches {
		// Handle circular sandwich request
		if sandwich == 0 {
			// No circular lover left, remaining square lovers cannot eat
			if circularStudents == 0 {
				return squareStudents
			}
			// One circular lover takes this sandwich
			circularStudents--
		} else {
			// No square lover left, remaining circular lovers cannot eat
			if squareStudents == 0 {
				return circularStudents
			}
			// One square lover takes this sandwich
			squareStudents--
		}
	}

	// All sandwiches taken, nobody left hungry
	return 0
}
