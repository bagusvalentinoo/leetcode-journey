<h1>
  <a href="https://leetcode.com/problems/smallest-missing-multiple-of-k/">
    3718. Smallest Missing Multiple of K
  </a>
</h1>

<img src="https://img.shields.io/badge/Difficulty-Easy-greenlight" alt="Difficulty: Easy" />
<img src="https://img.shields.io/badge/Topics-Array%2C%20Hash%2C%20Math%2C%20Weekly%20Contest%20472-blue" alt="Topics: Array, Hash Table, Math, Weekly Contest 472" />

<hr />

<p>Given an integer array <code>nums</code> and an integer <code>k</code>, return the <strong>smallest positive multiple of</strong> <code>k</code> that is <strong>missing</strong> from <code>nums</code>.</p>

<p>A <strong>multiple</strong> of <code>k</code> is defined as any positive integer divisible by <code>k</code> (i.e., <code>k * 1</code>, <code>k * 2</code>, <code>k * 3</code>, ...).</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre><strong>Input:</strong> nums = [8,2,3,4,6], k = 2
<strong>Output:</strong> 10
<strong>Explanation:</strong> The positive multiples of k = 2 are 2, 4, 6, 8, 10, 12, ... The smallest positive multiple of 2 missing from nums is 10.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre><strong>Input:</strong> nums = [1,4,7,10,15], k = 5
<strong>Output:</strong> 5
<strong>Explanation:</strong> The positive multiples of k = 5 are 5, 10, 15, 20, ... The smallest positive multiple of 5 missing from nums is 5.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 100</code></li>
	<li><code>1 &lt;= nums[i] &lt;= 100</code></li>
	<li><code>1 &lt;= k &lt;= 100</code></li>
</ul>
