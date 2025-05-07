/**
 * Problem: 952. Largest Component Size by Common Factor
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 103 ms (Beats 100%)
 */

/**
 * Class representing a Union-Find data structure
 * with union by rank and path compression
 */
class UnionFind {
  /**
   * Union-Find data structure
   *
   * @param {number} n - Number of elements
   */
  constructor(n) {
    // Initialize array to track rank (depth) of each element's tree
    this.ranks = new Uint16Array(n + 1)
    // Initialize array to track size of each subset, all starting at 1
    this.sizes = new Uint16Array(n + 1).fill(1)
    // Initialize array to track parent of each element
    this.parents = new Uint32Array(n + 1)

    // Set each element as its own parent initially
    for (let i = 0; i <= n; i++) this.parents[i] = i
  }

  /**
   * Find the root of the element
   *
   * @param {number} u - First element
   * @param {number} v - Second element
   *
   * @returns {number} - Size of the union
   */
  union(u, v) {
    // Find roots of both elements using path compression
    const uRoot = this.find(u),
      vRoot = this.find(v)

    // If elements are already in the same set, return the current size
    if (uRoot === vRoot) return this.sizes[uRoot]

    // Get ranks (tree depths) for both roots
    const uRank = this.ranks[uRoot],
      vRank = this.ranks[vRoot]

    // Get sizes of both sets
    const uSize = this.sizes[uRoot],
      vSize = this.sizes[vRoot]

    // Calculate combined size after union
    const newSize = uSize + vSize

    // Union by rank: attach smaller rank tree under root of higher rank tree
    if (uRank > vRank) {
      this.parents[vRoot] = uRoot
      this.sizes[uRoot] = newSize
    } else if (vRank > uRank) {
      this.parents[uRoot] = vRoot
      this.sizes[vRoot] = newSize
    } else {
      // When ranks are equal, choose uRoot as new root and increment its rank
      this.parents[vRoot] = uRoot
      this.ranks[vRoot]++
      this.sizes[uRoot] = newSize
    }

    // Return the size of newly formed set
    return newSize
  }

  /**
   * Find the root of the element
   *
   * @param {number} u - First element
   *
   * @returns {number} - Root of the element
   */
  find(u) {
    // Return u if it's the root (parent of itself)
    if (this.parents[u] === u) return u

    // Find the ultimate root using recursion
    const root = this.find(this.parents[u])
    // Apply path compression by updating parent to ultimate root
    this.parents[u] = root

    // Return the found root
    return root
  }

  /**
   * Find the size of the component containing u
   *
   * @param {number} u - Element to find the size of
   *
   * @returns {number} - Size of the component containing u
   */
  size(u) {
    // Return the size of the component containing u
    // by finding the root and accessing its size
    return this.sizes(this.find(u))
  }
}

/**
 * Finds largest component where numbers share prime factors
 *
 * @param {number[]} nums - Array of positive integers
 *
 * @returns {number} - Size of largest component
 */
const largestComponentSize = (nums) => {
  // Find the maximum value to determine our sieve size
  const maxNum = Math.max(...nums) + 1

  // Create an array to store smallest prime factor (spf) for each number
  const spf = new Uint32Array(maxNum)
  spf[1] = 1

  // Sieve of Eratosthenes to find smallest prime factors
  for (let i = 2; i <= maxNum; i++) {
    if (spf[i] === 0) {
      // i is prime, so its smallest prime factor is itself
      spf[i] = i

      // Mark smallest prime factors for all multiples of i
      for (let j = i * i; j <= maxNum; j += i) if (spf[j] === 0) spf[j] = i
    }
  }

  // Map to track which number represents each prime factor in the union-find
  const primeFactorsToNums = new Map()
  // Create union-find data structure
  const uf = new UnionFind(maxNum)

  // Track the size of the largest connected component
  let maxSize = 1

  // Process each number in the input array
  for (const num of nums) {
    let x = num

    // Decompose x into its prime factors
    while (x > 1) {
      // Get smallest prime factor of x
      const xspf = spf[x]
      // Check if this prime factor has been seen before
      const primeNumRoot = primeFactorsToNums.get(xspf)

      if (primeNumRoot !== undefined) {
        // If prime factor seen before, union current number with previous occurrence
        const newSize = uf.union(primeNumRoot, num)
        // Update max component size if needed
        maxSize = Math.max(maxSize, newSize)
      } else {
        // First time seeing this prime factor, associate it with current number
        primeFactorsToNums.set(xspf, num)
      }

      // Remove this prime factor and continue factorization
      x /= xspf
    }
  }

  // Return the size of the largest component
  return maxSize
}
