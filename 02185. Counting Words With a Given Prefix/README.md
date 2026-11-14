<h1>
  <a href="https://leetcode.com/problems/counting-words-with-a-given-prefix/"> 2185. Counting Words With a Given Prefix </a>
</h1>
<img src="https://img.shields.io/badge/Difficulty-Easy-greenlight" alt="Difficulty: Easy" />
<img src="https://img.shields.io/badge/Topics-Mid%20Level%2C%20Array%2C%20String%2C%20String%20Matching%2C%20Weekly%20Contest%20282-blue" alt="Topics: Mid Level, Array, String, String Matching, Weekly Contest 282" />

<hr />

<p>You are given an array of strings <code>words</code> and a string <code>pref</code>.</p>

<p>Return <em>the number of strings in </em><code>words</code><em> that contain </em><code>pref</code><em> as a <strong>prefix</strong></em>.</p>

<p>A <strong>prefix</strong> of a string <code>s</code> is any leading contiguous substring of <code>s</code>.</p>

<p>&nbsp;</p>

<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> words = ["pay","<strong><u>at</u></strong>tention","practice","<u><strong>at</strong></u>tend"], <code>pref </code>= "at"
<strong>Output:</strong> 2
<strong>Explanation:</strong> The 2 strings that contain "at" as a prefix are: "<u><strong>at</strong></u>tention" and "<u><strong>at</strong></u>tend".
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> words = ["leetcode","win","loops","success"], <code>pref </code>= "code"
<strong>Output:</strong> 0
<strong>Explanation:</strong> There are no strings that contain "code" as a prefix.
</pre>

<p>&nbsp;</p>

<p><strong>Constraints:</strong></p>

<ul>
  <li><code>1 &lt;= words.length &lt;= 100</code></li>
  <li><code>1 &lt;= words[i].length, pref.length &lt;= 100</code></li>
  <li><code>words[i]</code> and <code>pref</code> consist of lowercase English letters.</li>
</ul>
