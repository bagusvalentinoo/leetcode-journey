/**
 * Problem: 913. Cat and Mouse
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 161 ms (Beats 100%)
 */

/**
 * Determines the Cat and Mouse game winner
 *
 * @param {number[][]} graph - Adjacency list
 *
 * @returns {number} 1 for mouse, 2 for cat, 0 for draw
 */
const catMouseGame = (graph) => {
  const HOLE_POS = 0 // Hole position
  const MOUSE_TURN = 0 // Mouse turn
  const CAT_TURN = 1 // Cat turn
  const UNDECIDED_WINNER = 0 // Undecided winner
  const MOUSE_WINNER = 1 // Mouse winner
  const CAT_WINNER = 2 // Cat winner
  const n = graph.length // Number of positions

  // Initialize player state at each position
  const playerStateAtPosition = new Array(n).fill(0).map(() =>
    new Array(n).fill(0).map(() =>
      new Array(2).fill(0).map(() => {
        return {
          movesLeftCount: 0,
          winner: 0
        }
      })
    )
  )

  // Initialize moves left count and winner for each position
  for (let mousePos = 0; mousePos < n; ++mousePos) {
    // Initialize cat positions
    for (let catPos = 0; catPos < n; ++catPos) {
      // Initialize mouse turn
      playerStateAtPosition[mousePos][catPos][MOUSE_TURN].movesLeftCount =
        graph[mousePos].length
      // Initialize cat turn
      playerStateAtPosition[mousePos][catPos][CAT_TURN].movesLeftCount =
        graph[catPos].length

      // Decrement cat turn moves left if cat can catch mouse
      if (graph[catPos].includes(HOLE_POS))
        playerStateAtPosition[mousePos][catPos][CAT_TURN].movesLeftCount--
    }
  }

  let queue = []

  // Initialize terminal states
  for (let pos = 1; pos < n; ++pos) {
    // Initialize mouse turn
    for (let turn = 0; turn < 2; ++turn) {
      // Initialize mouse winner
      playerStateAtPosition[HOLE_POS][pos][turn].winner = MOUSE_WINNER

      // Initialize queue
      queue.push([HOLE_POS, pos, turn, MOUSE_WINNER])

      // Initialize cat winner
      playerStateAtPosition[pos][pos][turn].winner = CAT_WINNER

      // Initialize queue
      queue.push([pos, pos, turn, CAT_WINNER])
    }
  }

  // Initialize queue
  while (queue.length) {
    const nextQueue = []

    // Process queue
    for (const [mousePos, catPos, turn, prevWinner] of queue) {
      const nextPositionStates = []
      const nextTurn = (turn + 1) % 2 // Switch turns

      // Mouse's turn
      if (nextTurn === MOUSE_TURN) {
        // Explore next mouse positions
        for (const nextMousePos of graph[mousePos]) {
          // Add next mouse position to queue
          if (
            playerStateAtPosition[nextMousePos][catPos][nextTurn].winner ===
            UNDECIDED_WINNER
          )
            nextPositionStates.push([nextMousePos, catPos])
        }
      } else {
        // Cat's turn
        for (const nextCatPos of graph[catPos]) {
          if (
            nextCatPos !== HOLE_POS &&
            playerStateAtPosition[mousePos][nextCatPos][nextTurn].winner ===
              UNDECIDED_WINNER
          )
            nextPositionStates.push([mousePos, nextCatPos])
        }
      }

      // Process next positions
      for (const [nextMousePos, nextCatPos] of nextPositionStates) {
        // If previous winner's turn matches this turn's state
        if (nextTurn + 1 === prevWinner) {
          playerStateAtPosition[nextMousePos][nextCatPos][nextTurn].winner =
            prevWinner
          nextQueue.push([nextMousePos, nextCatPos, nextTurn, prevWinner])
        }
        // If previous winner's turn does not match this turn's state
        else {
          // Decrement moves left count
          playerStateAtPosition[nextMousePos][nextCatPos][nextTurn]
            .movesLeftCount--

          // If no winner can be decided
          if (
            playerStateAtPosition[nextMousePos][nextCatPos][nextTurn]
              .movesLeftCount === 0
          ) {
            // Flip winner
            const flippedWinner = 3 - (nextTurn + 1)

            // Update winner
            playerStateAtPosition[nextMousePos][nextCatPos][nextTurn].winner =
              flippedWinner

            // Add to queue
            nextQueue.push([nextMousePos, nextCatPos, nextTurn, flippedWinner])
          }
        }
      }
    }

    // Update queue
    queue = nextQueue
  }

  // Return mouse's winner
  return playerStateAtPosition[1][2][MOUSE_TURN].winner
}
