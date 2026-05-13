<h1>
  <a href="https://leetcode.com/problems/find-valid-pair-of-adjacent-digits-in-string/">
    3438. Find Valid Pair of Adjacent Digits in String
  </a>
</h1>

<img src="https://img.shields.io/badge/Difficulty-Easy-greenlight" alt="Difficulty: Easy" />
<img src="https://img.shields.io/badge/Topics-Mid%20Level%2C%20Hash%20Table%2C%20String%2C%20Counting%2C%20Biweekly%20Contest%20149-blue" alt="Topics: Mid Level, Hash Table, String, Counting, Biweekly Contest 149" />

<hr />

<p>You are given a string <code>s</code> consisting only of digits. A <strong>valid pair</strong> is defined as two <strong>adjacent</strong> digits in <code>s</code> such that:</p>

<ul>
	<li>The first digit is <strong>not equal</strong> to the second.</li>
	<li>Each digit in the pair appears in <code>s</code> <strong>exactly</strong> as many times as its numeric value.</li>
</ul>

<p>Return the first <strong>valid pair</strong> found in the string <code>s</code> when traversing from left to right. If no valid pair exists, return an empty string.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">s = "2523533"</span></p>

<p><strong>Output:</strong> <span class="example-io">"23"</span></p>

<p><strong>Explanation:</strong></p>

<p>Digit <code>'2'</code> appears 2 times and digit <code>'3'</code> appears 3 times. Each digit in the pair <code>"23"</code> appears in <code>s</code> exactly as many times as its numeric value. Hence, the output is <code>"23"</code>.</p>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">s = "221"</span></p>

<p><strong>Output:</strong> <span class="example-io">"21"</span></p>

<p><strong>Explanation:</strong></p>

<p>Digit <code>'2'</code> appears 2 times and digit <code>'1'</code> appears 1 time. Hence, the output is <code>"21"</code>.</p>
</div>

<p><strong class="example">Example 3:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">s = "22"</span></p>

<p><strong>Output:</strong> <span class="example-io">""</span></p>

<p><strong>Explanation:</strong></p>

<p>There are no valid adjacent pairs.</p>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>2 &lt;= s.length &lt;= 100</code></li>
	<li><code>s</code> only consists of digits from <code>'1'</code> to <code>'9'</code>.</li>
</ul>
