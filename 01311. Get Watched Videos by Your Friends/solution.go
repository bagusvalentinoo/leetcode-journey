/**
 * Problem: 1311. Get Watched Videos by Your Friends
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func watchedVideosByFriends(watchedVideos [][]string, friends [][]int, id int, level int) []string {
	// Number of people in the network
	n := len(friends)

	// Track visited people to avoid cycles
	visited := make([]bool, n)

	// Initialize queue with starting person
	queue := []int{id}

	// Mark starting person as visited
	visited[id] = true

	// Perform BFS to reach target level
	for currentLevel := 0; currentLevel < level; currentLevel++ {
		// Number of people at current level
		levelSize := len(queue)

		// Process all people at current level
		for i := 0; i < levelSize; i++ {
			// Get current person from front of queue
			current := queue[0]
			queue = queue[1:]

			// Add all unvisited friends to next level
			for _, friend := range friends[current] {
				if !visited[friend] {
					visited[friend] = true
					queue = append(queue, friend)
				}
			}
		}
	}

	// Count frequency of videos from friends at target level
	frequency := make(map[string]int)

	// Process each friend remaining in queue (all at target level)
	for _, friend := range queue {
		for _, video := range watchedVideos[friend] {
			frequency[video]++
		}
	}

	// Create slice to store video-frequency pairs
	videos := make([]VideoFreq, 0, len(frequency))

	// Populate videos slice from frequency map
	for name, count := range frequency {
		videos = append(videos, VideoFreq{name, count})
	}

	// Sort by frequency (ascending), then alphabetically
	sort.Slice(videos, func(i, j int) bool {
		// If frequencies are equal, sort alphabetically
		if videos[i].Count == videos[j].Count {
			return videos[i].Name < videos[j].Name
		}

		// Otherwise sort by frequency
		return videos[i].Count < videos[j].Count
	})

	// Create result slice for video names
	result := make([]string, len(videos))

	// Extract only video names from sorted videos
	for i, video := range videos {
		result[i] = video.Name
	}

	// Return sorted video names
	return result
}

// Helper struct to store video name and frequency
type VideoFreq struct {
	Name  string
	Count int
}
