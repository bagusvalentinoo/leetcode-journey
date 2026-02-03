/**
 * Problem: 744. Find Smallest Letter Greater Than Target
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 10 ms (Beats 100%)
 */

/**
 * Finds the smallest character in letters that is lexicographically greater than target
 *
 * @param letters - Sorted array of lowercase English letters
 * @param target - The target letter
 *
 * @returns The smallest character greater than target, or the first character if none exists
 */
const nextGreatestLetter = (letters: string[], target: string): string => {
    // Initialize binary search bounds
    let left = 0
    let right = letters.length
    
    // Perform binary search to find first character greater than target
    while (left < right) {
        const mid = Math.floor((left + right) / 2)
        
        // Narrow search range based on comparison
        letters[mid] > target ? (right = mid) : (left = mid + 1)
    }
    
    // Use modulo to wrap around to first character if no greater character found
    return letters[left % letters.length]
}
