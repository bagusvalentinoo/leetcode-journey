/**
 * Problem: 874. Walking Robot Simulation
 *
 * Difficulty: Medium
 *
 * Language: C#
 *
 * Performance: Runtime - 8 ms (Beats 100%)
 */

public class Solution
{
  // Maximum squared distance from origin
  int maxDist = 0;

  // Current facing direction vector
  int facingX = 0,
    facingY = 1;

  // Current robot position
  int curX = 0,
    curY = 0;

  // Temporary variable for direction swapping
  int temp = 0;

  // Hash constant for coordinate mapping
  const int HASH_VALUE = 60013;

  // Set to store obstacle positions
  HashSet<int> obstaclesSet;

  public int RobotSim(int[] commands, int[][] obstacles)
  {
    // Initialize hash set with obstacle capacity
    obstaclesSet = new HashSet<int>(obstacles.Length);

    // Add all obstacles to hash set
    foreach (var item in obstacles)
      obstaclesSet.Add(HashPoint(item[0], item[1]));

    // Process each command in sequence
    foreach (var command in commands)
    {
      // Handle turning commands (-1 = right, -2 = left)
      if (command < 0)
        ChangeDirection(command);

      // Handle movement commands (positive integers)
      Move(command);

      // Update maximum distance after each command
      maxDist = GetMaxEuclidDist(curX, curY, maxDist);
    }

    // Return the maximum squared distance
    return maxDist;
  }

  // Changes robot's facing direction based on command
  void ChangeDirection(int command)
  {
    // Store current facing X for swapping
    temp = facingX;

    // Swap facing X and Y to rotate 90 degrees
    facingX = facingY;
    facingY = temp;

    // If turning left, negate the X direction component
    if (command == -2)
      facingX = -facingX;
    // If turning right, negate the Y direction component
    else
      facingY = -facingY;
  }

  // Moves robot forward by specified steps
  void Move(int command)
  {
    // Move step by step
    while (command-- > 0)
    {
      // Stop if next position is blocked by obstacle
      if (obstaclesSet.Contains(HashPoint(curX + facingX, curY + facingY)))
        return;

      // Move robot one step in the current X and Y direction
      curX += facingX;
      curY += facingY;
    }
  }

  // Returns maximum squared Euclidean distance
  int GetMaxEuclidDist(int x, int y, int other = 0)
  {
    return Math.Max(x * x + y * y, other);
  }

  // Creates unique hash for coordinate pair
  static int HashPoint(int x, int y)
  {
    return x + y * HASH_VALUE;
  }
}
