<h1>
  <a href="https://leetcode.com/problems/matrix-cells-in-distance-order/">
    1030. Matrix Cells in Distance Order
  </a>
</h1>
<img src='https://img.shields.io/badge/Difficulty-Easy-greenlight' alt='Difficulty: Easy' />
<img src='https://img.shields.io/badge/Topics-Array%2C%20Math%2C%20Geometry%2C%20Sorting%2C%20Matrix-blue' alt='Topics: Array, Math, Geometry, Sorting, Matrix' />

<hr />

<p>You are given four integers <code>row</code>, <code>cols</code>, <code>rCenter</code>, and <code>cCenter</code>. There is a <code>rows x cols</code> matrix and you are on the cell with the coordinates <code>(rCenter, cCenter)</code>.</p>

<p>Return <em>the coordinates of all cells in the matrix, sorted by their <strong>distance</strong> from </em><code>(rCenter, cCenter)</code><em> from the smallest distance to the largest distance</em>. You may return the answer in <strong>any order</strong> that satisfies this condition.</p>

<p>The <strong>distance</strong> between two cells <code>(r<sub>1</sub>, c<sub>1</sub>)</code> and <code>(r<sub>2</sub>, c<sub>2</sub>)</code> is <code>|r<sub>1</sub> - r<sub>2</sub>| + |c<sub>1</sub> - c<sub>2</sub>|</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre><strong>Input:</strong> rows = 1, cols = 2, rCenter = 0, cCenter = 0
<strong>Output:</strong> [[0,0],[0,1]]
<strong>Explanation:</strong> The distances from (0, 0) to other cells are: [0,1]
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre><strong>Input:</strong> rows = 2, cols = 2, rCenter = 0, cCenter = 1
<strong>Output:</strong> [[0,1],[0,0],[1,1],[1,0]]
<strong>Explanation:</strong> The distances from (0, 1) to other cells are: [0,1,1,2]
The answer [[0,1],[1,1],[0,0],[1,0]] would also be accepted as correct.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre><strong>Input:</strong> rows = 2, cols = 3, rCenter = 1, cCenter = 2
<strong>Output:</strong> [[1,2],[0,2],[1,1],[0,1],[1,0],[0,0]]
<strong>Explanation:</strong> The distances from (1, 2) to other cells are: [0,1,1,2,2,3]
There are other answers that would also be accepted as correct, such as [[1,2],[1,1],[0,2],[1,0],[0,1],[0,0]].
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= rows, cols &lt;= 100</code></li>
	<li><code>0 &lt;= rCenter &lt; rows</code></li>
	<li><code>0 &lt;= cCenter &lt; cols</code></li>
</ul>
