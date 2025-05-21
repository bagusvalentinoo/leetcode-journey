/**
 * Problem: 979. Distribute Coins in Binary Tree
 *
 * Difficulty: Medium
 *
 * Language: Go
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func distributeCoins(root *TreeNode) int {
	// Total number of moves needed to distribute the coins
	var totalMoves int

	// Recursive function that returns the excess/deficit of coins at each node
	var dfs func(node *TreeNode) int
	dfs = func(node *TreeNode) int {
		if node == nil {
			return 0
		}

		// Get excess/deficit from left and right subtrees
		leftBalance, rightBalance := dfs(node.Left), dfs(node.Right)

		// Calculate node's balance: current coins + children balances - 1 coin needed for itself
		nodeBalance := node.Val + leftBalance + rightBalance - 1
		// Each coin movement contributes to total moves
		totalMoves += abs(nodeBalance)

		// Pass the balance to parent
		return nodeBalance
	}

	dfs(root)
	
	return totalMoves
}

func abs(x int) int {
	// Return absolute value by negating if negative
	if x < 0 {
		return -x
	}

	// Return positive value
	return x
}