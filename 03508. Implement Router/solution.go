/**
 * Problem: 3508. Implement Router
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 114 ms (Beats 100%)
 */

// Router struct represents the router with memory limit, packet storage, and helper maps.
type Router struct {
	size    int              // Maximum number of packets the router can hold.
	packets [][3]int         // Slice to store packets, each packet is [source, destination, timestamp].
	ids     map[[3]int]struct{} // Map to quickly check existence of a packet by its unique key.
	dest    map[int][]int    // Map from destination to a sorted slice of timestamps for fast queries.
}

// Constructor initializes a Router with the given memory limit.
func Constructor(memoryLimit int) Router {
	r := Router{
		size:    memoryLimit,                // Set the memory limit.
		ids:     make(map[[3]int]struct{}),  // Initialize the packet existence map.
		dest:    make(map[int][]int),        // Initialize the destination-to-timestamps map.
	}
	return r
}

// AddPacket adds a packet to the router if it doesn't already exist and memory limit is not exceeded.
// Returns true if the packet was added, false otherwise.
func (this *Router) AddPacket(source int, destination int, timestamp int) bool {
	// Check if the packet already exists.
	if _, exists := this.ids[[3]int{source, destination, timestamp}]; exists {
		return false
	}

	// If memory limit is reached, remove the oldest packet.
	if len(this.packets) == this.size {
		oldestPacket := this.packets[0]           // Get the oldest packet.
		this.packets = this.packets[1:]           // Remove it from the packets slice.
		delete(this.ids, oldestPacket)             // Remove from existence map.
		this.dest[oldestPacket[1]] = this.dest[oldestPacket[1]][1:] // Remove its timestamp from destination map.
	}

	// Add the new packet to the packets slice.
	this.packets = append(this.packets, [3]int{source, destination, timestamp})
	// Mark the packet as existing.
	this.ids[[3]int{source, destination, timestamp}] = struct{}{}
	// Append the timestamp to the destination's list.
	this.dest[destination] = append(this.dest[destination], timestamp)

	return true
}

// ForwardPacket removes and returns the oldest packet in the router.
// Returns an empty slice if no packets are available.
func (this *Router) ForwardPacket() []int {
	if len(this.packets) == 0 {
		return []int{}
	}

	oldestPacket := this.packets[0]              // Get the oldest packet.
	this.packets = this.packets[1:]              // Remove it from the packets slice.
	delete(this.ids, oldestPacket)                // Remove from existence map.
	this.dest[oldestPacket[1]] = this.dest[oldestPacket[1]][1:] // Remove its timestamp from destination map.

	return []int{oldestPacket[0], oldestPacket[1], oldestPacket[2]} // Return the packet as a slice.
}

// GetCount returns the number of packets for a destination within a time range [startTime, endTime].
func (this *Router) GetCount(destination int, startTime int, endTime int) int {
	// Get the timestamps for the destination.
	timestamps := this.dest[destination]
	// Find the left boundary.
	left, _ := slices.BinarySearch(timestamps, startTime)
	// Find the right boundary (exclusive).
	right, _ := slices.BinarySearch(timestamps, endTime+1)

	// Return the count of timestamps in the range.
	return right - left
}
