/**
 * Problem: 1488. Avoid Flood in The City
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 15 ms (Beats 100%)
 */

// DRYDAY stores the indices of days when it is possible to dry a lake.
var DRYDAY [50000]int

// COUNT tracks the number of dry days recorded.
// HEAD points to the current dry day being considered.
var COUNT, HEAD int

// USED is a sentinel value indicating a dry day has been used.
const USED = -1

// insertDryDay appends a dry day index to DRYDAY.
func insertDryDay(x int) {
	DRYDAY[COUNT] = x
	COUNT++
}

// findDryDay searches for the next available dry day after a given day.
func findDryDay(day int) int {
	// Advance HEAD to skip used dry days.
	for HEAD < COUNT && DRYDAY[HEAD] == USED {
		HEAD++
	}

	// Search for the next available dry day after the specified day.
	for i := HEAD; i < COUNT; i++ {
		if DRYDAY[i] > day {
			return i
		}
	}

	// Return USED if no suitable dry day is found.
	return USED
}

// init sets a memory limit for the program to avoid excessive usage.
func init() {
	debug.SetMemoryLimit(11_000_000)
}

// avoidFlood determines the sequence of actions to avoid flooding given rain events.
func avoidFlood(rains []int) []int {
	COUNT, HEAD = 0, 0

	n := len(rains)

	// lakehist maps each lake to the last day it was filled.
	lakehist := make(map[int]int, n>>2)

	for day, lake := range rains {
		// If lake is 0, it is a dry day.
		if lake == 0 {
			rains[day] = 0x1EE7C0DE

			insertDryDay(day)

			continue
		}

		// Mark the day as used since it is raining.
		rains[day] = USED

		// If the lake was previously filled, try to dry it.
		if past, isfull := lakehist[lake]; isfull {
			idx := findDryDay(past)

			if idx == USED {
				return nil
			}

			rains[DRYDAY[idx]] = lake
			DRYDAY[idx] = USED
		}
		
		// Update the last filled day for the lake.
		lakehist[lake] = day
	}

	return rains
}
