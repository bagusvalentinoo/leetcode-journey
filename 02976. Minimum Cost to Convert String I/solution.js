/**
 * Problem: 2976. Minimum Cost to Convert String I
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 40 ms (Beats 100%)
 */

/**
 * Calculates minimum cost to transform source string to target using character changes
 *
 * @param {string} source - Original string
 * @param {string} target - Target string
 * @param {character[]} original - Array of changeable characters
 * @param {character[]} changed - Array of resulting characters
 * @param {number[]} cost - Array of change costs
 *
 * @return {number} Minimum total cost or -1 if impossible
 */
const minimumCost = (source, target, original, changed, cost) => {
    // Number of lowercase letters
    const alphabetSize = 26

    // Initialize distance matrix with infinity
    const distance = Array.from({ length: alphabetSize }, () =>
        new Array(alphabetSize).fill(Infinity))

    // ASCII code for 'a' to convert characters to indices
    const aCharCode = 'a'.charCodeAt()

    // Initialize direct transformation costs
    for (let i = 0; i < original.length; i++) {
        const fromIndex = original[i].charCodeAt() - aCharCode
        const toIndex = changed[i].charCodeAt() - aCharCode
        const changeCost = cost[i]

        // Store minimum cost for direct transformation
        distance[fromIndex][toIndex] = Math.min(distance[fromIndex][toIndex], changeCost)
    }

    // Floyd-Warshall algorithm to find shortest paths between all pairs
    for (let intermediate = 0; intermediate < alphabetSize; intermediate++) {
        for (let from = 0; from < alphabetSize; from++) {
            for (let to = 0; to < alphabetSize; to++) {
                // Update minimum cost using intermediate character
                distance[from][to] = Math.min(
                    distance[from][to],
                    distance[from][intermediate] + distance[intermediate][to]
                )
            }
        }
    }

    // Calculate total transformation cost
    let totalCost = 0

    // Process each character in source and target strings
    for (let i = 0; i < source.length; i++) {
        const sourceIndex = source.charCodeAt(i) - aCharCode
        const targetIndex = target.charCodeAt(i) - aCharCode

        // Skip if characters already match
        if (sourceIndex === targetIndex) continue
        // Return -1 if transformation is impossible
        if (!isFinite(distance[sourceIndex][targetIndex])) return -1

        // Add transformation cost to total
        totalCost += distance[sourceIndex][targetIndex]
    }

    // Return minimum total cost
    return totalCost
}
