<h1>
  <a href="https://leetcode.com/problems/smallest-stable-index-i/"> 3903. Smallest Stable Index I </a>
</h1>
<img src="https://img.shields.io/badge/Difficulty-Easy-greenlight" alt="Difficulty: Easy" />
<img src="https://img.shields.io/badge/Topics-Mid%20Level%2C%20Array%2C%20Prefix%20Sum%2C%20Weekly%20Contest%20498-blue" alt="Topics: Mid Level, Array, Prefix Sum, Weekly Contest 498" />

<hr />

<p>You are given an integer array <code>nums</code> of length <code>n</code> and an integer <code>k</code>.</p>

<p>For each index <code>i</code>, define its <strong>instability score</strong> as <code>max(nums[0..i]) - min(nums[i..n - 1])</code>.</p>

<p>In other words:</p>

<ul>
	<li><code>max(nums[0..i])</code> is the <strong>largest</strong> value among the elements from index 0 to index <code>i</code>.</li>
	<li><code>min(nums[i..n - 1])</code> is the <strong>smallest</strong> value among the elements from index <code>i</code> to index <code>n - 1</code>.</li>
</ul>

<p>An index <code>i</code> is called <strong>stable</strong> if its instability score is <strong>less than or equal to</strong> <code>k</code>.</p>

<p>Return the <strong>smallest</strong> stable index. If no such index exists, return -1.</p>

<p>&nbsp;</p>

<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [5,0,1,4], k = 3
<strong>Output:</strong> 3
<strong>Explanation:</strong>
At index 0: The maximum in [5] is 5, and the minimum in [5,0,1,4] is 0, so the instability score is 5 - 0 = 5.
At index 1: The maximum in [5,0] is 5, and the minimum in [0,1,4] is 0, so the instability score is 5 - 0 = 5.
At index 2: The maximum in [5,0,1] is 5, and the minimum in [1,4] is 1, so the instability score is 5 - 1 = 4.
At index 3: The maximum in [5,0,1,4] is 5, and the minimum in [4] is 4, so the instability score is 5 - 4 = 1.
This is the first index with an instability score less than or equal to k = 3. Thus, the answer is 3.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [3,2,1], k = 1
<strong>Output:</strong> -1
<strong>Explanation:</strong>
At index 0, the instability score is 3 - 1 = 2.
At index 1, the instability score is 3 - 1 = 2.
At index 2, the instability score is 3 - 1 = 2.
None of these values is less than or equal to k = 1, so the answer is -1.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> nums = [0], k = 0
<strong>Output:</strong> 0
<strong>Explanation:</strong>
At index 0, the instability score is 0 - 0 = 0, which is less than or equal to k = 0. Therefore, the answer is 0.
</pre>

<p>&nbsp;</p>

<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 100</code></li>
	<li><code>0 &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>
	<li><code>0 &lt;= k &lt;= 10<sup>9</sup></code></li>
</ul>
