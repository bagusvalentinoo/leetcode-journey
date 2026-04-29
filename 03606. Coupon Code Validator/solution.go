/**
 * Problem: 3606. Coupon Code Validator
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func validateCoupons(code []string, businessLine []string, isActive []bool) []string {
	// Slice to store valid coupon entries as [code, category] pairs
	validEntries := make([][]string, 0, len(code))

	// Label for outer loop to continue from inner loop
mainLoop:
	// Iterate through each coupon index
	for i := range len(code) {
		// Skip if coupon is inactive, category invalid, or code is empty
		if !isActive[i] || (businessLine[i] != "electronics" &&
			businessLine[i] != "grocery" &&
			businessLine[i] != "pharmacy" &&
			businessLine[i] != "restaurant") ||
			len(code[i]) == 0 {
			// Skip this coupon and continue to next
			continue
		}

		// Validate each character in the coupon code
		for _, character := range code[i] {
			// Check if character is invalid: not underscore, not letter, not digit
			if character != '_' && (character < 'a' || 'z' < character) && (character < 'A' || 'Z' < character) && (character < '0' || '9' < character) {
				// Skip to next coupon if invalid character found
				continue mainLoop
			}
		}

		// Add valid coupon as [code, category] pair
		validEntries = append(validEntries, []string{code[i], businessLine[i]})
	}

	// Sort valid entries by category first, then by code alphabetically
	slices.SortFunc(validEntries, func(a, b []string) int {
		// If categories are the same, sort by coupon code
		if a[1] == b[1] {
			return strings.Compare(a[0], b[0])
		}

		// Sort by category name alphabetically
		return strings.Compare(a[1], b[1])
	})

	// Create result slice to store only coupon codes
	result := make([]string, len(validEntries))

	// Extract coupon codes from sorted entries
	for i := range len(validEntries) {
		result[i] = validEntries[i][0]
	}

	// Return slice of valid coupon codes
	return result
}
