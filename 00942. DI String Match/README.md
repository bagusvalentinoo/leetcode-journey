<h1>
  <a href="https://leetcode.com/problems/di-string-match/">
    942. DI String Match
  </a>
</h1>
<img src='https://img.shields.io/badge/Difficulty-Easy-greenlight' alt='Difficulty: Easy' />
<img src='https://img.shields.io/badge/Topics-Array%2C%20Two%20Pointers%2C%20String%2C%20Greedy-blue' alt='Topics: Array, Two Pointers, String, Greedy' />

<hr />

<p>A permutation <code>perm</code> of <code>n + 1</code> integers of all the integers in the range <code>[0, n]</code> can be represented as a string <code>s</code> of length <code>n</code> where:</p>

<ul>
	<li><code>s[i] == 'I'</code> if <code>perm[i] &lt; perm[i + 1]</code>, and</li>
	<li><code>s[i] == 'D'</code> if <code>perm[i] &gt; perm[i + 1]</code>.</li>
</ul>

<p>Given a string <code>s</code>, reconstruct the permutation <code>perm</code> and return it. If there are multiple valid permutations perm, return <strong>any of them</strong>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<pre><strong>Input:</strong> s = "IDID"
<strong>Output:</strong> [0,4,1,3,2]
</pre><p><strong class="example">Example 2:</strong></p>
<pre><strong>Input:</strong> s = "III"
<strong>Output:</strong> [0,1,2,3]
</pre><p><strong class="example">Example 3:</strong></p>
<pre><strong>Input:</strong> s = "DDI"
<strong>Output:</strong> [3,2,0,1]
</pre>
<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 10<sup>5</sup></code></li>
	<li><code>s[i]</code> is either <code>'I'</code> or <code>'D'</code>.</li>
</ul>
