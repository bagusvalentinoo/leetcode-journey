/**
 * Problem: 1409. Queries on a Permutation With Key
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func processQueries(queries []int, m int) []int {
  // Initialize permutation with values 1 to m
  permutation := make([]int, m)

  // Populate permutation array with consecutive integers from 1 to m
  for i := 0; i < m; i++ {
    permutation[i] = i + 1
  }

  // Store results for each query
  answer := make([]int, len(queries))

  // Process each query
  for i, query := range queries {
    // Find current position of query element
    index := 0
    for j, v := range permutation {
      if v == query {
        index = j
        break
      }
    }

    // Record the index as result
    answer[i] = index

    // Remove query from its current position
    permutation = append(permutation[:index], permutation[index+1:]...)
    // Move it to the front
    permutation = append([]int{query}, permutation...)
  }

  // Return the array containing positions of each queried element before moving to front
  return answer
}
