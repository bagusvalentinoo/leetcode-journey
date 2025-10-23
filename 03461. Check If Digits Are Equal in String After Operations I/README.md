<h1>
  <a href="https://leetcode.com/problems/check-if-digits-are-equal-in-string-after-operations-i/">
    3461. Check If Digits Are Equal in String After Operations I
  </a>
</h1>
<img src='https://img.shields.io/badge/Difficulty-Easy-greenlight' alt='Difficulty: Easy' />
<img src='https://img.shields.io/badge/Topics-Math%2C%20String%2C%20Simulation%2C%20Combinatorics%2C%20Number%20Theory%2C%20Weekly%20Contest%20438-blue' alt='Topics: Math, String, Simulation, Combinatorics, Number Theory, Weekly Contest 438' />

<hr />

<p>You are given a string <code>s</code> consisting of digits. Perform the following operation repeatedly until the string has <strong>exactly</strong> two digits:</p>

<ul>
	<li>For each pair of consecutive digits in <code>s</code>, starting from the first digit, calculate a new digit as the sum of the two digits <strong>modulo</strong> 10.</li>
	<li>Replace <code>s</code> with the sequence of newly calculated digits, <em>maintaining the order</em> in which they are computed.</li>
</ul>

<p>Return <code>true</code> if the final two digits in <code>s</code> are the <strong>same</strong>; otherwise, return <code>false</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">s = "3902"</span></p>

<p><strong>Output:</strong> <span class="example-io">true</span></p>

<p><strong>Explanation:</strong></p>

<ul>
	<li>Initially, <code>s = "3902"</code></li>
	<li>First operation:
	<ul>
		<li><code>(s[0] + s[1]) % 10 = (3 + 9) % 10 = 2</code></li>
		<li><code>(s[1] + s[2]) % 10 = (9 + 0) % 10 = 9</code></li>
		<li><code>(s[2] + s[3]) % 10 = (0 + 2) % 10 = 2</code></li>
		<li><code>s</code> becomes <code>"292"</code></li>
	</ul>
	</li>
	<li>Second operation:
	<ul>
		<li><code>(s[0] + s[1]) % 10 = (2 + 9) % 10 = 1</code></li>
		<li><code>(s[1] + s[2]) % 10 = (9 + 2) % 10 = 1</code></li>
		<li><code>s</code> becomes <code>"11"</code></li>
	</ul>
	</li>
	<li>Since the digits in <code>"11"</code> are the same, the output is <code>true</code>.</li>
</ul>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">s = "34789"</span></p>

<p><strong>Output:</strong> <span class="example-io">false</span></p>

<p><strong>Explanation:</strong></p>

<ul>
	<li>Initially, <code>s = "34789"</code>.</li>
	<li>After the first operation, <code>s = "7157"</code>.</li>
	<li>After the second operation, <code>s = "862"</code>.</li>
	<li>After the third operation, <code>s = "48"</code>.</li>
	<li>Since <code>'4' != '8'</code>, the output is <code>false</code>.</li>
</ul>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>3 &lt;= s.length &lt;= 100</code></li>
	<li><code>s</code> consists of only digits.</li>
</ul>
