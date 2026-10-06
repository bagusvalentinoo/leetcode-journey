<h1>
  <a href="https://leetcode.com/problems/sum-of-digits-of-string-after-convert/"> 1945. Sum of Digits of String After Convert </a>
</h1>
<img src="https://img.shields.io/badge/Difficulty-Easy-greenlight" alt="Difficulty: Easy" />
<img src="https://img.shields.io/badge/Topics-Senior%2C%20String%2C%20Simulation%2C%20Weekly%20Contest%20251-blue" alt="Topics: Senior, String, Simulation, Weekly Contest 251" />

<hr />

<p>You are given a string <code>s</code> consisting of lowercase English letters, and an integer <code>k</code>. Your task is to <em>convert</em> the string into an integer by a special process, and then <em>transform</em> it by summing its digits repeatedly <code>k</code> times. More specifically, perform the following steps:</p>

<ol>
  <li><strong>Convert</strong> <code>s</code> into an integer by replacing each letter with its position in the alphabet (i.e. replace <code>'a'</code> with <code>1</code>, <code>'b'</code> with <code>2</code>, ..., <code>'z'</code> with <code>26</code>).</li>
  <li><strong>Transform</strong> the integer by replacing it with the <strong>sum of its digits</strong>.</li>
  <li>Repeat the <strong>transform</strong> operation (step 2) <code>k</code> <strong>times</strong> in total.</li>
</ol>

<p>For example, if <code>s = "zbax"</code> and <code>k = 2</code>, then the resulting integer would be <code>8</code> by the following operations:</p>

<ol>
  <li><strong>Convert</strong>: <code>"zbax"</code> ➝ <code>"(26)(2)(1)(24)"</code> ➝ <code>"262124"</code> ➝ <code>262124</code></li>
  <li><strong>Transform #1</strong>: <code>262124</code> ➝ <code>2 + 6 + 2 + 1 + 2 + 4</code> ➝ <code>17</code></li>
  <li><strong>Transform #2</strong>: <code>17</code> ➝ <code>1 + 7</code> ➝ <code>8</code></li>
</ol>

<p>Return the <strong>resulting integer</strong> after performing the <strong>operations</strong> described above.</p>

<p>&nbsp;</p>

<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = "iiii", k = 1
<strong>Output:</strong> 36
<strong>Explanation:</strong>
The operations are as follows:
- Convert: "iiii" ➝ "(9)(9)(9)(9)" ➝ "9999" ➝ 9999
- Transform #1: 9999 ➝ 9 + 9 + 9 + 9 ➝ 36
Thus the resulting integer is 36.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s = "leetcode", k = 2
<strong>Output:</strong> 6
<strong>Explanation:</strong>
The operations are as follows:
- Convert: "leetcode" ➝ "(12)(5)(5)(20)(3)(15)(4)(5)" ➝ "12552031545" ➝ 12552031545
- Transform #1: 12552031545 ➝ 1 + 2 + 5 + 5 + 2 + 0 + 3 + 1 + 5 + 4 + 5 ➝ 33
- Transform #2: 33 ➝ 3 + 3 ➝ 6
Thus the resulting integer is 6.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> s = "zbax", k = 2
<strong>Output:</strong> 8
</pre>

<p>&nbsp;</p>

<p><strong>Constraints:</strong></p>

<ul>
  <li><code>1 &lt;= s.length &lt;= 100</code></li>
  <li><code>1 &lt;= k &lt;= 10</code></li>
  <li><code>s</code> consists of lowercase English letters.</li>
</ul>
