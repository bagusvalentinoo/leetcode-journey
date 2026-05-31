<h1>
  <a href="https://leetcode.com/problems/increasing-decreasing-string/">
    1370. Increasing Decreasing String
  </a>
</h1>

<img src="https://img.shields.io/badge/Difficulty-Easy-greenlight" alt="Difficulty: Easy" />
<img src="https://img.shields.io/badge/Topics-Senior%2C%20Hash%20Table%2C%20String%2C%20Counting%2C%20Biweekly%20Contest%2021-blue" alt="Topics: Senior, Hash Table, String, Counting, Biweekly Contest 21" />

<hr />

<p>You are given a string <code>s</code>. Reorder the string using the following algorithm:</p>

<ol>
	<li>Remove the <strong>smallest</strong> character from <code>s</code> and <strong>append</strong> it to the result.</li>
	<li>Remove the <strong>smallest</strong> character from <code>s</code> that is greater than the last appended character, and <strong>append</strong> it to the result.</li>
	<li>Repeat step 2 until no more characters can be removed.</li>
	<li>Remove the <strong>largest</strong> character from <code>s</code> and <strong>append</strong> it to the result.</li>
	<li>Remove the <strong>largest</strong> character from <code>s</code> that is smaller than the last appended character, and <strong>append</strong> it to the result.</li>
	<li>Repeat step 5 until no more characters can be removed.</li>
	<li>Repeat steps 1 through 6 until all characters from <code>s</code> have been removed.</li>
</ol>

<p>If the smallest or largest character appears more than once, you may choose any occurrence to append to the result.</p>

<p>Return the resulting string after reordering <code>s</code> using this algorithm.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre><strong>Input:</strong> s = "aaaabbbbcccc"
<strong>Output:</strong> "abccbaabccba"
<strong>Explanation:</strong> After steps 1, 2 and 3 of the first iteration, result = "abc"
After steps 4, 5 and 6 of the first iteration, result = "abccba"
First iteration is done. Now s = "aabbcc" and we go back to step 1
After steps 1, 2 and 3 of the second iteration, result = "abccbaabc"
After steps 4, 5 and 6 of the second iteration, result = "abccbaabccba"
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre><strong>Input:</strong> s = "rat"
<strong>Output:</strong> "art"
<strong>Explanation:</strong> The word "rat" becomes "art" after re-ordering it with the mentioned algorithm.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 500</code></li>
	<li><code>s</code> consists of only lowercase English letters.</li>
</ul>
