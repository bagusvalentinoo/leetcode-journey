/**
 * Problem: 2359. Find Closest Node to Given Two Nodes
 *
 * Difficulty: Medium
 *
 * Language: Go
 *
 * Performance: Runtime - 9 ms (Beats 100%)
 */

func closestMeetingNode(edges []int, node1 int, node2 int) int {
	// Create distance arrays for both starting nodes
	dist1, dist2 := make([]int, len(edges)), make([]int, len(edges))

	// Calculate distances from node1 to all reachable nodes
	distance := 1
	for node1 != -1 {
		if dist1[node1] > 0 {
			break // Stop if we detect a cycle
		}

		dist1[node1] = distance
		distance++
		node1 = edges[node1]
	}

	// Calculate distances from node2 to all reachable nodes
	distance = 1
	for node2 != -1 {
		if dist2[node2] > 0 {
			break // Stop if we detect a cycle
		}

		dist2[node2] = distance
		distance++
		node2 = edges[node2]
	}

	// Find node with minimum maximum distance from both starting nodes
	minDistance := math.MaxInt
	result := -1

	for i := range dist1 {
		if dist1[i] > 0 && dist2[i] > 0 {
			maxDistance := max(dist1[i], dist2[i])

			if maxDistance < minDistance {
				minDistance = maxDistance
				result = i
			}
		}
	}
	
	return result
}