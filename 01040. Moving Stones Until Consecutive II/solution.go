/**
 * Problem: 1040. Moving Stones Until Consecutive II
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func numMovesStonesII(stones []int) []int {
	n := len(stones)
	sort.Ints(stones)

	// Calculate the maximum moves
	maxMoves := max(stones[n-1]-stones[1]-n+2, stones[n-2]-stones[0]-n+2)

	// Calculate the minimum moves
	minMoves := n
	j := 0
	for i := 0; i < n; i++ {
		// Use sliding window to find stones within range [stones[i], stones[i]+n-1]
		for j < n && stones[j]-stones[i]+1 <= n {
			j++
		}
		
		alreadyInside := j - i
		
		// Special case: if we have n-1 stones consecutive and 1 stone far away
		if alreadyInside == n-1 && stones[j-1]-stones[i]+1 == n-1 {
			minMoves = min(minMoves, 2)
		} else {
			minMoves = min(minMoves, n-alreadyInside)
		}
	}

	return []int{minMoves, maxMoves}
}
