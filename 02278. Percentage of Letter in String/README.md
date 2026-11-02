<h1>
  <a href="https://leetcode.com/problems/percentage-of-letter-in-string/"> 2278. Percentage of Letter in String </a>
</h1>
<img src="https://img.shields.io/badge/Difficulty-Easy-greenlight" alt="Difficulty: Easy" />
<img src="https://img.shields.io/badge/Topics-Mid%20Level%2C%20String%2C%20Weekly%20Contest%20293-blue" alt="Topics: Mid Level, String, Weekly Contest 293" />

<hr />

<p>Given a string <code>s</code> and a character <code>letter</code>, return<em> the percentage of characters in </em><code>s</code><em> that equal </em><code>letter</code><em> <strong>rounded down</strong> to the nearest whole percent.</em></p>

<p>&nbsp;</p>

<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = "foobar", letter = "o"
<strong>Output:</strong> 33
<strong>Explanation:</strong>
The percentage of characters in s that equal the letter 'o' is 2 / 6 * 100% = 33% when rounded down, so we return 33.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s = "jjjj", letter = "k"
<strong>Output:</strong> 0
<strong>Explanation:</strong>
The percentage of characters in s that equal the letter 'k' is 0 / 4 * 100% = 0%, so we return 0.
</pre>

<p>&nbsp;</p>

<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 100</code></li>
	<li><code>s</code> consists of lowercase English letters.</li>
	<li><code>letter</code> is a lowercase English letter.</li>
</ul>
