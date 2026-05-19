/**
 * Problem: 2540. Minimum Common Value
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  int getCommon(vector<int> &nums1, vector<int> &nums2) {
    // Default answer if no common element found
    int defaultAnswer = -1;

    // Initialize pointers for both arrays
    int pointer1 = 0, pointer2 = 0;

    // Iterate while both pointers are within array bounds
    while (pointer1 < nums1.size() && pointer2 < nums2.size()) {
      // If elements are equal, return the common element
      if (nums1[pointer1] == nums2[pointer2])
        return nums1[pointer1];
      // If element in nums1 is smaller, move pointer in nums1 forward
      else if (nums1[pointer1] < nums2[pointer2])
        pointer1++;
      // If element in nums2 is smaller, move pointer in nums2 forward
      else
        pointer2++;
    }

    // No common element found
    return defaultAnswer;
  }
};
