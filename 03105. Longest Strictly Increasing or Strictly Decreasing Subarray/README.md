<h1>
  <a href="https://leetcode.com/problems/longest-strictly-increasing-or-strictly-decreasing-subarray/"> 3105. Longest Strictly Increasing or Strictly Decreasing Subarray </a>
</h1>
<img src="https://img.shields.io/badge/Difficulty-Easy-greenlight" alt="Difficulty: Easy" />
<img src="https://img.shields.io/badge/Topics-Senior%2C%20Array%2C%20Weekly%20Contest%20392-blue" alt="Topics: Senior, Array, Weekly Contest 392" />

<hr />

<p>You are given an array of integers <code>nums</code>. Return <em>the length of the <strong>longest</strong> subarray of </em><code>nums</code><em> which is either <strong>strictly increasing</strong> or <strong>strictly decreasing</strong></em>.</p>

<p>&nbsp;</p>

<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,4,3,3,2]
<strong>Output:</strong> 2
<strong>Explanation:</strong> The strictly increasing subarrays of <code>nums</code> are <code>[1]</code>, <code>[2]</code>, <code>[3]</code>, <code>[3]</code>, <code>[4]</code>, and <code>[1,4]</code>.
The strictly decreasing subarrays of <code>nums</code> are <code>[1]</code>, <code>[2]</code>, <code>[3]</code>, <code>[3]</code>, <code>[4]</code>, <code>[3,2]</code>, and <code>[4,3]</code>.
Hence, we return <code>2</code>.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [3,3,3,3]
<strong>Output:</strong> 1
<strong>Explanation:</strong> The strictly increasing subarrays of <code>nums</code> are <code>[3]</code>, <code>[3]</code>, <code>[3]</code>, and <code>[3]</code>.
The strictly decreasing subarrays of <code>nums</code> are <code>[3]</code>, <code>[3]</code>, <code>[3]</code>, and <code>[3]</code>.
Hence, we return <code>1</code>.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> nums = [3,2,1]
<strong>Output:</strong> 3
<strong>Explanation:</strong> The strictly increasing subarrays of <code>nums</code> are <code>[3]</code>, <code>[2]</code>, and <code>[1]</code>.
The strictly decreasing subarrays of <code>nums</code> are <code>[3]</code>, <code>[2]</code>, and <code>[1]</code>, <code>[3,2]</code>, <code>[2,1]</code>, and <code>[3,2,1]</code>.
Hence, we return <code>3</code>.
</pre>

<p>&nbsp;</p>

<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 50</code></li>
	<li><code>1 &lt;= nums[i] &lt;= 50</code></li>
</ul>
