/**
 * Problem: 1346. Check If N and Its Double Exist
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
  bool checkIfExist(vector<int> &arr)
  {
    // Iterate through each element as potential first element
    for (int i = 0; i < arr.size(); i++)
    {
      // Compare with subsequent elements
      for (int j = i + 1; j < arr.size(); j++)
      {
        // Check if either value is double the other
        if (arr[i] == arr[j] * 2 || arr[j] == arr[i] * 2)
          return true;
      }
    }

    // If no such pair is found, return false
    return false;
  }
};
