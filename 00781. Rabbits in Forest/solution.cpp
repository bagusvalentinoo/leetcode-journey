/**
 * Problem: 781. Rabbits in Forest
 *
 * Difficulty: Medium
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution
{
public:
  int numRabbits(vector<int> &answers)
  {
    // Map to store frequency of each answer
    unordered_map<int, int> answerFrequency;

    // Count occurrences of each answer
    for (int answer : answers)
      answerFrequency[answer]++;

    // Initialize total rabbits count
    int totalRabbits = 0;

    // Process each unique answer
    for (auto &entry : answerFrequency)
    {
      // Current answer value
      int currentAnswer = entry.first;
      // Frequency of this answer
      int frequency = entry.second;

      // Each group has (currentAnswer + 1) rabbits
      // (currentAnswer rabbits with same color + 1 rabbit that answered)
      int groupSize = currentAnswer + 1;
      // Calculate number of groups needed
      // Ceiling division: (frequency + groupSize - 1) / groupSize
      int numberOfGroups = (frequency + groupSize - 1) / groupSize;

      // Add rabbits from all groups
      totalRabbits += numberOfGroups * groupSize;
    }

    // Return total minimum rabbits
    return totalRabbits;
  }
};
