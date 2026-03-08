<h1>
  <a href="https://leetcode.com/problems/find-unique-binary-string/">
    1980. Find Unique Binary String
  </a>
</h1>

<img src="https://img.shields.io/badge/Difficulty-Medium-orange" alt="Difficulty: Medium" />
<img src="https://img.shields.io/badge/Topics-Senior%2C%20Array%2C%20Hash%20Table%2C%20String%2C%20Backtracking%2C%20Weekly%20Contest%20255-blue" alt="Topics: Senior, Array, Hash Table, String, Backtracking, Weekly Contest 255" />

<hr />

<p>Given an array of strings <code>nums</code> containing <code>n</code> <strong>unique</strong> binary strings each of length <code>n</code>, return <em>a binary string of length </em><code>n</code><em> that <strong>does not appear</strong> in </em><code>nums</code><em>. If there are multiple answers, you may return <strong>any</strong> of them</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre><strong>Input:</strong> nums = ["01","10"]
<strong>Output:</strong> "11"
<strong>Explanation:</strong> "11" does not appear in nums. "00" would also be correct.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre><strong>Input:</strong> nums = ["00","01"]
<strong>Output:</strong> "11"
<strong>Explanation:</strong> "11" does not appear in nums. "10" would also be correct.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre><strong>Input:</strong> nums = ["111","011","001"]
<strong>Output:</strong> "101"
<strong>Explanation:</strong> "101" does not appear in nums. "000", "010", "100", and "110" would also be correct.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>n == nums.length</code></li>
	<li><code>1 &lt;= n &lt;= 16</code></li>
	<li><code>nums[i].length == n</code></li>
	<li><code>nums[i] </code>is either <code>'0'</code> or <code>'1'</code>.</li>
	<li>All the strings of <code>nums</code> are <strong>unique</strong>.</li>
</ul>
