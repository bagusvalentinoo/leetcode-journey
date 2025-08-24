/**
 * Problem: 1156. Swap For Longest Repeated Character Substring
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func maxRepOpt1(text string) int {
	// counts maps each rune to its total occurrence in the input string
	counts := make(map[rune]int)

	// Count the frequency of each character in text
	for _, ch := range text {
		counts[ch]++
	}

	// ans stores the maximum length of repeated character substring found
	ans := 0
	// start is the starting index of the current group of repeated characters
	start := 0

	// Iterate through the string to find all groups of repeated characters
	for start < len(text) {
		// end is the index after the last character of the current group
		end := start
		// curChar is the character at the current group
		curChar := text[start]

		// Move end forward while the character matches curChar
		for end < len(text) && text[end] == curChar {
			end++
		}

		// curLen is the length of the current group of repeated characters
		curLen := end - start

		// If there are more occurrences of curChar elsewhere, we can swap to extend the group by 1
		if curLen < counts[rune(curChar)] {
			ans = max(ans, curLen+1)
		} else {
			// Otherwise, the group length is the best we can do
			ans = max(ans, curLen)
		}

		// nextStart is the index after a single different character (potential swap position)
		nextStart := end + 1
		// nextEnd is the index after the next group of curChar
		nextEnd := nextStart

		// Check if there is another group of curChar after a single different character
		if nextStart < len(text) && text[nextStart] == curChar {
			// Move nextEnd forward while the character matches curChar
			for nextEnd < len(text) && text[nextEnd] == curChar {
				nextEnd++
			}

			// combinedLen is the total length of both groups of curChar separated by one character
			combinedLen := curLen + (nextEnd - nextStart)

			// If there are more occurrences of curChar, we can swap to extend the combined group by 1
			if combinedLen < counts[rune(curChar)] {
				ans = max(ans, combinedLen+1)
			} else {
				// Otherwise, the combined length is the best we can do
				ans = max(ans, combinedLen)
			}
		}
		
		// Move start to the next group of characters
		start = end
	}

	// Return the maximum length of repeated character substring found
	return ans
}
