<h1>
  <a href="https://leetcode.com/problems/binary-string-with-substrings-representing-1-to-n/">
    1016. Binary String With Substrings Representing 1 To N
  </a>
</h1>
<img src='https://img.shields.io/badge/Difficulty-Medium-orange' alt='Difficulty: Medium' />
<img src='https://img.shields.io/badge/Topics-Hash%20Table%2C%20String%2C%20Bit%20Manipulation%2C%20Sliding%20Window-blue' alt='Topics: Hash Table, String, Bit Manipulation, Sliding Window' />

<hr />

<p>Given a binary string <code>s</code> and a positive integer <code>n</code>, return <code>true</code><em> if the binary representation of all the integers in the range </em><code>[1, n]</code><em> are <strong>substrings</strong> of </em><code>s</code><em>, or </em><code>false</code><em> otherwise</em>.</p>

<p>A <strong>substring</strong> is a contiguous sequence of characters within a string.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<pre><strong>Input:</strong> s = "0110", n = 3
<strong>Output:</strong> true
</pre><p><strong class="example">Example 2:</strong></p>
<pre><strong>Input:</strong> s = "0110", n = 4
<strong>Output:</strong> false
</pre>
<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 1000</code></li>
	<li><code>s[i]</code> is either <code>'0'</code> or <code>'1'</code>.</li>
	<li><code>1 &lt;= n &lt;= 10<sup>9</sup></code></li>
</ul>
