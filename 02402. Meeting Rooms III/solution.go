/**
 * Problem: 2402. Meeting Rooms III
 *
 * Difficulty: Hard
 *
 * Language: Golang
 *
 * Performance: Runtime - 39 ms (Beats 100%)
 */

func mostBooked(n int, meetings [][]int) int {
	// Initialize counters for how many meetings each room has hosted
	counts := make([]int, n)
	
	// Track when each room will be available (end time of current meeting)
	ends := make([]int, n)
	
	// Sort meetings by start time to process them chronologically
	slices.SortFunc(meetings, func(a, b []int) int { return a[0] - b[0] })

	outer:
		// Process each meeting in chronological order
		for _, meeting := range meetings {
			// Try to find the smallest numbered available room
			for roomIndex := range n {
				// Skip if room is still occupied (end time > meeting start time)
				if ends[roomIndex] > meeting[0] {
					continue
				}
				
				// Room is available - assign meeting to this room
				ends[roomIndex] = meeting[1]  // Update room's end time
				counts[roomIndex]++           // Increment meeting count for this room
				continue outer               // Move to next meeting
			}

			// All rooms are occupied - find the room that becomes available earliest
			earliestRoomIndex := 0
			earliestEndTime := ends[0]
			
			// Search through all rooms to find the one with earliest end time
			for roomIndex := 1; roomIndex < len(ends); roomIndex++ {
				if ends[roomIndex] < earliestEndTime {
					earliestEndTime = ends[roomIndex]
					earliestRoomIndex = roomIndex
				}
			}

			// Assign meeting to the earliest available room
			// Add meeting duration to the room's current end time (delay the meeting)
			ends[earliestRoomIndex] += meeting[1] - meeting[0]
			counts[earliestRoomIndex]++  // Increment meeting count for this room
	}

	// Return the index of the room with maximum meeting count
	// slices.Index finds first occurrence, ensuring smallest room number in case of ties
	return slices.Index(counts, slices.Max(counts))
}
