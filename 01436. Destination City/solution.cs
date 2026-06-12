/**
 * Problem: 1436. Destination City
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public string DestCity(IList<IList<string>> paths)
  {
    // Set to store all cities that have outgoing paths (starting points)
    HashSet<string> citiesWithOutgoing = new HashSet<string>();

    // Add all starting cities to the set
    foreach (var path in paths)
      citiesWithOutgoing.Add(path[0]);

    // Check each destination to find one that is not a starting city
    foreach (var path in paths)
    {
      // If destination city has no outgoing path, it's the answer
      if (!citiesWithOutgoing.Contains(path[1]))
        return path[1];
    }

    // Return empty string if no destination found
    return "";
  }
}
