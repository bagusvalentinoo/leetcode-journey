<h1>
  <a href="https://leetcode.com/problems/count-submatrices-with-equal-frequency-of-x-and-y/">
    3212. Count Submatrices With Equal Frequency of X and Y
  </a>
</h1>

<img src="https://img.shields.io/badge/Difficulty-Medium-orange" alt="Difficulty: Medium" />
<img src="https://img.shields.io/badge/Topics-Staff%2C%20Array%2C%20Matrix%2C%20Prefix%20Sum%2C%20Weekly%20Contest%20405-blue" alt="Topics: Staff, Array, Matrix, Prefix Sum, Weekly Contest 405" />

<hr />

<p>Given a 2D character matrix <code>grid</code>, where <code>grid[i][j]</code> is either <code>'X'</code>, <code>'Y'</code>, or <code>'.'</code>, return the number of <span data-keyword="submatrix" class=" cursor-pointer relative text-dark-blue-s text-sm"><button type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:r1k:" data-state="closed" class="">submatrices</button></span> that contain:</p>

<ul>
	<li><code>grid[0][0]</code></li>
	<li>an <strong>equal</strong> frequency of <code>'X'</code> and <code>'Y'</code>.</li>
	<li><strong>at least</strong> one <code>'X'</code>.</li>
</ul>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">grid = [["X","Y","."],["Y",".","."]]</span></p>

<p><strong>Output:</strong> <span class="example-io">3</span></p>

<p><strong>Explanation:</strong></p>

<p><strong><img alt="" src="https://assets.leetcode.com/uploads/2024/06/07/examplems.png" style="padding: 10px; background: rgb(255, 255, 255); border-radius: 0.5rem; width: 175px; height: 350px;"></strong></p>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">grid = [["X","X"],["X","Y"]]</span></p>

<p><strong>Output:</strong> <span class="example-io">0</span></p>

<p><strong>Explanation:</strong></p>

<p>No submatrix has an equal frequency of <code>'X'</code> and <code>'Y'</code>.</p>
</div>

<p><strong class="example">Example 3:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">grid = [[".","."],[".","."]]</span></p>

<p><strong>Output:</strong> <span class="example-io">0</span></p>

<p><strong>Explanation:</strong></p>

<p>No submatrix has at least one <code>'X'</code>.</p>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= grid.length, grid[i].length &lt;= 1000</code></li>
	<li><code>grid[i][j]</code> is either <code>'X'</code>, <code>'Y'</code>, or <code>'.'</code>.</li>
</ul>
