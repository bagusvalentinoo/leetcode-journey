<h1>
  <a href="https://leetcode.com/problems/count-commas-in-range-ii/"> 3871. Count Commas in Range II </a>
</h1>
<img src="https://img.shields.io/badge/Difficulty-Medium-orange" alt="Difficulty: Medium" />
<img src="https://img.shields.io/badge/Topics-Math-blue" alt="Topics: Math" />

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

<pre>
<strong>Input:</strong> n = 1002
<strong>Output:</strong> 3
<strong>Explanation:</strong> The numbers <code>"1,000"</code>, <code>"1,001"</code>, and <code>"1,002"</code> each contain one comma, giving a total of 3.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> n = 998
<strong>Output:</strong> 0
<strong>Explanation:</strong> All numbers from 1 to 998 have fewer than four digits. Therefore, no commas are used.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 10<sup>15</sup></code></li>
</ul>
