<!-- prettier-ignore -->
<h1>
  <a href="https://leetcode.com/problems/make-array-zero-by-subtracting-equal-amounts/"> 2357. Make Array Zero by Subtracting Equal Amounts </a>
</h1>
<img src="https://img.shields.io/badge/Difficulty-Easy-greenlight" alt="Difficulty: Easy" />
<img src="https://img.shields.io/badge/Topics-Mid%20Level%2C%20Array%2C%20Hash%20Table%2C%20Greedy%2C%20Sorting%2C%20Heap%20%28Priority%20Queue%29%2C%20Simulation%2C%20Weekly%20Contest%20304-blue" alt="Topics: Mid Level, Array, Hash Table, Greedy, Sorting, Heap (Priority Queue), Simulation, Weekly Contest 304" />

<hr />

<p>You are given a non-negative integer array <code>nums</code>. In one operation, you must:</p>

<ul>
  <li>Choose a positive integer <code>x</code> such that <code>x</code> is less than or equal to the <strong>smallest non-zero</strong> element in <code>nums</code>.</li>
  <li>Subtract <code>x</code> from every <strong>positive</strong> element in <code>nums</code>.</li>
</ul>

<p>Return <em>the <strong>minimum</strong> number of operations to make every element in </em><code>nums</code><em> equal to </em><code>0</code>.</p>

<p>&nbsp;</p>

<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,5,0,3,5]
<strong>Output:</strong> 3
<strong>Explanation:</strong>
In the first operation, choose x = 1. Now, nums = [0,4,0,2,4].
In the second operation, choose x = 2. Now, nums = [0,2,0,0,2].
In the third operation, choose x = 2. Now, nums = [0,0,0,0,0].
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [0]
<strong>Output:</strong> 0
<strong>Explanation:</strong> Each element in nums is already 0 so no operations are needed.
</pre>

<p>&nbsp;</p>

<p><strong>Constraints:</strong></p>

<ul>
  <li><code>1 &lt;= nums.length &lt;= 100</code></li>
  <li><code>0 &lt;= nums[i] &lt;= 100</code></li>
</ul>
