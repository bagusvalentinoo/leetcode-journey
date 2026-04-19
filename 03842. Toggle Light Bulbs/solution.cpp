/**
 * Problem: 3842. Toggle Light Bulbs
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  vector<int> toggleLightBulbs(vector<int> &bulbs) {
    // Create boolean array to track switch state (true = on, false = off)
    vector<bool> switchState(101, false);

    // Toggle each bulb that appears in the array
    for (int i = 0; i < bulbs.size(); i++)
      // Flip the state of the current bulb
      switchState[bulbs[i]] = !switchState[bulbs[i]];

    // Vector to store bulbs that are on
    vector<int> result;

    // Check all possible bulbs from 1 to 100
    for (int i = 1; i <= 100; i++) {
      // If bulb is on, add to result
      if (switchState[i])
        result.push_back(i);
    }

    // Return empty vector if no bulbs are on
    if (result.size() == 0)
      return {};

    // Return the list of bulbs that are on
    return result;
  }
};
