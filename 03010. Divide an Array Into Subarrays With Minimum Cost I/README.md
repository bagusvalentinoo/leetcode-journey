<h1>
  <a href="https://leetcode.com/problems/">
    3010. Divide an Array Into Subarrays With Minimum Cost I
  </a>
</h1>

<img src="https://img.shields.io/badge/Difficulty-Easy-greenlight" alt="Difficulty: Easy" />
<img src='https://img.shields.io/badge/Topics-Array%2C%20Sorting%2C%20Enumeration%2C%20Biweekly%20Contest%20122-blue' alt='Topics: Array, Sorting, Enumeration, Biweekly Contest 122' />
<hr />

<p>You are given an array of integers <code>nums</code> of length <code>n</code>.</p>

<p>The <strong>cost</strong> of an array is the value of its <strong>first</strong> element. For example, the cost of <code>[1,2,3]</code> is <code>1</code> while the cost of <code>[3,4,1]</code> is <code>3</code>.</p>

<p>You need to divide <code>nums</code> into <code>3</code> <strong>disjoint contiguous </strong><span data-keyword="subarray-nonempty" class=" cursor-pointer relative text-dark-blue-s text-sm"><button type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:r1k:" data-state="closed" class="">subarrays</button></span>.</p>

<p>Return <em>the <strong>minimum</strong> possible <strong>sum</strong> of the cost of these subarrays</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre><strong>Input:</strong> nums = [1,2,3,12]
<strong>Output:</strong> 6
<strong>Explanation:</strong> The best possible way to form 3 subarrays is: [1], [2], and [3,12] at a total cost of 1 + 2 + 3 = 6.
The other possible ways to form 3 subarrays are:
- [1], [2,3], and [12] at a total cost of 1 + 2 + 12 = 15.
- [1,2], [3], and [12] at a total cost of 1 + 3 + 12 = 16.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre><strong>Input:</strong> nums = [5,4,3]
<strong>Output:</strong> 12
<strong>Explanation:</strong> The best possible way to form 3 subarrays is: [5], [4], and [3] at a total cost of 5 + 4 + 3 = 12.
It can be shown that 12 is the minimum cost achievable.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre><strong>Input:</strong> nums = [10,3,1,1]
<strong>Output:</strong> 12
<strong>Explanation:</strong> The best possible way to form 3 subarrays is: [10,3], [1], and [1] at a total cost of 10 + 1 + 1 = 12.
It can be shown that 12 is the minimum cost achievable.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>3 &lt;= n &lt;= 50</code></li>
	<li><code>1 &lt;= nums[i] &lt;= 50</code></li>
</ul>
