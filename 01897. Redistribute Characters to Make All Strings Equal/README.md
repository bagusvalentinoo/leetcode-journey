<h1>
  <a href="https://leetcode.com/problems/redistribute-characters-to-make-all-strings-equal/"> 1897. Redistribute Characters to Make All Strings Equal </a>
</h1>
<img src="https://img.shields.io/badge/Difficulty-Easy-greenlight" alt="Difficulty: Easy" />
<img src="https://img.shields.io/badge/Topics-Mid%20Level%2C%20Hash%20Table%2C%20String%2C%20Counting%2C%20Weekly%20Contest%20245-blue" alt="Topics: Mid Level, Hash Table, String, Counting, Weekly Contest 245" />

<hr />

<p>You are given an array of strings <code>words</code> (<strong>0-indexed</strong>).</p>

<p>In one operation, pick two <strong>distinct</strong> indices <code>i</code> and <code>j</code>, where <code>words[i]</code> is a non-empty string, and move <strong>any</strong> character from <code>words[i]</code> to <strong>any</strong> position in <code>words[j]</code>.</p>

<p>Return <code>true</code> <em>if you can make<strong> every</strong> string in </em><code>words</code><em> <strong>equal </strong>using <strong>any</strong> number of operations</em>,<em> and </em><code>false</code> <em>otherwise</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> words = [&quot;abc&quot;,&quot;aabc&quot;,&quot;bc&quot;]
<strong>Output:</strong> true
<strong>Explanation:</strong> Move the first &#39;a&#39; in <code>words[1] to the front of words[2],
to make </code><code>words[1]</code> = &quot;abc&quot; and words[2] = &quot;abc&quot;.
All the strings are now equal to &quot;abc&quot;, so return <code>true</code>.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> words = [&quot;ab&quot;,&quot;a&quot;]
<strong>Output:</strong> false
<strong>Explanation:</strong> It is impossible to make all the strings equal using the operation.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= words.length &lt;= 100</code></li>
	<li><code>1 &lt;= words[i].length &lt;= 100</code></li>
	<li><code>words[i]</code> consists of lowercase English letters.</li>
</ul>
