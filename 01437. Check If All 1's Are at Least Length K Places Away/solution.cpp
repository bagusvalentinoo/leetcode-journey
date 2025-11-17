/**
 * Problem: 1437. Check If All 1's Are at Least Length K Places Away
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
  bool kLengthApart(vector<int> &nums, int k)
  {
    // Initialize a variable to store the index of the previous '1' found
    // Set to -1 initially to indicate no '1' has been encountered yet
    int previousIndex = -1;

    // Iterate through the array to check the positions of '1's
    for (int currentIndex = 0; currentIndex < nums.size(); currentIndex++)
    {
      // Check if the current element is '1'
      if (nums[currentIndex] == 1)
      {
        // If a previous '1' was found, check the distance between them
        if (previousIndex != -1 && (currentIndex - previousIndex - 1) < k)
        {
          // Return false if the distance is less than k
          return false;
        }

        // Update the index of the last encountered '1'
        previousIndex = currentIndex;
      }
    }

    // Return true if all '1's are at least k places apart
    return true;
  }
};