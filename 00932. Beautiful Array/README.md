<h1>
  <a href="https://leetcode.com/problems/beautiful-array/">
    932. Beautiful Array
  </a>
</h1>
<img src='https://img.shields.io/badge/Difficulty-Medium-orange' alt='Difficulty: Medium' />
<img src='https://img.shields.io/badge/Topics-Array%2C%20Math%2C%20Divide%20and%20Conquer-blue' alt='Topics: Array, Math, Divide and Conquer' />

<hr />

<p>An array <code>nums</code> of length <code>n</code> is <strong>beautiful</strong> if:</p>

<ul>
	<li><code>nums</code> is a permutation of the integers in the range <code>[1, n]</code>.</li>
	<li>For every <code>0 &lt;= i &lt; j &lt; n</code>, there is no index <code>k</code> with <code>i &lt; k &lt; j</code> where <code>2 * nums[k] == nums[i] + nums[j]</code>.</li>
</ul>

<p>Given the integer <code>n</code>, return <em>any <strong>beautiful</strong> array </em><code>nums</code><em> of length </em><code>n</code>. There will be at least one valid answer for the given <code>n</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<pre><strong>Input:</strong> n = 4
<strong>Output:</strong> [2,1,4,3]
</pre><p><strong class="example">Example 2:</strong></p>
<pre><strong>Input:</strong> n = 5
<strong>Output:</strong> [3,1,2,5,4]
</pre>
<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 1000</code></li>
</ul>
