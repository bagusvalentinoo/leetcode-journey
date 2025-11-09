/**
 * Problem: 1297. Maximum Number of Occurrences of a Substring
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 9 ms (Beats 100%)
 */

func maxFreq(s string, maxLetters int, minSize int, maxSize int) int {
	// Check if the input string is empty or any parameter is invalid
	if s == "" || maxLetters <= 0 || minSize <= 0 || maxSize <= 0 {
		return 0
	}

	// If the string length is less than the minimum size, return 0
	if len(s) < minSize {
		return 0
	}

	// Initialize a map to store substring frequencies
	freqs := map[string]int{}

	// Initialize an array to count character occurrences
	var cnt [26]int

	// Variable to track the number of distinct characters in the window
	distincts := 0

	// Populate the initial window of size `minSize`
	for i := 0; i < minSize; i++ {
		idx := s[i] - 'a'
		cnt[idx]++

		// Increment distinct character count if this is the first occurrence
		if cnt[idx] == 1 {
			distincts++
		}
	}

	// Add the initial substring to the frequency map if it meets the criteria
	if distincts <= maxLetters {
		subStr := s[0:minSize]
		freqs[subStr] += 1
	}

	// Slide the window across the string
	for r := minSize; r < len(s); r++ {
		// Remove the leftmost character from the window
		left := r - minSize
		lIdx := s[left] - 'a'
		cnt[lIdx]--

		// Decrease distinct character count if the character count becomes zero
		if cnt[lIdx] == 0 {
			distincts--
		}

		// Add the new rightmost character to the window
		rIdx := s[r] - 'a'
		cnt[rIdx] += 1

		// Increment distinct character count if this is the first occurrence
		if cnt[rIdx] == 1 {
			distincts++
		}

		// Add the current substring to the frequency map if it meets the criteria
		if distincts <= maxLetters {
			subStr := s[left+1 : r+1]
			freqs[subStr] += 1
		}
	}

	// Initialize the result variable to store the maximum frequency
	ans := 0

	// Iterate through the frequency map to find the maximum frequency
	for _, v := range freqs {
		if ans < v {
			ans = v
		}
	}

	// Return the maximum frequency of valid substrings
	return ans
}
