<h1>
  <a href="https://leetcode.com/problems/day-of-the-year/">
    1154. Day of the Year
  </a>
</h1>
<img src='https://img.shields.io/badge/Difficulty-Easy-greenlight' alt='Difficulty: Easy' />
<img src='https://img.shields.io/badge/Topics-Math%2C%20String%2C%20Weekly%20Contest%20149-blue' alt='Topics: Math, String, Weekly Contest 149' />

<hr />

<p>Given a string <code>date</code> representing a <a href="https://en.wikipedia.org/wiki/Gregorian_calendar" target="_blank">Gregorian calendar</a> date formatted as <code>YYYY-MM-DD</code>, return <em>the day number of the year</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre><strong>Input:</strong> date = "2019-01-09"
<strong>Output:</strong> 9
<strong>Explanation:</strong> Given date is the 9th day of the year in 2019.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre><strong>Input:</strong> date = "2019-02-10"
<strong>Output:</strong> 41
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>date.length == 10</code></li>
	<li><code>date[4] == date[7] == '-'</code>, and all other <code>date[i]</code>'s are digits</li>
	<li><code>date</code> represents a calendar date between Jan 1<sup>st</sup>, 1900 and Dec 31<sup>st</sup>, 2019.</li>
</ul>
