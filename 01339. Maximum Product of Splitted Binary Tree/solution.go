/**
 * Problem: 1339. Maximum Product of Splitted Binary Tree
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 7 ms (Beats 100%)
 */

// Modulo constant (10^9 + 7)
const MOD = 1000000007

// Struct to hold calculation state
type MaxProduct struct {
	maxProd  int   // Maximum product found
	totalSum int   // Total sum of all nodes in the tree
	subtree  []int // Slice to store subtree sums (not used in current implementation)
}

// Main function to calculate maximum product of splitted binary tree
func maxProduct(root *TreeNode) int {
	// Create MaxProduct instance with total sum calculated
	p := &MaxProduct{
		totalSum: totalSum(root),
	}
    
	// Calculate maximum product
	p.CalculateMax(root)

	// Return maximum product modulo MOD
	return p.maxProd % MOD
}

// Method to calculate subtree sums and find maximum product
func (m *MaxProduct) CalculateMax(root *TreeNode) int {
	// Base case: null node has sum 0
	if root == nil {
		return 0
	}

	// Recursively calculate sums of left and right subtrees
	left := m.CalculateMax(root.Left)
	right := m.CalculateMax(root.Right)
	// Calculate sum of current subtree (including current node)
	thisTree := left + right + root.Val
	// Update maximum product: product = current subtree sum * remaining tree sum
	m.maxProd = max(m.maxProd, (m.totalSum-thisTree)*thisTree)

	// Return sum of current subtree
	return thisTree
}

// Helper function to calculate total sum of all nodes in the tree
func totalSum(root *TreeNode) int {
	// Base case: null node contributes 0 to sum
	if root == nil {
		return 0
	}

	// Recursively calculate sum = current node + left subtree + right subtree
	return root.Val + totalSum(root.Left) + totalSum(root.Right)
}
