/**
 * Problem: 3285. Find Indices of Stable Mountains
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
  vector<int> stableMountains(vector<int> &height, int threshold)
  {
    // Vector to store indices meeting the condition
    vector<int> validIndices;

    // Iterate through heights starting from index 1 (need previous element)
    for (int currentIndex = 1; currentIndex < height.size(); currentIndex++)
    {
      // If previous mountain height exceeds threshold, add current index
      if (height[currentIndex - 1] > threshold)
        validIndices.push_back(currentIndex);
    }

    // Return the vector of valid indices
    return validIndices;
  }
};
