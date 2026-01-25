/**
 * Problem: 3507. Minimum Pair Removal to Sort Array I
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Calculates minimum operations to make array non-decreasing by merging pairs
 *
 * @param nums - Input array of integers
 *
 * @returns Minimum number of merge operations required
 */
const minimumPairRemoval = (nums: number[]): number => {
    // Helper: check if array is non-decreasing
    const checkNonDec = (arr: number[]): boolean => {
        // Check each adjacent pair
        for (let i = 0; i < arr.length - 1; i++)
            // Return false if any element is greater than next
            if (arr[i] > arr[i + 1]) return false

        // Return true if all elements are non-decreasing
        return true
    }

    // Track operations count
    let res: number = 0

    // Continue until array becomes non-decreasing
    while (!checkNonDec(nums)) {
        // Increment operations count
        res++

        // Find pair with minimum sum
        let minIndex: number = -1, minSum: number = Infinity

        // Scan through array to find minimum sum pair
        for (let i: number = 0; i < nums.length - 1; i++) {
            const currentSum: number = nums[i] + nums[i + 1]

            // Update minSum and minIndex if found smaller sum
            if (currentSum < minSum) minIndex = i, minSum = currentSum
        }

        // Merge pair at found index
        nums.splice(minIndex, 2, minSum)
    }

    // Return total operations performed
    return res
}
