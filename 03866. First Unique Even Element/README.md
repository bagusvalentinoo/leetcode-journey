<h1>
  <a href="https://leetcode.com/problems/first-unique-even-element/">
    3866. First Unique Even Element
  </a>
</h1>

<img src="https://img.shields.io/badge/Difficulty-Easy-greenlight" alt="Difficulty: Easy" />
<img src="https://img.shields.io/badge/Topics-Mid%20Level%2C%20Array%2C%20Hash%20Table%2C%20Counting%2C%20Biweekly%20Contest%20178-blue" alt="Topics: Mid Level, Array, Hash Table, Counting, Biweekly Contest 178" />

<hr />

<p>You are given an integer array <code>nums</code>.</p>

<p>Return an integer denoting the first <strong>even</strong> integer (earliest by array index) that appears <strong>exactly</strong> once in <code>nums</code>. If no such integer exists, return -1.</p>

<p>An integer <code>x</code> is considered <strong>even</strong> if it is divisible by 2.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">nums = [3,4,2,5,4,6]</span></p>

<p><strong>Output:</strong> <span class="example-io">2</span></p>

<p><strong>Explanation:</strong></p>

<p>Both 2 and 6 are even and they appear exactly once. Since 2 occurs first in the array, the answer is 2.</p>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">nums = [4,4]</span></p>

<p><strong>Output:</strong> <span class="example-io">-1</span></p>

<p><strong>Explanation:</strong></p>

<p>No even integer appears exactly once, so return -1.</p>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 100</code></li>
	<li><code>1 &lt;= nums[i] &lt;= 100</code></li>
</ul>
