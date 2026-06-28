/**
 * Problem: 1588. Sum of All Odd Length Subarrays
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution
{
public:
  int sumOddLengthSubarrays(vector<int> &arr)
  {
    // Initialize result accumulator
    int totalSum = 0;

    // Get length of input array
    int arrayLength = arr.size();

    // Iterate through each element in the array
    for (int i = 0; i < arrayLength; i++)
    {
      // Total number of subarrays containing arr[i]
      // Formula: (i+1) choices for start * (n-i) choices for end
      int totalSubarrays = (i + 1) * (arrayLength - i);

      // Number of odd-length subarrays containing arr[i]
      // For odd lengths, count = ceil(totalSubarrays / 2)
      int oddSubarrays = (totalSubarrays + 1) / 2;

      // Add contribution of arr[i] to total sum
      totalSum += arr[i] * oddSubarrays;
    }

    // Return the total sum of all odd-length subarrays
    return totalSum;
  }
};
