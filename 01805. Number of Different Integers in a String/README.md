<h1>
  <a href="https://leetcode.com/problems/number-of-different-integers-in-a-string/"> 1805. Number of Different Integers in a String </a>
</h1>
<img src="https://img.shields.io/badge/Difficulty-Easy-greenlight" alt="Difficulty: Easy" />
<img src="https://img.shields.io/badge/Topics-Mid%20Level%2C%20Hash%20Table%2C%20String%2C%20Weekly%20Contest%20234-blue" alt="Topics: Mid Level, Hash Table, String, Weekly Contest 234" />

<hr />

<p>You are given a string <code>word</code> that consists of digits and lowercase English letters.</p>

<p>You will replace every non-digit character with a space. For example, <code>"a123bc34d8ef34"</code> will become <code>" 123&nbsp; 34 8&nbsp; 34"</code>. Notice that you are left with some integers that are separated by at least one space: <code>"123"</code>, <code>"34"</code>, <code>"8"</code>, and <code>"34"</code>.</p>

<p>Return <em>the number of <strong>different</strong> integers after performing the replacement operations on </em><code>word</code>.</p>

<p>Two integers are considered different if their decimal representations <strong>without any leading zeros</strong> are different.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> word = "a<u>123</u>bc<u>34</u>d<u>8</u>ef<u>34</u>"
<strong>Output:</strong> 3
<strong>Explanation: </strong>The three different integers are "123", "34", and "8". Notice that "34" is only counted once.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> word = "leet<u>1234</u>code<u>234</u>"
<strong>Output:</strong> 2
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> word = "a<u>1</u>b<u>01</u>c<u>001</u>"
<strong>Output:</strong> 1
<strong>Explanation: </strong>The three integers "1", "01", and "001" all represent the same integer because
the leading zeros are ignored when comparing their decimal values.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= word.length &lt;= 1000</code></li>
	<li><code>word</code> consists of digits and lowercase English letters.</li>
</ul>
