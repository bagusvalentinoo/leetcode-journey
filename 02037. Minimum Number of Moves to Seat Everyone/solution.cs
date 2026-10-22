/**
 * Problem: 2037. Minimum Number of Moves to Seat Everyone
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int MinMovesToSeat(int[] seats, int[] students)
  {
    // Sort seat positions in ascending order for optimal matching
    Array.Sort(seats);
    // Sort student positions in ascending order for optimal matching
    Array.Sort(students);

    // Sum the distance between each student and the seat at the same index
    int totalMoves = 0;

    // Match each sorted student with the seat at the same index
    for (int i = 0; i < seats.Length; i++)
      totalMoves += Math.Abs(seats[i] - students[i]);

    // Return the minimum total number of moves
    return totalMoves;
  }
}
