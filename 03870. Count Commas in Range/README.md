<h1>
  <a href="https://leetcode.com/problems/count-commas-in-range/">
    3870. Count Commas in Range
  </a>
</h1>

<img src="https://img.shields.io/badge/Difficulty-Easy-greenlight" alt="Difficulty: Easy" />
<img src="https://img.shields.io/badge/Topics-Mid%20Level%20Math%20Weekly%20Contest%20493-blue" alt="Topics: Mid Level, Math, Weekly Contest 493" />

<hr />

<p>You are given an integer <code>n</code>.</p>

<p>Return the <strong>total</strong> number of commas used when writing all integers from <code>[1, n]</code> (inclusive) in <strong>standard</strong> number formatting.</p>

<p>In <strong>standard</strong> formatting:</p>

<ul>
	<li>A comma is inserted after <strong>every three</strong> digits from the right.</li>
	<li>Numbers with <strong>fewer</strong> than 4 digits contain no commas.</li>
</ul>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">n = 1002</span></p>

<p><strong>Output:</strong> <span class="example-io">3</span></p>

<p><strong>Explanation:</strong></p>

<p>The numbers <code>"1,000"</code>, <code>"1,001"</code>, and <code>"1,002"</code> each contain one comma, giving a total of 3.</p>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">n = 998</span></p>

<p><strong>Output:</strong> <span class="example-io">0</span></p>

<p><strong>Explanation:</strong></p>

<p>All numbers from 1 to 998 have fewer than four digits. Therefore, no commas are used.</p>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 10<sup>5</sup></code></li>
</ul>
