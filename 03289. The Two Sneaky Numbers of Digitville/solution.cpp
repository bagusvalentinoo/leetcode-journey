/**
 * Problem: 3289. The Two Sneaky Numbers of Digitville
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
  vector<int> getSneakyNumbers(vector<int> &nums)
  {
    // Unordered set to track seen numbers
    unordered_set<int> seenNumbers;
    vector<int> duplicateResult;

    // Iterate through each number in the array
    for (int index = 0; index < nums.size(); index++)
    {
      // Check if number already exists in set
      if (seenNumbers.find(nums[index]) != seenNumbers.end())
      {
        // If number is a duplicate, add it to the result vector
        duplicateResult.push_back(nums[index]);

        // If we have found both duplicate numbers, we can stop searching
        if (duplicateResult.size() == 2)
          break;
      }
      // Mark number as seen
      else
        seenNumbers.insert(nums[index]);
    }

    // Return the two duplicate numbers
    return duplicateResult;
  }
};
