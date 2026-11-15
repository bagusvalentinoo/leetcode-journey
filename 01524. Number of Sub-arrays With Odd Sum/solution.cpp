/**
 * Problem: 1524. Number of Sub-arrays With Odd Sum
 *
 * Difficulty: Medium
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

using ll = long long;

class Solution {
public:
  int numOfSubarrays(vector<int> &arr) {
    // Count prefix sums with odd parity using a mutable running sum
    ll odd = ranges::count_if(
        arr, [sum = 0](int x) mutable { return (sum += x) & 1; });
    // Count even prefix sums including the empty prefix sum
    ll even = arr.size() + 1 - odd;

    // Odd-sum subarrays pair one odd prefix sum with one even prefix sum
    return odd * even % 1'000'000'007;
  }
};
