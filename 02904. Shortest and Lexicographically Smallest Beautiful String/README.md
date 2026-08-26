<h1>
  <a href="https://leetcode.com/problems/shortest-and-lexicographically-smallest-beautiful-string/">
    2904. Shortest and Lexicographically Smallest Beautiful String
  </a>
</h1>

<img src="https://img.shields.io/badge/Difficulty-Medium-orange" alt="Difficulty: Medium" />
<img src="https://img.shields.io/badge/Topics-Senior%2C%20String%2C%20Sliding%20Window%2C%20Weekly%20Contest%20367-blue" alt="Topics: Senior, String, Sliding Window, Weekly Contest 367" />

<hr />

<p>You are given a binary string <code>s</code> and a positive integer <code>k</code>.</p>

<p>A substring of <code>s</code> is <strong>beautiful</strong> if the number of <code>1</code>'s in it is exactly <code>k</code>.</p>

<p>Let <code>len</code> be the length of the <strong>shortest</strong> beautiful substring.</p>

<p>Return <em>the lexicographically <strong>smallest</strong> beautiful substring of string</em> <code>s</code> <em>with length equal to</em> <code>len</code>. If <code>s</code> doesn't contain a beautiful substring, return <em>an <strong>empty</strong> string</em>.</p>

<p>A string <code>a</code> is lexicographically <strong>larger</strong> than a string <code>b</code> (of the same length) if in the first position where <code>a</code> and <code>b</code> differ, <code>a</code> has a character strictly larger than the corresponding character in <code>b</code>.</p>

<ul>
	<li>For example, <code>"abcd"</code> is lexicographically larger than <code>"abcc"</code> because the first position they differ is at the fourth character, and <code>d</code> is greater than <code>c</code>.</li>
</ul>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">s = "100011001", k = 3</span></p>

<p><strong>Output:</strong> <span class="example-io">"11001"</span></p>

<p><strong>Explanation:</strong></p>

<ul>
	<li>There are 7 beautiful substrings in this example.</li>
	<li>The substring <code>"100011001"</code> has <code>4</code> ones, which is not exactly <code>3</code>.</li>
	<li>The substring <code>"11001"</code> has exactly <code>3</code> ones and length <code>5</code>.</li>
</ul>

<p>The length of the shortest beautiful substring is <code>5</code>.</p>
<p>The lexicographically smallest beautiful substring with length <code>5</code> is the substring <code>"11001"</code>.</p>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">s = "1011", k = 2</span></p>

<p><strong>Output:</strong> <span class="example-io">"11"</span></p>

<p><strong>Explanation:</strong></p>

<ul>
	<li>The substring <code>"11"</code> has exactly <code>2</code> ones and length <code>2</code>.</li>
</ul>

<p>The length of the shortest beautiful substring is <code>2</code>.</p>
<p>The lexicographically smallest beautiful substring with length <code>2</code> is the substring <code>"11"</code>.</p>
</div>

<p><strong class="example">Example 3:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">s = "000", k = 1</span></p>

<p><strong>Output:</strong> <span class="example-io">""</span></p>

<p><strong>Explanation:</strong></p>

<ul>
	<li>There are no beautiful substrings in this example.</li>
</ul>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 100</code></li>
	<li><code>1 &lt;= k &lt;= s.length</code></li>
</ul>
