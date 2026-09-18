/**
 * Problem: 1710. Maximum Units on a Truck
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func maximumUnits(boxTypes [][]int, truckSize int) int {
	// Sort box types by units per box in descending order
	sort.Slice(boxTypes, func(a, b int) bool {
		return boxTypes[a][1] > boxTypes[b][1]
	})

	// Track remaining capacity and total units loaded
	remaining, totalUnits := truckSize, 0

	// Take boxes greedily starting from highest-unit type
	for _, boxType := range boxTypes {
		// Take as many boxes of this type as fit
		take := remaining
		if boxType[0] < take {
			take = boxType[0]
		}

		// Add units from taken boxes to total
		totalUnits += take * boxType[1]
		// Reduce remaining truck capacity
		remaining -= take

		// Stop when truck is full
		if remaining == 0 {
			break
		}
	}

	// Return the maximum total units loaded on truck
	return totalUnits
}
