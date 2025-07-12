/**
 * Problem: 1900. The Earliest and Latest Rounds Where Players Compete
 *
 * Difficulty: Hard
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func earliestAndLatest(n, first, second int) []int {
	// Check if the two players are positioned symmetrically (will meet in first round)
	if first+second == n+1 {
		return []int{1, 1}
	}
	
	// Normalize positions to ensure first < second for easier calculation
	// If sum > n+1, swap and mirror positions
	if first+second > n+1 {
		first, second = n+1-second, n+1-first
	}

	// Function to calculate the earliest possible round where players can meet
	calcEarliest := func(n int) int {
		// Initialize earliest round counter
		earliest := 1

		// Case 1: Both players are in the first half of the bracket
		if first+second <= (n+1)/2 {
			// Keep eliminating rounds until players can potentially meet
			for first+second <= (n+1)/2 {
				earliest++
				n = (n + 1) / 2 // Calculate number of players in next round
			}
			
			// If players are not adjacent, they need one more round
			if second-first > 1 {
				return earliest + 1
			}
		}

		// Case 2: Players are adjacent (consecutive positions)
		if second-first == 1 {
			earliest++
			n = (n + 1) / 2 // Move to next round

			// Keep going until even number of players (players will meet)
			for n%2 > 0 {
				earliest++
				n = (n + 1) / 2
			}

			return earliest
		}

		// Case 3: Second player is in first half of current bracket
		if second <= (n+1)/2 {
			return earliest + 1
		}
		
		// Case 4: Players are separated by exactly one position
		if second-first == 2 {
			n = (n + 1) / 2 // Move to next round

			// Keep going until even number of players
			for n%2 > 0 {
				earliest++
				n = (n + 1) / 2
			}
		}

		// Special case: first player is at even position and sum equals total players
		if first%2 == 0 && first+second == n {
			earliest++
		}

		return earliest + 1
	}

	// Calculate latest possible round using bit manipulation and position analysis
	// min(log2(n-1) + 1, n+1-second) gives the maximum rounds possible
	latest := min(bits.Len(uint(n-1)), n+1-second)

	// Return both earliest and latest possible meeting rounds
	return []int{calcEarliest(n), latest}
}
