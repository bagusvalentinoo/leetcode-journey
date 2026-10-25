/**
 * Problem: 2103. Rings and Rods
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func countPoints(rings string) int {
  // Store a three-bit color mask for each rod.
  rodColors := make([]int, 10)

  // Record each ring color on its corresponding rod.
  for i := 0; i < len(rings); i += 2 {
    // Convert the color into its bit and the rod character into an index.
    colorBit := 4
    if rings[i] == 'R' {
      colorBit = 1
    } else if rings[i] == 'G' {
      colorBit = 2
    }
    rod := rings[i+1] - '0'
    rodColors[rod] |= colorBit
  }

  // Count rods whose mask contains every color bit.
  count := 0
  for _, colors := range rodColors {
    if colors == 7 {
      count++
    }
  }

  // Return the number of rods containing all three colors.
  return count
}
