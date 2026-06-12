/**
 * Problem: 1436. Destination City
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
  string destCity(vector<vector<string>> &paths)
  {
    // Set to store all destination cities
    unordered_set<string> destinations;

    // Add all destination cities to the set
    for (const auto &path : paths)
      destinations.insert(path[1]);

    // Remove cities that also appear as sources (have outgoing paths)
    for (const auto &path : paths)
    {
      // Get source city from current path
      string sourceCity = path[0];

      // If source exists in destinations, it's not a final destination
      if (destinations.find(sourceCity) != destinations.end())
        destinations.erase(sourceCity);
    }

    // The remaining city in the set is the final destination
    return *destinations.begin();
  }
};
