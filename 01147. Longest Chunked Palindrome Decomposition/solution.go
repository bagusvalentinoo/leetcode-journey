/**
 * Problem: 1147. Longest Chunked Palindrome Decomposition
 *
 * Difficulty: Hard
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func longestDecomposition(text string) int {
	return decomposeChunks(text)
}

// decomposeChunks recursively finds the longest chunked palindrome decomposition of the given string.
func decomposeChunks(text string) int {
	// Base case: if the string is empty, there are no chunks.
	if len(text) == 0 {
		return 0
	}

	// Initialize chunkSize to 1, representing the minimum possible chunk size.
	chunkSize := 1

	// Iterate over possible chunk sizes from 1 up to the length of the string.
	for ; chunkSize < len(text); chunkSize++ {
		// Check if the first character of the current chunk matches the last character of the corresponding chunk.
		if text[chunkSize-1] != text[len(text)-1] {
			continue // If not matching, continue to the next chunk size.
		}

		// Extract the prefix and suffix substrings of the current chunk size.
		prefix := text[:chunkSize]
		suffix := text[len(text)-chunkSize:]

		// If the prefix and suffix are equal, a palindrome chunk is found.
		if prefix == suffix {
			break // Exit the loop as a valid chunk is found.
		}
	}

	// If no matching chunk is found, the entire string is a single chunk.
	if chunkSize == len(text) {
		return 1
	}

	// Remove the matched prefix and suffix, and recursively decompose the remaining substring.
	remaining := text[chunkSize : len(text)-chunkSize]

	// Add 2 for the matched prefix and suffix, and recursively process the remaining substring.
	return 2 + decomposeChunks(remaining)
}
