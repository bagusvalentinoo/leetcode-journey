<h1>
  <a href="https://leetcode.com/problems/previous-permutation-with-one-swap/">
    1053. Previous Permutation With One Swap
  </a>
</h1>
<img src='https://img.shields.io/badge/Difficulty-Medium-orange' alt='Difficulty: Medium' />
<img src='https://img.shields.io/badge/Topics-Array%2C%20Greedy%2C%20Weekly%20Contest%20138-blue' alt='Topics: Array, Greedy, Weekly Contest 138' />

<hr />

<p>Given an array of positive integers <code>arr</code> (not necessarily distinct), return <em>the </em><span data-keyword="lexicographically-smaller-array" class=" cursor-pointer relative text-dark-blue-s text-sm"><button type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:rs:" data-state="closed" class=""><em>lexicographically</em></button></span><em> largest permutation that is smaller than</em> <code>arr</code>, that can be <strong>made with exactly one swap</strong>. If it cannot be done, then return the same array.</p>

<p><strong>Note</strong> that a <em>swap</em> exchanges the positions of two numbers <code>arr[i]</code> and <code>arr[j]</code></p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre><strong>Input:</strong> arr = [3,2,1]
<strong>Output:</strong> [3,1,2]
<strong>Explanation:</strong> Swapping 2 and 1.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre><strong>Input:</strong> arr = [1,1,5]
<strong>Output:</strong> [1,1,5]
<strong>Explanation:</strong> This is already the smallest permutation.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre><strong>Input:</strong> arr = [1,9,4,6,7]
<strong>Output:</strong> [1,7,4,6,9]
<strong>Explanation:</strong> Swapping 9 and 7.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= arr.length &lt;= 10<sup>4</sup></code></li>
	<li><code>1 &lt;= arr[i] &lt;= 10<sup>4</sup></code></li>
</ul>
