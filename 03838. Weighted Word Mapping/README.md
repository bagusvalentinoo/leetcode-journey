<h1>
  <a href="https://leetcode.com/problems/weighted-word-mapping/">
    3838. Weighted Word Mapping
  </a>
</h1>

<img src="https://img.shields.io/badge/Difficulty-Easy-greenlight" alt="Difficulty: Easy" />
<img src="https://img.shields.io/badge/Topics-Mid%20Level%2C%20Array%2C%20String%2C%20Simulation%2C%20Biweekly%20Contest%20176-blue" alt="Topics: Mid Level, Array, String, Simulation, Biweekly Contest 176" />

<hr />

<p>You are given an array of strings <code>words</code>, where each string represents a word containing lowercase English letters.</p>

<p>You are also given an integer array <code>weights</code> of length 26, where <code>weights[i]</code> represents the weight of the <code>i<sup>th</sup></code> lowercase English letter.</p>

<p>The <strong>weight</strong> of a word is defined as the <strong>sum</strong> of the weights of its characters.</p>

<p>For each word, take its weight modulo 26 and map the result to a lowercase English letter using reverse alphabetical order (<code>0 -&gt; 'z', 1 -&gt; 'y', ..., 25 -&gt; 'a'</code>).</p>

<p>Return a string formed by concatenating the mapped characters for all words in order.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">words = ["abcd","def","xyz"], weights = [5,3,12,14,1,2,3,2,10,6,6,9,7,8,7,10,8,9,6,9,9,8,3,7,7,2]</span></p>

<p><strong>Output:</strong> <span class="example-io">"rij"</span></p>

<p><strong>Explanation:</strong></p>

<ul>
	<li>The weight of <code>"abcd"</code> is <code>5 + 3 + 12 + 14 = 34</code>. The result modulo 26 is <code>34 % 26 = 8</code>, which maps to <code>'r'</code>.</li>
	<li>The weight of <code>"def"</code> is <code>14 + 1 + 2 = 17</code>. The result modulo 26 is <code>17 % 26 = 17</code>, which maps to <code>'i'</code>.</li>
	<li>The weight of <code>"xyz"</code> is <code>7 + 7 + 2 = 16</code>. The result modulo 26 is <code>16 % 26 = 16</code>, which maps to <code>'j'</code>.</li>
</ul>

<p>Thus, the string formed by concatenating the mapped characters is <code>"rij"</code>.</p>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">words = ["a","b","c"], weights = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]</span></p>

<p><strong>Output:</strong> <span class="example-io">"yyy"</span></p>

<p><strong>Explanation:</strong></p>

<p>Each word has weight 1. The result modulo 26 is <code>1 % 26 = 1</code>, which maps to <code>'y'</code>.</p>

<p>Thus, the string formed by concatenating the mapped characters is <code>"yyy"</code>.</p>
</div>

<p><strong class="example">Example 3:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">words = ["abcd"], weights = [7,5,3,4,3,5,4,9,4,2,2,7,10,2,5,10,6,1,2,2,4,1,3,4,4,5]</span></p>

<p><strong>Output:</strong> <span class="example-io">"g"</span></p>

<p><strong>Explanation:​​​​​​​</strong></p>

<p>The weight of <code>"abcd"</code> is <code>7 + 5 + 3 + 4 = 19</code>. The result modulo 26 is <code>19 % 26 = 19</code>, which maps to <code>'g'</code>.</p>

<p>Thus, the string formed by concatenating the mapped characters is <code>"g"</code>.</p>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= words.length &lt;= 100</code></li>
	<li><code>1 &lt;= words[i].length &lt;= 10</code></li>
	<li><code>weights.length == 26</code></li>
	<li><code>1 &lt;= weights[i] &lt;= 100</code></li>
	<li><code>words[i]</code> consists of lowercase English letters.</li>
</ul>
