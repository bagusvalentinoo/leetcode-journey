<h1>
  <a href="https://leetcode.com/problems/sum-of-good-numbers/">
    3452. Sum of Good Numbers
  </a>
</h1>

<img src="https://img.shields.io/badge/Difficulty-Easy-greenlight" alt="Difficulty: Easy" />
<img src="https://img.shields.io/badge/Topics-Mid%20Level%2C%20Array%2C%20Biweekly%20Contest%20150-blue" alt="Topics: Mid Level, Array, Biweekly Contest 150" />

<hr />

<p>Given an array of integers <code>nums</code> and an integer <code>k</code>, an element <code>nums[i]</code> is considered <strong>good</strong> if it is <strong>strictly</strong> greater than the elements at indices <code>i - k</code> and <code>i + k</code> (if those indices exist). If neither of these indices <em>exists</em>, <code>nums[i]</code> is still considered <strong>good</strong>.</p>

<p>Return the <strong>sum</strong> of all the <strong>good</strong> elements in the array.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">nums = [1,3,2,1,5,4], k = 2</span></p>

<p><strong>Output:</strong> <span class="example-io">12</span></p>

<p><strong>Explanation:</strong></p>

<p>The good numbers are <code>nums[1] = 3</code>, <code>nums[4] = 5</code>, and <code>nums[5] = 4</code> because they are strictly greater than the numbers at indices <code>i - k</code> and <code>i + k</code>.</p>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">nums = [2,1], k = 1</span></p>

<p><strong>Output:</strong> <span class="example-io">2</span></p>

<p><strong>Explanation:</strong></p>

<p>The only good number is <code>nums[0] = 2</code> because it is strictly greater than <code>nums[1]</code>.</p>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>2 &lt;= nums.length &lt;= 100</code></li>
	<li><code>1 &lt;= nums[i] &lt;= 1000</code></li>
	<li><code>1 &lt;= k &lt;= floor(nums.length / 2)</code></li>
</ul>
