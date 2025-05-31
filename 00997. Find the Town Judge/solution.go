/**
 * Problem: 997. Find the Town Judge
 *
 * Difficulty: Easy
 *
 * Language: Go
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func findJudge(n int, trust [][]int) int {
	// trustsOthers tracks how many people each person trusts
	trustsOthers := make([]int, n+1)
	// trustedBy tracks how many people trust each person
	trustedBy := make([]int, n+1)
	
	// Process each trust relationship
	for _, relation := range trust {
		trustsOthers[relation[0]]++
		trustedBy[relation[1]]++
	}

	// Check for judge: doesn't trust anyone and is trusted by everyone else
	for person := 1; person <= n; person++ {
		if trustsOthers[person] == 0 && trustedBy[person] == n-1 { return person }
	}

	// No judge found
	return -1
}