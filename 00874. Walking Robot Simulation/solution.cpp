/**
 * Problem: 874. Walking Robot Simulation
 *
 * Difficulty: Medium
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

// Optimize I/O for faster execution
static const int _ = []() {
  // Disable synchronization between C and C++ standard streams
  std::ios_base::sync_with_stdio(false);
  // Untie cin from cout for faster input
  std::cin.tie(NULL);

  // Return 0 to indicate successful initialization
  return 0;
}();

// Global hash table for obstacle lookup (size 65536 for fast modulo)
long long hashTable[65536];
// Sentinel value to indicate an empty slot in the hash table
const long long EMPTY = -1e15;

class Solution {
public:
  int robotSim(vector<int> &commands, vector<vector<int>> &obstacles) {
    // Initialize all slots in hash table to EMPTY
    for (int i = 0; i < 65536; ++i)
      hashTable[i] = EMPTY;

    // Insert all obstacles into the hash table
    for (const auto &obstacle : obstacles) {
      // Pack (x, y) into a single 64-bit key: high 32 bits = x, low 32 bits = y
      long long key =
          ((long long)obstacle[0] << 32) | (obstacle[1] & 0xFFFFFFFFLL);

      // Compute initial hash index by mixing high and low bits
      int index = (unsigned int)(key ^ (key >> 32)) & 65535;

      // Linear probing: find next empty slot if current slot is occupied
      while (hashTable[index] != EMPTY)
        index = (index + 1) & 65535;

      // Store the key in the found empty slot
      hashTable[index] = key;
    }

    // Robot's current position and facing direction
    int x = 0, y = 0, direction = 0;

    // Track the maximum squared Euclidean distance from origin
    int maxDistanceSq = 0;

    // Process each command in sequence
    for (int cmd : commands) {
      // Handle turning commands (-1 = turn right, -2 = turn left)
      if (cmd < 0) {
        // Turn right: increase direction index
        if (cmd == -1)
          direction = (direction + 1) & 3;
        // Turn left: decrease direction index (add 3 modulo 4)
        else
          direction = (direction + 3) & 3;
      }
      // Handle movement commands (positive integers: move forward)
      else {
        // Calculate direction vector based on current facing direction
        int dx = (direction == 1) ? 1 : (direction == 3 ? -1 : 0);
        int dy = (direction == 0) ? 1 : (direction == 2 ? -1 : 0);

        // Move step by step (command value = number of steps)
        while (cmd--) {
          // Calculate next position
          int nextX = x + dx, nextY = y + dy;

          // Pack next position into a 64-bit key for lookup
          long long key = ((long long)nextX << 32) | (nextY & 0xFFFFFFFFLL);

          // Compute hash index for the next position
          int index = (unsigned int)(key ^ (key >> 32)) & 65535;

          // Flag to indicate if next position is blocked by an obstacle
          bool isHit = false;

          // Search for obstacle at next position in hash table
          while (hashTable[index] != EMPTY) {
            // If key matches, obstacle found
            if (hashTable[index] == key) {
              isHit = true;
              break;
            }

            // Continue linear probing to next slot
            index = (index + 1) & 65535;
          }

          // Stop moving if obstacle encountered
          if (isHit)
            break;

          // Update robot's position
          x = nextX;
          y = nextY;
        }

        // Calculate squared distance from origin
        int currentDist = x * x + y * y;

        // Update maximum distance if current is larger
        if (currentDist > maxDistanceSq)
          maxDistanceSq = currentDist;
      }
    }

    // Return the maximum squared distance from origin
    return maxDistanceSq;
  }
};
