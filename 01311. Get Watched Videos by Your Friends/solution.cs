/**
 * Problem: 1311. Get Watched Videos by Your Friends
 *
 * Difficulty: Medium
 *
 * Language: C#
 *
 * Performance: Runtime - 39 ms (Beats 100%)
 */

public class Solution
{
  public IList<string> WatchedVideosByFriends(
    IList<IList<string>> watchedVideos,
    int[][] friends,
    int id,
    int level
  )
  {
    // Initialize queue for BFS traversal
    Queue<int> queue = new Queue<int>();

    // Add starting person to queue
    queue.Enqueue(id);

    // Track visited people to avoid cycles
    bool[] visited = new bool[friends.Length];

    // Mark starting person as visited
    visited[id] = true;

    // Perform BFS to reach target level
    for (int currentLevel = 0; currentLevel < level; currentLevel++)
    {
      // Number of people at current level to process
      int levelSize = queue.Count;

      // Process all people at current level
      for (int i = 0; i < levelSize; i++)
      {
        int person = queue.Dequeue();

        // Add all unvisited friends to next level
        foreach (int friend in friends[person])
        {
          if (!visited[friend])
          {
            queue.Enqueue(friend);
            visited[friend] = true;
          }
        }
      }
    }

    // Count frequency of videos from friends at target level
    Dictionary<string, int> frequency = new Dictionary<string, int>();

    // Process each friend in the queue (all at target level)
    foreach (int person in queue)
    {
      foreach (var video in watchedVideos[person])
      {
        frequency[video] = frequency.GetValueOrDefault(video) + 1;
      }
    }

    // Get all video keys
    string[] result = frequency.Keys.ToArray();

    // Sort by frequency (ascending), then alphabetically
    Array.Sort(
      result,
      (x, y) =>
      {
        // Compare by frequency first
        int compare = frequency[x] - frequency[y];

        // If frequencies differ, return frequency comparison
        if (compare != 0)
          return compare;

        // If frequencies are equal, compare alphabetically
        return string.Compare(x, y, StringComparison.Ordinal);
      }
    );

    // Return sorted result
    return result;
  }
}
