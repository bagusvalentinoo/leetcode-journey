<h1>
  <a href="https://leetcode.com/problems/valid-parenthesis-string/"> 678. Valid Parenthesis String </a>
</h1>
<img src="https://img.shields.io/badge/Difficulty-Medium-orange" alt="Difficulty: Medium" />
<img src="https://img.shields.io/badge/Topics-String%2C%20Dynamic%20Programming%2C%20Stack%2C%20Greedy%2C%20Bracket%20Sequences-blue" alt="Topics: String, Dynamic Programming, Stack, Greedy, Bracket Sequences" />

<hr />

<p>Given a string <code>s</code> containing only three types of characters: <code>'('</code>, <code>')'</code> and <code>'*'</code>, return <code>true</code> <em>if</em> <code>s</code> <em>is <strong>valid</strong></em>.</p>

<p>The following rules define a <strong>valid</strong> string:</p>

<ul>
	<li>Any left parenthesis <code>'('</code> must have a corresponding right parenthesis <code>')'</code>.</li>
	<li>Any right parenthesis <code>')'</code> must have a corresponding left parenthesis <code>'('</code>.</li>
	<li>Left parenthesis <code>'('</code> must go before the corresponding right parenthesis <code>')'</code>.</li>
	<li><code>'*'</code> could be treated as a single right parenthesis <code>')'</code> or a single left parenthesis <code>'('</code> or an empty string <code>""</code>.</li>
</ul>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = "()"
<strong>Output:</strong> true
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s = "(*)"
<strong>Output:</strong> true
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> s = "(*))"
<strong>Output:</strong> true
</pre>

<p><strong class="example">Example 4:</strong></p>

<pre>
<strong>Input:</strong> s = "("
<strong>Output:</strong> false
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 100</code></li>
	<li><code>s[i]</code> is <code>'('</code>, <code>')'</code> or <code>'*'</code>.</li>
</ul>
