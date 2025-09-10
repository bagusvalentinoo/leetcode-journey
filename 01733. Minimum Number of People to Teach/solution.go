/**
 * Problem: 1733. Minimum Number of People to Teach
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func minimumTeachings(n int, languages [][]int, friendships [][]int) int {
	// Number of people
	m := len(languages)
	// Calculate number of 64-bit blocks needed to represent n languages
	blocks := (n + 63) / 64
	// masks[i] will store a bitmask of languages known by person i
	masks := make([][]uint64, m+1)

	// Build bitmask for each person's known languages
	for person := 1; person <= m; person++ {
		masks[person] = make([]uint64, blocks)
		for _, language := range languages[person-1] {
			blockIdx := (language - 1) / 64
			bitIdx := uint((language - 1) % 64)
			masks[person][blockIdx] |= (1 << bitIdx)
		}
	}

	// Set to store people who cannot communicate with their friends
	candidates := make(map[int]bool)

	// Check each friendship to see if both can communicate
	for _, friendship := range friendships {
		u, v := friendship[0], friendship[1]
		canCommunicate := false
		for block := 0; block < blocks; block++ {
			if (masks[u][block] & masks[v][block]) != 0 {
				canCommunicate = true
				break
			}
		}
		// If they cannot communicate, add both to candidates
		if !canCommunicate {
			candidates[u] = true
			candidates[v] = true
		}
	}

	// If all friends can communicate, no need to teach anyone
	if len(candidates) == 0 {
		return 0
	}

	// Count how many candidates already know each language
	languageCount := make([]int, n+1)
	for person := range candidates {
		for _, language := range languages[person-1] {
			languageCount[language]++
		}
	}

	// Find the language known by the most candidates
	maxKnown := 0
	for language := 1; language <= n; language++ {
		if languageCount[language] > maxKnown {
			maxKnown = languageCount[language]
		}
	}

	// Minimum number of people to teach is candidates minus those who already know the chosen language
	return len(candidates) - maxKnown
}
