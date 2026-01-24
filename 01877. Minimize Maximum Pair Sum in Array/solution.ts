/**
 * Problem: 1877. Minimize Maximum Pair Sum in Array
 *
 * Difficulty: Medium
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 72 ms (Beats 100%)
 */

/**
 * Calculates minimum maximum pair sum in array
 *
 * @param nums - Input array of integers
 *
 * @returns Minimum possible maximum pair sum
 */
const minPairSum = (nums: number[]): number => {
    // Find maximum value in array
    let biggest: number = 0

    // Scan array to find biggest element
    for (const num of nums)
        if (num > biggest) biggest = num

    // Create frequency array
    const freq: number[] = Array(biggest + 1).fill(0)

    // Count frequencies of each number
    for (const num of nums) freq[num]++

    // Initialize left and right pointers
    let i: number = 0, j: number = biggest

    // Move left pointer to first non-zero frequency
    while (i <= biggest && freq[i] === 0) i++

    // Move right pointer to first non-zero frequency
    while (j >= 0 && freq[j] === 0) j--

    // Track best maximum pair sum
    let best: number = 0

    // Process n/2 pairs
    for (let p: number = nums.length / 2; p > 0; p--) {
        // Update best with current pair sum
        best = Math.max(best, i + j)

        // Decrement frequencies of paired elements
        freq[i]--
        freq[j]--

        // Move left pointer if frequency becomes zero
        if (freq[i] === 0)
            while (i <= biggest && freq[i] === 0) i++

        // Move right pointer if frequency becomes zero
        if (freq[j] === 0)
            while (j >= 0 && freq[j] === 0) j--
    }

    // Return minimum maximum pair sum
    return best
}
