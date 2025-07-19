/**
 * Problem: 1233. Remove Sub-Folders from the Filesystem
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 10 ms (Beats 100%)
 */

func removeSubfolders(folder []string) []string {
	// Sort the folder paths lexicographically to ensure parent folders come before their subfolders
	slices.Sort(folder)

	// Initialize result slice with the first folder (guaranteed to not be a subfolder after sorting)
	result := []string{folder[0]}

	// Iterate through remaining folders starting from index 1
	for i := 1; i < len(folder); i++ {
		// Check if current folder is NOT a subfolder of the last added folder
		// by verifying it doesn't start with "lastFolder/" pattern
		if !strings.HasPrefix(folder[i], result[len(result)-1]+"/") {
			// Current folder is not a subfolder, so add it to result
			result = append(result, folder[i])
		}
		// If it is a subfolder (HasPrefix returns true), skip it (implicit)
	}
	
	// Return the filtered list containing only parent folders
	return result
}
