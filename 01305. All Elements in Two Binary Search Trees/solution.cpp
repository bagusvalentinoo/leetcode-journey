/**
 * Problem: 1305. All Elements in Two Binary Search Trees
 *
 * Difficulty: Medium
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left),
 * right(right) {}
 * };
 */
class Solution {
public:
  // Performs in-order traversal to collect node values
  void inorder(TreeNode *root, vector<int> &nums) {
    // If the node is null, return
    if (!root)
      return;

    // Traverse left subtree
    inorder(root->left, nums);

    // Visit current node
    nums.push_back(root->val);

    // Traverse right subtree
    inorder(root->right, nums);
  }

  // Collects all values from both BSTs and returns them in sorted order
  vector<int> getAllElements(TreeNode *root1, TreeNode *root2) {
    // Create vectors to store values from both trees
    vector<int> nums1;
    vector<int> nums2;

    // Perform in-order traversal on both trees
    inorder(root1, nums1);
    inorder(root2, nums2);

    // Get the sizes of both vectors
    int m = nums1.size();
    int n = nums2.size();

    // Resize the first vector to hold all elements
    nums1.resize(m + n);

    // Pointers for both vectors and the result vector
    int i = m - 1;
    int j = n - 1;
    int k = m + n - 1;

    // Merge while both vectors have elements
    while (i >= 0 && j >= 0) {
      // If the second value is null or the first value is smaller
      if (nums1[i] > nums2[j]) {
        // Add the first value to the result
        nums1[k] = nums1[i];
        // Move to the next element in the first vector
        k--;
        i--;
      }
      // Otherwise, add the second value to the result
      else {
        // Add the second value to the result
        nums1[k] = nums2[j];
        // Move to the next element in the second vector
        k--;
        j--;
      }
    }

    // Add remaining elements from the second vector
    while (j >= 0) {
      // Add the second value to the result
      nums1[k] = nums2[j];
      // Move to the next element in the second vector
      k--;
      j--;
    }

    // Return the merged array
    return nums1;
  }
};
