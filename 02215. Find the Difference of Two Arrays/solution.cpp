/**
 * Problem: 2215. Find the Difference of Two Arrays
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  vector<vector<int>> findDifference(vector<int> &nums1, vector<int> &nums2) {
    // Track values from each array with an offset for negative numbers.
    bitset<2001> a{}, b{};

    // Mark values present in the first array.
    for (int i = 0; i < nums1.size(); i++)
      a.set(nums1[i] + 1000);

    // Mark values present in the second array.
    for (int i = 0; i < nums2.size(); i++)
      b.set(nums2[i] + 1000);

    // Store values unique to each array.
    vector<vector<int>> answer(2);

    // Compare every value in the supported range.
    for (int i = 0; i < 2001; i++) {
      if (a.test(i) && !b.test(i))
        answer[0].push_back(i - 1000);
      if (!a.test(i) && b.test(i))
        answer[1].push_back(i - 1000);
    }

    // Return the values unique to each array.
    return answer;
  }
};
