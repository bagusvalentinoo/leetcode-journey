/**
 * Problem: 771. Jewels and Stones
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func numJewelsInStones(jewels string, stones string) int {
    // Counter for stones that are jewels
    jewelCount := 0
    
    // Create a map of jewel characters for O(1) lookup
    jewelSet := make(map[rune]bool)
    for _, jewel := range jewels {
        jewelSet[jewel] = true
    }
    
    // Check each stone against the jewel set
    for _, stone := range stones {
        // If stone is in jewel set, increment counter
        if jewelSet[stone] {
            jewelCount++
        }
    }
    
    // Return the total count of stones that are jewels
    return jewelCount
}
