/**
 * Problem: 1925. Count Square Sum Triples
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func countTriples(n int) int {
  // Track the number of ordered square sum triples
  answer := 0

  // Try each possible first value below n
  for a := 1; a < n; a++ {
    // Start at a to avoid checking mirrored pairs twice
    for b := a; b < n; b++ {
      // Calculate the integer square root of the sum of the two squares
      c := int(math.Sqrt(float64(a*a + b*b)))

      // Count the pair when its square root is a valid third value
      if c <= n && c*c == a*a+b*b {
        // Distinct values form two ordered triples
        if a != b {
          answer += 2
        } else {
          // Equal values form one ordered triple
          answer++
        }
      }
    }
  }

  // Return the number of ordered triples
  return answer
}
