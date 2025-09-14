/**
 * Problem: 1224. Maximum Equal Frequency
 *
 * Difficulty: Hard
 *
 * Language: Golang
 *
 * Performance: Runtime - 3 ms (Beats 100%)
 */

// maxEqualFreq returns the length of the longest prefix of nums such that, after removing at most one element, all numbers have the same frequency.
func maxEqualFreq(nums []int) int {
	// numberFreq maps each number to its frequency in nums.
	numberFreq := make(map[int]int)

	// Count the frequency of each number in nums.
	for _, num := range nums {
		numberFreq[num]++
	}

	// freqCounter maps each frequency to the count of numbers having that frequency.
	freqCounter := make(map[int]int)
	
	// Count how many numbers have each frequency.
	for _, freq := range numberFreq {
		freqCounter[freq]++
	}

	// Iterate backwards through nums to find the longest valid prefix.
	for i := len(nums) - 1; i >= 0; i-- {
		// Check if the current frequency distribution is valid.
		if helper(freqCounter) == true {
			return i + 1
		}

		// Decrement the count of the current frequency for nums[i].
		freqCounter[numberFreq[nums[i]]]--

		// Remove the frequency from freqCounter if its count becomes zero.
		if freqCounter[numberFreq[nums[i]]] == 0 {
			delete(freqCounter, numberFreq[nums[i]])
		}

		// Decrement the frequency of nums[i].
		numberFreq[nums[i]]--

		// If the new frequency is not zero, increment its count in freqCounter.
		if numberFreq[nums[i]] != 0 {
			freqCounter[numberFreq[nums[i]]]++
		}
	}

	// If no valid prefix is found, return 0.
	return 0
}

// helper checks if the frequency distribution in freq is valid for the problem's condition.
func helper(freq map[int]int) bool {
	// If there is only one frequency, check if it's 1 or only one number has that frequency.
	if len(freq) == 1 {
		for k, v := range freq {
			return k == 1 || v == 1
		}
	}
	// If there are not exactly two frequencies, it's not valid.
	if len(freq) != 2 {
		return false
	}

	// magic stores the two frequency-count pairs for easier comparison.
	magic := make([][]int, 0, 2)

	for k, v := range freq {
		magic = append(magic, []int{k, v})
	}

	// Ensure magic[0] has the smaller frequency.
	if magic[0][0] > magic[1][0] {
		magic[0], magic[1] = magic[1], magic[0]
	}
	// If one frequency is 1 and only one number has it, it's valid.
	if magic[0][0] == 1 && magic[0][1] == 1 {
		return true
	}
	// If the higher frequency is exactly one more than the lower and only one number has the higher frequency, it's valid.
	if magic[1][0]-magic[0][0] == 1 && magic[1][1] == 1 {
		return true
	}

	// Otherwise, the distribution is not valid.
	return false
}
