<h1>
  <a href="https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/">
    1337. The K Weakest Rows in a Matrix
  </a>
</h1>

<img src="https://img.shields.io/badge/Difficulty-Easy-greenlight" alt="Difficulty: Easy" />
<img src="https://img.shields.io/badge/Topics-Mid%20Level%2C%20Array%2C%20Binary%20Search%2C%20Sorting%2C%20Heap%20%28Priority%20Queue%29%2C%20Matrix%2C%20Weekly%20Contest%20174-blue" alt="Topics: Mid Level, Array, Binary Search, Sorting, Heap (Priority Queue), Matrix, Weekly Contest 174" />

<hr />

<p>You are given an <code>m x n</code> binary matrix <code>mat</code> of <code>1</code>'s (representing soldiers) and <code>0</code>'s (representing civilians). The soldiers are positioned <strong>in front</strong> of the civilians. That is, all the <code>1</code>'s will appear to the <strong>left</strong> of all the <code>0</code>'s in each row.</p>

<p>A row <code>i</code> is <strong>weaker</strong> than a row <code>j</code> if one of the following is true:</p>

<ul>
  <li>The number of soldiers in row <code>i</code> is less than the number of soldiers in row <code>j</code>.</li>
  <li>Both rows have the same number of soldiers and <code>i < j</code>.</li>
</ul>

<p>Return <em>the indices of the <code>k</code> <strong>weakest</strong> rows in the matrix ordered from weakest to strongest</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<pre><strong>Input:</strong> mat =
[[1,1,0,0,0],
 [1,1,1,1,0],
 [1,0,0,0,0],
 [1,1,0,0,0],
 [1,1,1,1,1]], k = 3
<strong>Output:</strong> [2,0,3]
<strong>Explanation:</strong>
The number of soldiers in each row is:
- Row 0: 2
- Row 1: 4
- Row 2: 1
- Row 3: 2
- Row 4: 5
The rows ordered from weakest to strongest are [2,0,3,1,4].
</pre>

<p>&nbsp;</p>
<p><strong class="example">Example 2:</strong></p>
<pre><strong>Input:</strong> mat =
[[1,0,0,0],
 [1,1,1,1],
 [1,0,0,0],
 [1,0,0,0]], k = 2
<strong>Output:</strong> [0,2]
<strong>Explanation:</strong>
The number of soldiers in each row is:
- Row 0: 1
- Row 1: 4
- Row 2: 1
- Row 3: 1
The rows ordered from weakest to strongest are [0,2,3,1].
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
  <li><code>m == mat.length</code></li>
  <li><code>n == mat[i].length</code></li>
  <li><code>2 &lt;= n, m &lt;= 100</code></li>
  <li><code>1 &lt;= k &lt;= m</code></li>
  <li><code>matrix[i][j]</code> is either <code>0</code> or <code>1</code>.</li>
</ul>
