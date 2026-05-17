/**
 * Problem: 3360. Stone Removal Game
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  bool canAliceWin(int n) {
    // Counter for number of moves made
    int moveCount = 0;
    // Starting pile size to remove
    int currentPile = 10;

    // Continue while enough stones remain to remove current pile
    while (n >= currentPile) {
      // Remove current pile from total stones
      n -= currentPile;
      // Decrease pile size for next move
      currentPile--;
      // Increment move counter
      moveCount++;
    }

    // Alice wins if number of moves is odd (Alice starts first)
    return moveCount % 2 != 0;
  }
};
