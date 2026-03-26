/**
 * Problem: 49. Group Anagrams
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func groupAnagrams(strs []string) [][]string {
	// Map to store product hash as key and list of anagrams as value
	groups := map[int][]string{}

	// Process each string in the input array
	for _, s := range strs {
		// Generate unique hash based on character frequencies using prime multiplication
		key := hash(s)
		// Append current string to its anagram group
		groups[key] = append(groups[key], s)
	}

	// Create result slice with capacity equal to number of groups
	result := make([][]string, 0, len(groups))

	// Convert map values to result slice
	for _, group := range groups {
		result = append(result, group)
	}

	// Return grouped anagrams
	return result
}

// hash generates a unique integer for each anagram group
// by multiplying prime numbers corresponding to each character
func hash(s string) int {
	// Initialize hash value to 1 (multiplicative identity)
	hashValue := 1

	// Multiply prime numbers for each character
	for _, char := range s {
		// Multiply by prime number corresponding to letter (a=3, b=5, c=7, ...)
		hashValue *= primes[char-'a']
	}

	// Return unique hash for this anagram group
	return hashValue
}

// Precomputed prime numbers for letters a-z
// Using primes ensures unique product for each combination of letters
var primes []int = []int{3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127}
