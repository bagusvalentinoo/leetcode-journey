/**
 * Problem: 2410. Maximum Matching of Players With Trainers
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 24 ms (Beats 100%)
 */

/**
 * Matches players with trainers based on skill levels
 *
 * @param {number[]} players - Player skill levels
 * @param {number[]} trainers - Trainer skill levels
 *
 * @returns {number} - Maximum number of matches possible
 */
const matchPlayersAndTrainers = (players, trainers) => {
  // Convert arrays to Int32Array for better performance and sort them in ascending order
  players = new Int32Array(players).sort()
  trainers = new Int32Array(trainers).sort()

  // Initialize pointers for players and trainers arrays
  let playerIndex = 0,
    trainerIndex = 0

  // Use two-pointer technique to find maximum matches
  while (playerIndex < players.length && trainerIndex < trainers.length) {
    // If current player's skill is less than or equal to trainer's skill, they can be matched
    if (players[playerIndex] <= trainers[trainerIndex]) playerIndex += 1

    // Always move to next trainer regardless of match
    trainerIndex += 1
  }

  // Return the number of successful matches (final player index position)
  return playerIndex
}
