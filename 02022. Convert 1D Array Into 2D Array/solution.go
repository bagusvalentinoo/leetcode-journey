/**
 * Problem: 2022. Convert 1D Array Into 2D Array
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func construct2DArray(original []int, m int, n int) [][]int {
  // Return empty array when total cells do not match input length
  if m*n != len(original) {
    return [][]int{}
  }

  // Store constructed rows
  answer := make([][]int, 0, m)

  // Iterate start indices in steps of n up to m * n
  for i := 0; i < m*n; i += n {
    // Append a slice of width n as the next row
    answer = append(answer, original[i:i+n])
  }

  // Return the constructed m x n 2D array
  return answer
}
