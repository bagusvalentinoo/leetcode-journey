/**
 * Problem: 920. Number of Music Playlists
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 2 ms (Beats 100%)
 */

/**
 * Number of playlists of length `goal` using `n` songs with min gap `k`
 *
 * @param {number} n - Unique songs
 * @param {number} goal - Playlist length
 * @param {number} k - Minimum gap between replays
 *
 * @returns {number} - Number of valid playlists (mod 10^9 + 7)
 */
const numMusicPlaylists = (n, goal, k) => {
  // Modulo constant
  const mod = Math.pow(10, 9) + 7

  // DP table to store results of subproblems
  const dp = Array.from({
    length: goal
  }).map((_) => [])

  // Helper function to calculate number of playlists
  const getNum = (idx, played) => {
    // If we have reached the goal
    if (idx === goal) return played === n ? 1 : 0
    // If the result is already computed
    if (dp[idx][played] !== undefined) return dp[idx][played]

    // Number of unplayed songs
    const unplayed = n - played
    let count = 0

    // If we can add a new song
    if (unplayed !== 0) count = (unplayed * getNum(idx + 1, played + 1)) % mod
    // If we can replay a song
    if (played > k)
      count = (count + (played - k) * getNum(idx + 1, played)) % mod

    // Store result in DP table
    dp[idx][played] = count

    return count
  }

  // Start from the first index and 0 played songs
  const res = getNum(0, 0)

  return res
}
