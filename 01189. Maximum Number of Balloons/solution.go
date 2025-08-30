/**
 * Problem: 1189. Maximum Number of Balloons
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func maxNumberOfBalloons(text string) int {
	// Create a map to count occurrences of each rune (character) in the input string
	m := make(map[rune]int)

	// Iterate over each character in the input string and increment its count in the map
	for _, r := range text {
		m[r]++
	}
	
	// Calculate the maximum number of "balloon" words that can be formed.
	// 'l' and 'o' appear twice in "balloon", so their counts are divided by 2.
	// The minimum count among 'b', 'a', 'l'/2, 'o'/2, and 'n' determines the answer.
	return min(m['b'], m['a'], m['l']/2, m['o']/2, m['n'])
}
