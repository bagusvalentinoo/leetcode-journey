/**
 * Problem: 2654. Minimum Number of Operations to Make All Array Elements Equal to 1
 *
 * Difficulty: Medium
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution
{
public:
  int minOperations(vector<int> &nums)
  {
    // Get the size of the input array
    const int n = nums.size();

    // Initialize the result to the maximum integer value
    // and a counter for the number of elements equal to 1
    int res = INT_MAX, cnt1 = 0;

    // Count the number of elements in the array that are equal to 1
    for (int i = 0; i < n; ++i)
      cnt1 += (nums[i] == 1);

    // If there are any 1s in the array, return the number of
    // operations needed to make all elements equal to 1
    if (cnt1)
      return n - cnt1;

    // Iterate through the array to find the minimum number of
    // operations required to make all elements equal to 1
    for (int i = 0; i < n; ++i)
    {
      // Initialize the gcd (greatest common divisor) with the current element
      int g = nums[i];

      // Iterate through the rest of the array to calculate gcd
      for (int j = i + 1; j < n; ++j)
      {
        // Update the gcd with the current element
        g = __gcd(g, nums[j]);

        // If gcd becomes 1, calculate the minimum operations
        if (g == 1)
        {
          res = min(res, j - i + n - 1);
          break; // Break out of the inner loop as gcd is already 1
        }
      }
    }

    // If no valid operations were found, return -1; otherwise, return the result
    return res == INT_MAX ? -1 : res;
  }
};