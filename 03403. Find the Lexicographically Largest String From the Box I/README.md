<h1>
  <a href="https://leetcode.com/problems/find-the-lexicographically-largest-string-from-the-box-i/">
    3403. Find the Lexicographically Largest String From the Box I
  </a>
</h1>
<img src='https://img.shields.io/badge/Difficulty-Medium-orange' alt='Difficulty: Medium' />
<img src='https://img.shields.io/badge/Topics-Two%20Pointers%2C%20String%2C%20Enumeration-blue' alt='Topics: Two Pointers, String, Enumeration' />

<hr />

<p>You are given a string <code>word</code>, and an integer <code>numFriends</code>.</p>

<p>Alice is organizing a game for her <code>numFriends</code> friends. There are multiple rounds in the game, where in each round:</p>

<ul>
	<li><code>word</code> is split into <code>numFriends</code> <strong>non-empty</strong> strings, such that no previous round has had the <strong>exact</strong> same split.</li>
	<li>All the split words are put into a box.</li>
</ul>

<p>Find the <span data-keyword="lexicographically-smaller-string" class=" cursor-pointer relative text-dark-blue-s text-sm"><button type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:rs:" data-state="closed" class="">lexicographically largest</button></span> string from the box after all the rounds are finished.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">word = "dbca", numFriends = 2</span></p>

<p><strong>Output:</strong> <span class="example-io">"dbc"</span></p>

<p><strong>Explanation:</strong>&nbsp;</p>

<p>All possible splits are:</p>

<ul>
	<li><code>"d"</code> and <code>"bca"</code>.</li>
	<li><code>"db"</code> and <code>"ca"</code>.</li>
	<li><code>"dbc"</code> and <code>"a"</code>.</li>
</ul>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">word = "gggg", numFriends = 4</span></p>

<p><strong>Output:</strong> <span class="example-io">"g"</span></p>

<p><strong>Explanation:</strong>&nbsp;</p>

<p>The only possible split is: <code>"g"</code>, <code>"g"</code>, <code>"g"</code>, and <code>"g"</code>.</p>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= word.length &lt;= 5&nbsp;* 10<sup>3</sup></code></li>
	<li><code>word</code> consists only of lowercase English letters.</li>
	<li><code>1 &lt;= numFriends &lt;= word.length</code></li>
</ul>
