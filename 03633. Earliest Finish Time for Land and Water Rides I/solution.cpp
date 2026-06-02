/**
 * Problem: 3633. Earliest Finish Time for Land and Water Rides I
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution
{
private:
    int calculateMinTime(vector<int> &firstStartTime, vector<int> &firstDuration,
                       vector<int> &secondStartTime, vector<int> &secondDuration)
  {
    // Get number of options for first operation
    int firstOptionsCount = firstStartTime.size();

    // Find minimum completion time for first operation across all options
    int minFirstCompletion = INT_MAX;

    // Iterate through all first operation choices
    for (int optionIndex = 0; optionIndex < firstOptionsCount; optionIndex++)
      minFirstCompletion = min(minFirstCompletion, firstStartTime[optionIndex] + firstDuration[optionIndex]);

    // Get number of options for second operation
    int secondOptionsCount = secondStartTime.size();

    // Initialize minimum total completion time to max value
    int minTotalCompletion = INT_MAX;

    // Case 1: Second operation can start at or before first operation completes
    for (int optionIndex = 0; optionIndex < secondOptionsCount; optionIndex++)
    {
      if (secondStartTime[optionIndex] <= minFirstCompletion)
        minTotalCompletion = min(minTotalCompletion, minFirstCompletion + secondDuration[optionIndex]);
    }

    // Case 2: Second operation must wait for its own start time
    for (int optionIndex = 0; optionIndex < secondOptionsCount; optionIndex++)
    {
      if (secondStartTime[optionIndex] > minFirstCompletion)
        minTotalCompletion = min(minTotalCompletion, secondStartTime[optionIndex] + secondDuration[optionIndex]);
    }

    // Return the minimum total completion time
    return minTotalCompletion;
  }

public:
  int earliestFinishTime(vector<int> &landStartTime, vector<int> &landDuration,
                         vector<int> &waterStartTime, vector<int> &waterDuration)
  {
    // Calculate minimum time for land-first sequence
    int landFirstTime = calculateMinTime(landStartTime, landDuration, waterStartTime, waterDuration);

    // Calculate minimum time for water-first sequence
    int waterFirstTime = calculateMinTime(waterStartTime, waterDuration, landStartTime, landDuration);

    // Return the better of the two sequences
    return min(landFirstTime, waterFirstTime);
  }
};
