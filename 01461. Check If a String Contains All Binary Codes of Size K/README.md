<h1>
  <a href="https://leetcode.com/problems/check-if-a-string-contains-all-binary-codes-of-size-k/">
    1461. Check If a String Contains All Binary Codes of Size K
  </a>
</h1>

<img src="https://img.shields.io/badge/Difficulty-Medium-orange" alt="Difficulty: Medium" />
<img src="https://img.shields.io/badge/Topics-Senior%2C%20Hash%20Table%2C%20String%2C%20Bit%20Manipulation%2C%20Rolling%20Hash%2C%20Hash%20Function%2C%20Biweekly%20Contest%2027-blue" alt="Topics: Senior, Hash Table, String, Bit Manipulation, Rolling Hash, Hash Function, Biweekly Contest 27" />

<hr />

<p>Given a binary string <code>s</code> and an integer <code>k</code>, return <code>true</code> <em>if every binary code of length</em> <code>k</code> <em>is a substring of</em> <code>s</code>. Otherwise, return <code>false</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre><strong>Input:</strong> s = "00110110", k = 2
<strong>Output:</strong> true
<strong>Explanation:</strong> The binary codes of length 2 are "00", "01", "10" and "11". They can be all found as substrings at indices 0, 1, 3 and 2 respectively.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre><strong>Input:</strong> s = "0110", k = 1
<strong>Output:</strong> true
<strong>Explanation:</strong> The binary codes of length 1 are "0" and "1", it is clear that both exist as a substring. 
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre><strong>Input:</strong> s = "0110", k = 2
<strong>Output:</strong> false
<strong>Explanation:</strong> The binary code "00" is of length 2 and does not exist in the array.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 5 * 10<sup>5</sup></code></li>
	<li><code>s[i]</code> is either <code>'0'</code> or <code>'1'</code>.</li>
	<li><code>1 &lt;= k &lt;= 20</code></li>
</ul>
