/**
 * Problem: 1024. Video Stitching
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func videoStitching(clips [][]int, time int) int {
	// Sort clips by start time, then by end time in descending order
	sort.Slice(clips, func(i, j int) bool {
		if clips[i][0] == clips[j][0] {
			return clips[i][1] > clips[j][1]
		}

		return clips[i][0] < clips[j][0]
	})

	// Return -1 if first clip doesn't start at time 0
	if clips[0][0] != 0 {
		return -1
	}

	// Initialize tracking variables for current end, next end, and clip count
	currentEnd, nextEnd, clipCount := 0, 0, 0

	// Process clips using greedy approach
	clipIndex := 0
	for clipIndex < len(clips) && clips[clipIndex][0] <= currentEnd {
		// Find the clip with maximum end time within current range
		for clipIndex < len(clips) && clips[clipIndex][0] <= currentEnd {
			nextEnd = max(nextEnd, clips[clipIndex][1])
			clipIndex++
		}

		// Use one more clip and update current end
		clipCount++
		currentEnd = nextEnd

		// Return if we've covered the required time
		if currentEnd >= time {
			return clipCount
		}
	}

	// Return -1 if unable to cover the entire time
	return -1
}
