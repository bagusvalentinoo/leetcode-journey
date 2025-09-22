/**
 * Problem: 3005. Count Elements With Maximum Frequency
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func maxFrequencyElements(nums []int) int {
	// Create a map to store the frequency of each number in nums
	frequencyMap := make(map[int]int)
	
	// Initialize maxFreq to keep track of the highest frequency found
	maxFreq := 0
	
	// Initialize maxFreqCount to count how many numbers have the highest frequency
	maxFreqCount := 0

	// Count the frequency of each number in nums
	for _, num := range nums {
		frequencyMap[num]++
	}

	// Iterate through the frequency map to find the maximum frequency and count how many numbers have it
	for _, freq := range frequencyMap {
		if freq == maxFreq {
			// If current frequency equals the maximum, increment the count
			maxFreqCount++
		} else if freq > maxFreq {
			// If a new maximum frequency is found, update maxFreq and reset the count
			maxFreq = freq
			maxFreqCount = 1
		}
	}

	// Return the total number of elements with the maximum frequency
	return maxFreq * maxFreqCount
}
