<h1>
  <a href="https://leetcode.com/problems/process-string-with-special-operations-i/">
    3612. Process String with Special Operations I
  </a>
</h1>

<img src="https://img.shields.io/badge/Difficulty-Medium-orange" alt="Difficulty: Medium" />
<img src="https://img.shields.io/badge/Topics-Senior%2C%20String%2C%20Simulation%2C%20Weekly%20Contest%20458-blue" alt="Topics: Senior, String, Simulation, Weekly Contest 458" />

<hr />

<p>You are given a string <code>s</code> consisting of lowercase English letters and the special characters: <code>*</code>, <code>#</code>, and <code>%</code>.</p>

<p>Build a new string <code>result</code> by processing <code>s</code> according to the following rules from left to right:</p>

<ul>
	<li>If the letter is a <strong>lowercase</strong> English letter append it to <code>result</code>.</li>
	<li>A <code>'*'</code> <strong>removes</strong> the last character from <code>result</code>, if it exists.</li>
	<li>A <code>'#'</code> <strong>duplicates</strong> the current <code>result</code> and <strong>appends</strong> it to itself.</li>
	<li>A <code>'%'</code> <strong>reverses</strong> the current <code>result</code>.</li>
</ul>

<p>Return the final string <code>result</code> after processing all characters in <code>s</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">s = "a#b%*"</span></p>

<p><strong>Output:</strong> <span class="example-io">"ba"</span></p>

<p><strong>Explanation:</strong></p>

<table style="border: 1px solid black;"><thead><tr><th style="border: 1px solid black;"><code>i</code></th><th style="border: 1px solid black;"><code>s[i]</code></th><th style="border: 1px solid black;">Operation</th><th style="border: 1px solid black;">Current <code>result</code></th></tr></thead><tbody><tr><td style="border: 1px solid black;">0</td><td style="border: 1px solid black;"><code>'a'</code></td><td style="border: 1px solid black;">Append <code>'a'</code></td><td style="border: 1px solid black;"><code>"a"</code></td></tr><tr><td style="border: 1px solid black;">1</td><td style="border: 1px solid black;"><code>'#'</code></td><td style="border: 1px solid black;">Duplicate <code>result</code></td><td style="border: 1px solid black;"><code>"aa"</code></td></tr><tr><td style="border: 1px solid black;">2</td><td style="border: 1px solid black;"><code>'b'</code></td><td style="border: 1px solid black;">Append <code>'b'</code></td><td style="border: 1px solid black;"><code>"aab"</code></td></tr><tr><td style="border: 1px solid black;">3</td><td style="border: 1px solid black;"><code>'%'</code></td><td style="border: 1px solid black;">Reverse <code>result</code></td><td style="border: 1px solid black;"><code>"baa"</code></td></tr><tr><td style="border: 1px solid black;">4</td><td style="border: 1px solid black;"><code>'*'</code></td><td style="border: 1px solid black;">Remove the last character</td><td style="border: 1px solid black;"><code>"ba"</code></td></tr></tbody></table>

<p>Thus, the final <code>result</code> is <code>"ba"</code>.</p>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">s = "z*#"</span></p>

<p><strong>Output:</strong> <span class="example-io">""</span></p>

<p><strong>Explanation:</strong></p>

<table style="border: 1px solid black;"><thead><tr><th style="border: 1px solid black;"><code>i</code></th><th style="border: 1px solid black;"><code>s[i]</code></th><th style="border: 1px solid black;">Operation</th><th style="border: 1px solid black;">Current <code>result</code></th></tr></thead><tbody><tr><td style="border: 1px solid black;">0</td><td style="border: 1px solid black;"><code>'z'</code></td><td style="border: 1px solid black;">Append <code>'z'</code></td><td style="border: 1px solid black;"><code>"z"</code></td></tr><tr><td style="border: 1px solid black;">1</td><td style="border: 1px solid black;"><code>'*'</code></td><td style="border: 1px solid black;">Remove the last character</td><td style="border: 1px solid black;"><code>""</code></td></tr><tr><td style="border: 1px solid black;">2</td><td style="border: 1px solid black;"><code>'#'</code></td><td style="border: 1px solid black;">Duplicate the string</td><td style="border: 1px solid black;"><code>""</code></td></tr></tbody></table>

<p>Thus, the final <code>result</code> is <code>""</code>.</p>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 20</code></li>
	<li><code>s</code> consists of only lowercase English letters and special characters <code>*</code>, <code>#</code>, and <code>%</code>.</li>
</ul>
