/**
 * Problem: 2037. Minimum Number of Moves to Seat Everyone
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  int minMovesToSeat(vector<int> &seats, vector<int> &students) {
    // Sort seat positions so each seat is matched in ascending order.
    sort(seats.begin(), seats.end());
    // Sort student positions to create the optimal one-to-one matching.
    sort(students.begin(), students.end());

    // Store the cumulative moves required for every matched pair.
    int moves = 0;

    // Match each sorted student with the seat at the same index.
    for (int i = 0; i < seats.size(); i++)
      // Add the distance needed for the current student to reach their seat.
      moves += abs(seats[i] - students[i]);

    // Return the minimum total number of moves.
    return moves;
  }
};
