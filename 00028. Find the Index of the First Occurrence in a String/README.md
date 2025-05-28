<h1>
  <a href="https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/">
    28. Find the Index of the First Occurrence in a String
  </a>
</h1>
<img src='https://img.shields.io/badge/Difficulty-Easy-greenlight' alt='Difficulty: Easy' />
<img src='https://img.shields.io/badge/Topics-Two%20Pointers%2C%20String%2C%20String%20Matching-blue' alt='Topics: Two Pointers, String, String Matching' />

<hr />

<p>Given two strings <code>needle</code> and <code>haystack</code>, return the index of the first occurrence of <code>needle</code> in <code>haystack</code>, or <code>-1</code> if <code>needle</code> is not part of <code>haystack</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre><strong>Input:</strong> haystack = "sadbutsad", needle = "sad"
<strong>Output:</strong> 0
<strong>Explanation:</strong> "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre><strong>Input:</strong> haystack = "leetcode", needle = "leeto"
<strong>Output:</strong> -1
<strong>Explanation:</strong> "leeto" did not occur in "leetcode", so we return -1.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= haystack.length, needle.length &lt;= 10<sup>4</sup></code></li>
	<li><code>haystack</code> and <code>needle</code> consist of only lowercase English characters.</li>
</ul>
