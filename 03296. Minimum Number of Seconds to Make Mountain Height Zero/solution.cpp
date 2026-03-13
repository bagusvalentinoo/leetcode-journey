/**
 * Problem: 3296. Minimum Number of Seconds to Make Mountain Height Zero
 *
 * Difficulty: Medium
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  long long minNumberOfSeconds(int mountainHeight, vector<int> &workerTimes) {
    // Find the maximum worker time to calculate upper bound
    int maxWorkerTimes = *max_element(workerTimes.begin(), workerTimes.end());

    // Binary search bounds
    // Lower bound: 1 second
    // Upper bound: if slowest worker does all work alone
    long long left = 1;
    long long right = static_cast<long long>(maxWorkerTimes) * mountainHeight *
                      (mountainHeight + 1) / 2;

    // Store result of binary search
    long long result = 0;

    // Binary search for minimum valid time
    while (left <= right) {
      // Calculate middle point
      long long mid = (left + right) / 2;

      // Total height cleared by all workers in 'mid' seconds
      long long totalHeight = 0;

      // Process each worker
      for (int workerTime : workerTimes) {
        // How many units can this worker do in 'mid' seconds?
        // Work units = time / workerTime (max theoretical units ignoring
        // increasing time)
        long long maxUnits = mid / workerTime;

        // Solve quadratic: workerTime * k * (k+1) / 2 <= mid
        // Using formula: k = floor((sqrt(1 + 8*work) - 1) / 2)
        long long heightForWorker = (-1.0 + sqrt(1 + maxUnits * 8)) / 2 + eps;

        // Add this worker's contribution to total
        totalHeight += heightForWorker;
      }

      // If total height meets or exceeds mountain height
      if (totalHeight >= mountainHeight) {
        // This time is valid, try to find smaller valid time
        result = mid;
        right = mid - 1;
      } else
        // This time is too small, increase lower bound
        left = mid + 1;
    }

    // Return minimum valid time found
    return result;
  }

private:
  // Small epsilon to handle floating point precision issues
  static constexpr double eps = 1e-7;
};
