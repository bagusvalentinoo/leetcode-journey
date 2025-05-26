/**
 * Problem: 984. String Without AAA or BBB
 *
 * Difficulty: Medium
 *
 * Language: Go
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func strWithout3a3b(a int, b int) string {
	// Initialize a string builder to construct our result efficiently
	var result strings.Builder

	for a > 0 || b > 0 {
		switch {
		// When we only have 'b' characters left
		case a == 0:
			result.WriteByte('b')
			b--
		// When we only have 'a' characters left
		case b == 0:
			result.WriteByte('a')
			a--
		// When we have more 'a' than 'b', write "aab" to balance
		case a > b:
			result.WriteByte('a')
			a--
			result.WriteByte('a')
			a--
			result.WriteByte('b')
			b--
		// When we have more 'b' than 'a', write "bba" to balance
		case b > a:
			result.WriteByte('b')
			b--
			result.WriteByte('b')
			b--
			result.WriteByte('a')
			a--
		// When we have equal counts, alternate 'a' and 'b'
		default:
			result.WriteByte('a')
			a--
			result.WriteByte('b')
			b--
		}
	}

	return result.String()
}