<h1>
  <a href="https://leetcode.com/problems/path-crossing/">
    1496. Path Crossing
  </a>
</h1>

<img src="https://img.shields.io/badge/Difficulty-Easy-greenlight" alt="Difficulty: Easy" />
<img src="https://img.shields.io/badge/Topics-Mid%20Level%2C%20Hash%20Table%2C%20String%2C%20Weekly%20Contest%20195-blue" alt="Topics: Mid Level, Hash Table, String, Weekly Contest 195" />

<hr />

<p>Given a string <code>path</code>, where <code>path[i] = 'N'</code>, <code>'S'</code>, <code>'E'</code> or <code>'W'</code>, each representing moving one unit north, south, east, or west, respectively. You start at the origin <code>(0, 0)</code> on a 2D plane and walk on the path specified by <code>path</code>.</p>

<p>Return <code>true</code> <em>if the path crosses itself at any point, that is, if at any time you are on a location you have previously visited</em>. Return <code>false</code> otherwise.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/06/10/screen-shot-2020-06-10-at-123929-pm.png" style="width: 400px; height: 358px;">
<pre><strong>Input:</strong> path = "NES"
<strong>Output:</strong> false 
<strong>Explanation:</strong> Notice that the path doesn't cross any point more than once.
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/06/10/screen-shot-2020-06-10-at-123843-pm.png" style="width: 400px; height: 339px;">
<pre><strong>Input:</strong> path = "NESWW"
<strong>Output:</strong> true
<strong>Explanation:</strong> Notice that the path visits the origin twice.</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= path.length &lt;= 10<sup>4</sup></code></li>
	<li><code>path[i]</code> is either <code>'N'</code>, <code>'S'</code>, <code>'E'</code>, or <code>'W'</code>.</li>
</ul>
