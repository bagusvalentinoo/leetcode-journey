<h1>
  <a href="https://leetcode.com/problems/longest-string-chain/">
    1048. Longest String Chain
  </a>
</h1>
<img src='https://img.shields.io/badge/Difficulty-Medium-orange' alt='Difficulty: Medium' />
<img src='https://img.shields.io/badge/Topics-Array%2C%20Hash%20Table%2C%20Two%20Pointers%2C%20String%2C%20Dynamic%20Programming%2C%20Sorting%2C%20Weekly%20Contest%20137-blue' alt='Topics: Array, Hash Table, Two Pointers, String, Dynamic Programming, Sorting, Weekly Contest 137' />

<hr />

<p>You are given an array of <code>words</code> where each word consists of lowercase English letters.</p>

<p><code>word<sub>A</sub></code> is a <strong>predecessor</strong> of <code>word<sub>B</sub></code> if and only if we can insert <strong>exactly one</strong> letter anywhere in <code>word<sub>A</sub></code> <strong>without changing the order of the other characters</strong> to make it equal to <code>word<sub>B</sub></code>.</p>

<ul>
	<li>For example, <code>"abc"</code> is a <strong>predecessor</strong> of <code>"ab<u>a</u>c"</code>, while <code>"cba"</code> is not a <strong>predecessor</strong> of <code>"bcad"</code>.</li>
</ul>

<p>A <strong>word chain</strong><em> </em>is a sequence of words <code>[word<sub>1</sub>, word<sub>2</sub>, ..., word<sub>k</sub>]</code> with <code>k &gt;= 1</code>, where <code>word<sub>1</sub></code> is a <strong>predecessor</strong> of <code>word<sub>2</sub></code>, <code>word<sub>2</sub></code> is a <strong>predecessor</strong> of <code>word<sub>3</sub></code>, and so on. A single word is trivially a <strong>word chain</strong> with <code>k == 1</code>.</p>

<p>Return <em>the <strong>length</strong> of the <strong>longest possible word chain</strong> with words chosen from the given list of </em><code>words</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre><strong>Input:</strong> words = ["a","b","ba","bca","bda","bdca"]
<strong>Output:</strong> 4
<strong>Explanation</strong>: One of the longest word chains is ["a","<u>b</u>a","b<u>d</u>a","bd<u>c</u>a"].
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre><strong>Input:</strong> words = ["xbc","pcxbcf","xb","cxbc","pcxbc"]
<strong>Output:</strong> 5
<strong>Explanation:</strong> All the words can be put in a word chain ["xb", "xb<u>c</u>", "<u>c</u>xbc", "<u>p</u>cxbc", "pcxbc<u>f</u>"].
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre><strong>Input:</strong> words = ["abcd","dbqca"]
<strong>Output:</strong> 1
<strong>Explanation:</strong> The trivial word chain ["abcd"] is one of the longest word chains.
["abcd","dbqca"] is not a valid word chain because the ordering of the letters is changed.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= words.length &lt;= 1000</code></li>
	<li><code>1 &lt;= words[i].length &lt;= 16</code></li>
	<li><code>words[i]</code> only consists of lowercase English letters.</li>
</ul>
