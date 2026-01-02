/**
 * Problem: 961. N-Repeated Element in Size 2N Array
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
    int repeatedNTimes(vector<int>& nums) {
        // Create an unordered set to track encountered numbers
        unordered_set<int> s;

        // Iterate through each element in the input vector
        for (int x : nums) {
            // Attempt to insert the current element into the unordered set
            // The insert method returns a pair (iterator, bool) where the bool
            // indicates success If the element already exists in the set
            // (second is false), it is the repeated element we're looking for
            if (!s.insert(x).second)
                return x;
        }

        // Return -1 if no repeated element is found (should not happen per
        // problem constraints)
        return -1;
    }
};