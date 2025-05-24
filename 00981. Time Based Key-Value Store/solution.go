/**
 * Problem: 981. Time Based Key-Value Store
 *
 * Difficulty: Medium
 *
 * Language: Go
 *
 * Performance: Runtime - 13 ms (Beats 100%)
 */

// Tuple represents a timestamp-value pair
type Tuple struct {
	timestamp int
	value     string
}

// TimeMap stores key-value pairs with timestamps
type TimeMap struct {
	store map[string][]*Tuple
}

// Constructor initializes a new TimeMap with an empty store
func Constructor() TimeMap {
	// Initialize map to store key-timestamp-value relationships
	store := make(map[string][]*Tuple)

	return TimeMap{
		store: store, 
	}
}

// Set stores a key-value pair with the given timestamp
func (this *TimeMap) Set(key string, value string, timestamp int)  {
	tupleArr, exists := this.store[key]

	// Create new timestamp-value tuple
	newTuple := &Tuple{
		timestamp: timestamp,
		value:     value,
	}

	if !exists {
		// If key doesn't exist, create a new array and add the tuple
		newArr := make([]*Tuple, 0)
		newArr = append(newArr, newTuple) 

		this.store[key] = newArr
	} else {
		// If key exists, append the new tuple to existing array
		tupleArr = append(tupleArr, newTuple)
		this.store[key] = tupleArr 
	}
}

// Get retrieves the value for a key with the largest timestamp less than or equal to the given timestamp
func (this *TimeMap) Get(key string, timestamp int) string {
	// Get the list of timestamp-value pairs for the key
	timeValuePairs, keyExists := this.store[key]

	// Return empty string if key doesn't exist in the store
	if !keyExists {
		return ""
	} 

	// Use binary search to find the value with the largest timestamp <= given timestamp
	left := 0
	right := len(timeValuePairs) - 1 
	bestValue := ""

	for left <= right {
		// Calculate middle index to avoid integer overflow
		mid := left + (right - left) / 2 

		// If current timestamp is valid, update best value and search in right half
		if timeValuePairs[mid].timestamp <= timestamp {
			bestValue = timeValuePairs[mid].value
			left = mid + 1
		} else {
			// If timestamp is too large, search in left half
			right = mid - 1
		}
	}

	return bestValue
}