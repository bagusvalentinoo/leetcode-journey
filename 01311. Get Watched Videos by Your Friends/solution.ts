/**
 * Problem: 1311. Get Watched Videos by Your Friends
 *
 * Difficulty: Medium
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 20 ms (Beats 100%)
 */

/**
 * Returns videos watched by friends at exact friendship level, sorted by frequency then name
 *
 * @param watchedVideos - Videos watched by each person
 * @param friends - Adjacency list of friendships
 * @param id - Starting person ID
 * @param level - Friendship level to target
 *
 * @returns Videos from friends at exact level
 */
const watchedVideosByFriends = (
  watchedVideos: string[][],
  friends: number[][],
  id: number,
  level: number
): string[] => {
  // Track current BFS level
  let currentLevel: number = 0

  // People at current BFS level
  let currentFriends: number[] = [id]

  // Track visited people to avoid cycles
  let visited: Set<number> = new Set()

  // Mark starting person as visited
  visited.add(id)

  // BFS to reach target level
  while (currentLevel < level) {
    // Set to store people at next level
    let nextLevelSet: Set<number> = new Set()

    // Process all friends at current level
    for (let i: number = 0; i < currentFriends.length; i++) {
      // Current person being processed
      const person: number = currentFriends[i]

      // Check all friends of current person
      for (let j: number = 0; j < friends[person].length; j++) {
        // Friend of current person
        const friend: number = friends[person][j]

        // If not visited, add to next level
        if (!visited.has(friend)) {
          // Add friend to next level
          nextLevelSet.add(friend)

          // Mark friend as visited
          visited.add(friend)
        }
      }
    }

    // Update current friends to next level
    currentFriends = Array.from(nextLevelSet)

    // Move to next BFS level
    currentLevel++
  }

  // Count frequency of videos from friends at target level
  const videoFrequency: Map<string, number> = new Map()

  // Process each friend at target level
  for (let i: number = 0; i < currentFriends.length; i++) {
    // Current person at target level
    const person: number = currentFriends[i]

    // Iterate through videos watched by this person
    for (let j: number = 0; j < watchedVideos[person].length; j++) {
      // Current video
      const video: string = watchedVideos[person][j]

      // Increment frequency count for this video
      videoFrequency.set(video, (videoFrequency.get(video) ?? 0) + 1)
    }
  }

  // Convert map to array of [video, frequency] pairs
  const frequencyArray: [string, number][] = []

  // Populate frequency array from map entries
  for (const entry of videoFrequency) frequencyArray.push(entry)

  // Sort by frequency (ascending), then alphabetically
  frequencyArray.sort((a, b) => {
    // If frequencies are equal, sort alphabetically
    if (a[1] === b[1]) return a[0] < b[0] ? -1 : 1

    // Otherwise sort by frequency
    return a[1] - b[1]
  })

  // Return only video names in sorted order
  return frequencyArray.map((entry) => entry[0])
}
