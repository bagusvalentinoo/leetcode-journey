/**
 * Problem: 3304. Find the K-th Character in String Game I
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func kthCharacter(k int) byte {
	// Initialize string starting with 'a'
	var str []byte
	str = append(str, 'a')
	
	// Keep generating characters until we have enough
	for len(str) <= k {
		// Append next character for each existing character
		for _, b := range str {
			str = append(str, b+1)
		}
	}
	
	// Return the k-th character (1-indexed)
	return str[k-1]
}
