/**
 * Problem: 3477. Fruits Into Baskets II
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  // Build segment tree from baskets array
  void buildTree(int nodeIndex, int leftBound, int rightBound,
                 vector<int> &segmentTree, vector<int> &baskets) {
    // Base case: leaf node
    if (leftBound == rightBound) {
      // Store basket size at leaf
      segmentTree[nodeIndex] = baskets[leftBound];
      return;
    }

    // Calculate middle point
    int midPoint = leftBound + (rightBound - leftBound) / 2;

    // Recursively build left child
    buildTree(2 * nodeIndex + 1, leftBound, midPoint, segmentTree, baskets);

    // Recursively build right child
    buildTree(2 * nodeIndex + 2, midPoint + 1, rightBound, segmentTree,
              baskets);

    // Internal node stores maximum of its children
    segmentTree[nodeIndex] =
        max(segmentTree[2 * nodeIndex + 1], segmentTree[2 * nodeIndex + 2]);
  }

  // Query and place fruit in the smallest suitable basket
  bool queryTree(int nodeIndex, int leftBound, int rightBound,
                 vector<int> &segmentTree, int fruitSize) {
    // If max in this segment is less than fruit, cannot place
    if (segmentTree[nodeIndex] < fruitSize)
      return false;

    // Leaf node found (basket found)
    if (leftBound == rightBound) {
      // Mark basket as used by setting to -1
      segmentTree[nodeIndex] = -1;
      return true;
    }

    // Calculate middle point
    int midPoint = leftBound + (rightBound - leftBound) / 2;

    // Flag to indicate if fruit was placed
    bool placed = false;

    // Try left child first (smallest indices)
    if (segmentTree[2 * nodeIndex + 1] >= fruitSize)
      placed = queryTree(2 * nodeIndex + 1, leftBound, midPoint, segmentTree,
                         fruitSize);
    // If left child can't place, try right child
    else
      placed = queryTree(2 * nodeIndex + 2, midPoint + 1, rightBound,
                         segmentTree, fruitSize);

    // Update current node with max of its children
    segmentTree[nodeIndex] =
        max(segmentTree[2 * nodeIndex + 1], segmentTree[2 * nodeIndex + 2]);

    return placed;
  }

  int numOfUnplacedFruits(vector<int> &fruits, vector<int> &baskets) {
    // Number of baskets
    int basketCount = baskets.size();

    // Segment tree with 4 times the size for safety
    vector<int> segmentTree(4 * basketCount);

    // Build segment tree from baskets
    buildTree(0, 0, basketCount - 1, segmentTree, baskets);

    // Counter for unplaced fruits
    int unplacedFruits = 0;

    // Try to place each fruit
    for (int i = 0; i < basketCount; i++) {
      // If fruit cannot be placed, increment counter
      if (!queryTree(0, 0, basketCount - 1, segmentTree, fruits[i]))
        unplacedFruits++;
    }

    // Return number of unplaced fruits
    return unplacedFruits;
  }
};
