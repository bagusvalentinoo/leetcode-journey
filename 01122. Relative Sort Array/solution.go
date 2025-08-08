/**
 * Problem: 1122. Relative Sort Array
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func relativeSortArray(arr1 []int, arr2 []int) []int {
	// Initialize the result slice to store the final sorted array
	result := make([]int, 0)
	// Create a map to count occurrences of elements in arr2
	countMap := make(map[int]int)
	// Slice to store elements not present in arr2
	remains := make([]int, 0)

	// Initialize countMap with keys from arr2 and set their counts to 0
	for _, num := range arr2 {
		countMap[num] = 0
	}

	// Count occurrences of each number in arr1
	for _, num := range arr1 {
		count, exists := countMap[num]
		if exists {
			// If the number is in arr2, increment its count
			countMap[num] = count + 1
		} else {
			// If not, add it to remains
			remains = append(remains, num)
		}
	}

	// Sort the remains slice in ascending order
	slices.Sort(remains)

	// Append numbers from arr2 to result in the order of arr2, repeated by their counts
	for _, num := range arr2 {
		for i := 0; i < countMap[num]; i++ {
			result = append(result, num)
		}
	}

	// Append the sorted remains to the result
	result = append(result, remains...)

	// Return the final sorted array
	return result
}
