/**
 * Problem: 1752. Check if Array Is Sorted and Rotated
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
  bool check(vector<int> &nums)
  {
    // Counter for breaks where current element is greater than next
    int breakCount = 0;
    // Length of the input array
    int arrayLength = nums.size();

    // Iterate through each element and compare with next (circular)
    for (int currentIndex = 0; currentIndex < arrayLength; currentIndex++)
    {
      // Check if current element is greater than next element (wrap around at end)
      if (nums[currentIndex] > nums[(currentIndex + 1) % arrayLength])

        breakCount++;
    }

    // Array is valid if there is at most one break point
    return breakCount <= 1;
  }
};
