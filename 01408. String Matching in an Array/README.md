<h1>
  <a href="https://leetcode.com/problems/string-matching-in-an-array/">
    1408. String Matching in an Array
  </a>
</h1>

<img src="https://img.shields.io/badge/Difficulty-Easy-greenlight" alt="Difficulty: Easy" />
<img src="https://img.shields.io/badge/Topics-Mid%20Level%2C%20Array%2C%20String%2C%20String%20Matching%2C%20Weekly%20Contest%20184-blue" alt="Topics: Mid Level, Array, String, String Matching, Weekly Contest 184" />

<hr />

<p>Given an array of string <code>words</code>, return all strings in<em> </em><code>words</code><em> </em>that are a <span data-keyword="substring-nonempty" class=" cursor-pointer relative text-dark-blue-s text-sm"><button type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-_r_6k_" data-state="closed" class="">substring</button></span> of another word. You can return the answer in <strong>any order</strong>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre><strong>Input:</strong> words = ["mass","as","hero","superhero"]
<strong>Output:</strong> ["as","hero"]
<strong>Explanation:</strong> "as" is substring of "mass" and "hero" is substring of "superhero".
["hero","as"] is also a valid answer.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre><strong>Input:</strong> words = ["leetcode","et","code"]
<strong>Output:</strong> ["et","code"]
<strong>Explanation:</strong> "et", "code" are substring of "leetcode".
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre><strong>Input:</strong> words = ["blue","green","bu"]
<strong>Output:</strong> []
<strong>Explanation:</strong> No string of words is substring of another string.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= words.length &lt;= 100</code></li>
	<li><code>1 &lt;= words[i].length &lt;= 30</code></li>
	<li><code>words[i]</code> contains only lowercase English letters.</li>
	<li>All the strings of <code>words</code> are <strong>unique</strong>.</li>
</ul>
