/**
 * Problem: 874. Walking Robot Simulation
 *
 * Difficulty: Medium
 *
 * Language: C#
 *
 * Performance: Runtime - 12 ms (Beats 100%)
 */

public class Solution
{
  public int RobotSim(int[] commands, int[][] obstacles)
  {
    // Direction vectors: North, East, South, West
    int[][] directions = new int[][]
    {
      new int[] { 0, 1 }, // North
      new int[] { 1, 0 }, // East
      new int[] { 0, -1 }, // South
      new int[] { -1, 0 }, // West
    };

    // Returns a unique hash for a coordinate to store in Set
    int GetHash(int x, int y) => x + 30001 * y;

    // Create a HashSet to store obstacle positions for O(1) lookup
    HashSet<int> obstacleSet = new HashSet<int>();

    // Iterate through each obstacle and add its unique hash value to the set
    foreach (var obstacle in obstacles)
      obstacleSet.Add(GetHash(obstacle[0], obstacle[1]));

    // Robot's current position
    int x = 0,
      y = 0;

    // Current direction index (0: North, 1: East, 2: South, 3: West)
    int currentDirection = 0,
      maxDistance = 0;

    // Process each command in sequence
    foreach (int command in commands)
    {
      // Turn left (-2)
      if (command == -2)
      {
        // Turning left decreases direction index (with modulo)
        currentDirection = (currentDirection + 3) % 4;
        continue;
      }

      // Turn right (-1)
      if (command == -1)
      {
        // Turning right increases direction index (with modulo)
        currentDirection = (currentDirection + 1) % 4;
        continue;
      }

      // Move forward (1-9 steps)
      for (int step = 0; step < command; step++)
      {
        // Get current direction vector
        int dx = directions[currentDirection][0],
          dy = directions[currentDirection][1];

        // Calculate next position
        int nextX = x + dx,
          nextY = y + dy;

        // Stop if next position is blocked by obstacle
        if (obstacleSet.Contains(GetHash(nextX, nextY)))
          break;

        // Update position
        x = nextX;
        y = nextY;

        // Update maximum squared distance from origin
        maxDistance = Math.Max(maxDistance, x * x + y * y);
      }
    }

    // Return the maximum squared distance from the origin
    return maxDistance;
  }
}
