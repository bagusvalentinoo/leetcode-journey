<h1>
  <a href="https://leetcode.com/problems/minimum-moves-to-equal-array-elements-iii/"> 3736. Minimum Moves to Equal Array Elements III </a>
</h1>
<img src="https://img.shields.io/badge/Difficulty-Easy-greenlight" alt="Difficulty: Easy" />
<img src="https://img.shields.io/badge/Topics-Mid%20Level%2C%20Array%2C%20Math%2C%20Biweekly%20Contest%20169-blue" alt="Topics: Mid Level, Array, Math, Biweekly Contest 169" />

<hr />

<p>You are given an integer array <code>nums</code>.</p>

<p>In one move, you may increase the value of any single element <code>nums[i]</code> by <code>1</code>.</p>

<p>Return the <strong>minimum total number of moves</strong> required so that all elements in <code>nums</code> become <strong>equal</strong>.</p>

<p>&nbsp;</p>

<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [2,1,3]
<strong>Output:</strong> 3
<strong>Explanation:</strong>
To make all elements equal:
<ul>
	<li>Increase <code>nums[0] = 2</code> by 1 to make it <code>3</code>.</li>
	<li>Increase <code>nums[1] = 1</code> by 1 to make it <code>2</code>.</li>
	<li>Increase <code>nums[1] = 2</code> by 1 to make it <code>3</code>.</li>
</ul>
Now, all elements of <code>nums</code> are equal to 3. The minimum total moves is 3.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [4,4,5]
<strong>Output:</strong> 2
<strong>Explanation:</strong>
To make all elements equal:
<ul>
	<li>Increase <code>nums[0] = 4</code> by 1 to make it <code>5</code>.</li>
	<li>Increase <code>nums[1] = 4</code> by 1 to make it <code>5</code>.</li>
</ul>
Now, all elements of <code>nums</code> are equal to 5. The minimum total moves is 2.
</pre>

<p>&nbsp;</p>

<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 100</code></li>
	<li><code>1 &lt;= nums[i] &lt;= 100</code></li>
</ul>
