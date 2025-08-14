/**
 * Problem: 1143. Longest Common Subsequence
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func longestCommonSubsequence(text1 string, text2 string) int {
	// Assign text1 and text2 to smallStr and bigStr respectively
	var smallStr, bigStr string = text1, text2
	// Get the lengths of smallStr and bigStr
	var smallStrLen, bigStrLen int = len(smallStr), len(bigStr)

	// Initialize a DP array to store the length of LCS up to each character in bigStr
	dp := make([]int, bigStrLen)

	// Declare variables for character indices and temporary values
	var charIdxSmall, charIdxBig, prevDP, tempDP int = 0, 0, 0, 0

	// Iterate over each character in smallStr
	for i := 0; i < smallStrLen; i++ {
		// Get the index of the current character in smallStr
		charIdxSmall = int(smallStr[i] - 'a')
		// Store the previous DP value for the current row
		prevDP = 0

		// Iterate over each character in bigStr
		for j := 0; j < bigStrLen; j++ {
			// Get the index of the current character in bigStr
			charIdxBig = int(bigStr[j] - 'a')
			// Temporarily store the current DP value before updating
			tempDP = dp[j]

			// If the characters match, update DP value by adding 1 to prevDP
			if charIdxSmall == charIdxBig {
				dp[j] = prevDP + 1
			// If not matching and not the first character, take the max of current and previous DP values
			} else if j > 0 {
				dp[j] = max(dp[j], dp[j-1])
			}

			// Update prevDP for the next iteration
			prevDP = tempDP
		}
	}
	
	// Return the length of the longest common subsequence
	return dp[bigStrLen-1]
}
