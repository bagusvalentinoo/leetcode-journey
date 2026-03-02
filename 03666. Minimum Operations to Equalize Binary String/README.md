<h1>
  <a href="https://leetcode.com/problems/minimum-operations-to-equalize-binary-string/">
    3666. Minimum Operations to Equalize Binary String
  </a>
</h1>

<img src="https://img.shields.io/badge/Difficulty-Hard-darkred" alt="Difficulty: Hard" />
<img src="https://img.shields.io/badge/Topics-Senior%20Staff%2C%20Math%2C%20String%2C%20Breadth-First%20Search%2C%20Union-Find%2C%20Ordered%20Set%2C%20Biweekly%20Contest%20164-blue" alt="Topics: Senior Staff, Math, String, Breadth-First Search, Union-Find, Ordered Set, Biweekly Contest 164" />

<hr />

<p>You are given a binary string <code>s</code>, and an integer <code>k</code>.</p>

<p>In one operation, you must choose <strong>exactly</strong> <code>k</code> <strong>different</strong> indices and <strong>flip</strong> each <code>'0'</code> to <code>'1'</code> and each <code>'1'</code> to <code>'0'</code>.</p>

<p>Return the <strong>minimum</strong> number of operations required to make all characters in the string equal to <code>'1'</code>. If it is not possible, return -1.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">s = "110", k = 1</span></p>

<p><strong>Output:</strong> <span class="example-io">1</span></p>

<p><strong>Explanation:</strong></p>

<ul>
	<li>There is one <code>'0'</code> in <code>s</code>.</li>
	<li>Since <code>k = 1</code>, we can flip it directly in one operation.</li>
</ul>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">s = "0101", k = 3</span></p>

<p><strong>Output:</strong> <span class="example-io">2</span></p>

<p><strong>Explanation:</strong></p>

<p>One optimal set of operations choosing <code>k = 3</code> indices in each operation is:</p>

<ul>
	<li><strong>Operation 1</strong>: Flip indices <code>[0, 1, 3]</code>. <code>s</code> changes from <code>"0101"</code> to <code>"1000"</code>.</li>
	<li><strong>Operation 2</strong>: Flip indices <code>[1, 2, 3]</code>. <code>s</code> changes from <code>"1000"</code> to <code>"1111"</code>.</li>
</ul>

<p>Thus, the minimum number of operations is 2.</p>
</div>

<p><strong class="example">Example 3:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">s = "101", k = 2</span></p>

<p><strong>Output:</strong> <span class="example-io">-1</span></p>

<p><strong>Explanation:</strong></p>

<p>Since <code>k = 2</code> and <code>s</code> has only one <code>'0'</code>, it is impossible to flip exactly <code>k</code> indices to make all <code>'1'</code>. Hence, the answer is -1.</p>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 10<sup>​​​​​​​5</sup></code></li>
	<li><code>s[i]</code> is either <code>'0'</code> or <code>'1'</code>.</li>
	<li><code>1 &lt;= k &lt;= s.length</code></li>
</ul>
