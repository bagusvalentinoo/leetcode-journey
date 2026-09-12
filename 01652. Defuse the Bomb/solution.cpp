/**
 * Problem: 1652. Defuse the Bomb
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  vector<int> decrypt(vector<int> &code, int k) {
    // Store array length for circular index wrapping
    int n = code.size();

    // Initialize output array
    vector<int> ans(n);

    // Handle k == 0 by filling output with zeros
    if (k == 0) {
      // Set each position to zero
      for (int i = 0; i < n; i++)
        ans[i] = 0;
    } else if (k > 0) {
      // Initialize sliding window boundaries at index 1 with wraparound
      int i = (1 + n) % n, j = (1 + n) % n, sum = 0;

      // Track current output position
      int idx = 0;

      // Expand and slide window around the circular array
      while (true) {
        // Include current right boundary element in window sum
        sum += code[j];

        // Compute current window size with wraparound
        int size = (j - i + 1 + n) % n;

        // Grow window until it holds k elements
        if (size < k) {
          // Advance right boundary with wraparound
          j = (j + 1) % n;
          continue;
        }

        // Store decrypted value for the current position
        ans[idx] = sum;

        // Advance to next output position
        idx++;

        // Stop after filling all positions
        if (idx == n)
          break;

        // Remove left boundary element from window sum
        sum -= code[i];

        // Slide window forward with wraparound
        i = (i + 1) % n;
        j = (j + 1) % n;
      }
    } else if (k < 0) {
      // Initialize sliding window boundaries at index n + k with wraparound
      int i = (n + k) % n, j = (n + k) % n, sum = 0;

      // Track current output position
      int idx = 0;

      // Expand and slide window around the circular array
      while (true) {
        // Include current right boundary element in window sum
        sum += code[j];

        // Compute current window size with wraparound
        int size = (j - i + 1 + n) % n;

        // Grow window until it holds -k elements
        if (size < -k) {
          // Advance right boundary with wraparound
          j = (j + 1) % n;
          continue;
        }

        // Store decrypted value for the current position
        ans[idx] = sum;

        // Advance to next output position
        idx++;

        // Stop after filling all positions
        if (idx == n)
          break;

        // Remove left boundary element from window sum
        sum -= code[i];

        // Slide window forward with wraparound
        i = (i + 1) % n;
        j = (j + 1) % n;
      }
    }

    // Return the decrypted code array
    return ans;
  }
};
