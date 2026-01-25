/**
 * Problem: 3507. Minimum Pair Removal to Sort Array I
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Calculates minimum operations to make array non-decreasing by merging pairs
 *
 * @param {number[]} nums - Input array of integers
 *
 * @return {number} Minimum number of merge operations required
 */
const minimumPairRemoval = nums => {
    // Track if array is sorted
    let sorted = false

    // Count swap operations
    let operations = 0

    // Continue until array becomes non-decreasing
    while (!sorted) {
        // Assume array is sorted initially
        sorted = true

        // Track minimum sum pair
        let minIndex = 0, minSum = null

        // Scan through array to find violations and min sum
        for (let i = 0; i < nums.length - 1; i++) {
            const current = nums[i], next = nums[i + 1]

            // Initialize minSum with first pair
            if (minSum === null) minSum = current + next
            // Update minSum and minIndex if found smaller sum
            else if (current + next < minSum) minSum = current + next, minIndex = i

            // Mark array as unsorted if violation found
            if (current > next) sorted = false
        }

        // Perform merge operation if array not sorted
        if (!sorted) {
            // Increment operations count
            operations++

            // Merge pair at found index
            nums.splice(minIndex, 2, nums[minIndex] + nums[minIndex + 1])
        }
    }

    // Return total operations performed
    return operations
}
