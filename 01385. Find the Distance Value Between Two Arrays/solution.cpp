/**
 * Problem: 1385. Find the Distance Value Between Two Arrays
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
  int findTheDistanceValue(vector<int> &arr1, vector<int> &arr2, int d)
  {
    // Counter for elements that satisfy the condition
    int validElementCount = 0;

    // Iterate through each element in the first array
    for (int i = 0; i < arr1.size(); i++)
    {
      // Flag to track if current element is valid (initially assumed true)
      bool isValid = true;

      // Check distance against all elements in second array
      for (int j = 0; j < arr2.size(); j++)
      {
        // If any element in arr2 is within distance d, current element is invalid
        if (abs(arr1[i] - arr2[j]) <= d)
        {
          // Mark as invalid
          isValid = false;
          // Exit inner loop early since no need to check further
          break;
        }
      }

      // Increment counter if element is valid
      if (isValid)
        validElementCount++;
    }

    // Return the total count of valid elements
    return validElementCount;
  }
};
