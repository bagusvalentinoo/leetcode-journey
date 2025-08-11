/**
 * Problem: 1137. N-th Tribonacci Number
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func tribonacci(n int) int {
	return int(0.5 + 0.336228117*math.Pow(1.83928675521,float64(n)))
}
