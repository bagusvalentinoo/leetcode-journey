<h1>
  <a href="https://leetcode.com/problems/longest-valid-parentheses/">
    32. Longest Valid Parentheses
  </a>
</h1>
<img src="https://img.shields.io/badge/Difficulty-Hard-darkred" alt="Difficulty: Hard" />
<img src="https://img.shields.io/badge/Topics-String%2C%20Dynamic%20Programming%2C%20Stack%2C%20Bracket%20Sequences-blue" alt="Topics: String, Dynamic Programming, Stack, Bracket Sequences" />

<hr />

<p>Given a string containing just the characters <code>'('</code> and <code>')'</code>, return <em>the length of the longest valid (well-formed) parentheses </em><span data-keyword="substring-nonempty"><em>substring</em></span>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = "(()"
<strong>Output:</strong> 2
<strong>Explanation:</strong> The longest valid parentheses substring is "()".
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s = ")()())"
<strong>Output:</strong> 4
<strong>Explanation:</strong> The longest valid parentheses substring is "()()".
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> s = ""
<strong>Output:</strong> 0
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>0 &lt;= s.length &lt;= 3 * 10<sup>4</sup></code></li>
	<li><code>s[i]</code> is <code>'('</code>, or <code>')'</code>.</li>
</ul>
