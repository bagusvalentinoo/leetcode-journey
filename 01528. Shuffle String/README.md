<h1>
  <a href="https://leetcode.com/problems/shuffle-string/">
    1528. Shuffle String
  </a>
</h1>

<img src="https://img.shields.io/badge/Difficulty-Easy-greenlight" alt="Difficulty: Easy" />
<img src="https://img.shields.io/badge/Topics-Mid%20Level%2C%20Array%2C%20String%2C%20Weekly%20Contest%20199-blue" alt="Topics: Mid Level, Array, String, Weekly Contest 199" />

<hr />

<p>You are given a string <code>s</code> and an integer array <code>indices</code> of the <strong>same length</strong>. The string <code>s</code> will be shuffled such that the character at the <code>i<sup>th</sup></code> position moves to <code>indices[i]</code> in the shuffled string.</p>

<p>Return <em>the shuffled string</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre><strong>Input:</strong> s = &quot;codeleet&quot;, <code>indices</code> = [4,5,6,7,0,2,1,3]
<strong>Output:</strong> &quot;leetcode&quot;
<strong>Explanation:</strong> As shown, &quot;codeleet&quot; becomes &quot;leetcode&quot; after shuffling.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre><strong>Input:</strong> s = &quot;abc&quot;, <code>indices</code> = [0,1,2]
<strong>Output:</strong> &quot;abc&quot;
<strong>Explanation:</strong> After shuffling, each character remains in its position.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>s.length == indices.length == n</code></li>
	<li><code>1 &lt;= n &lt;= 100</code></li>
	<li><code>s</code> consists of only lowercase English letters.</li>
	<li><code>0 &lt;= indices[i] &lt; n</code></li>
	<li>All values of <code>indices</code> are <strong>unique</strong>.</li>
</ul>
