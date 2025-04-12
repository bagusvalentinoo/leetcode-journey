<h1>
  <a href="https://leetcode.com/problems/uncommon-words-from-two-sentences/">
    884. Uncommon Words from Two Sentences
  </a>
</h1>
<img src='https://img.shields.io/badge/Difficulty-Easy-greenlight' alt='Difficulty: Easy' />
<img src='https://img.shields.io/badge/Topics-Hash%20Table%2C%20String%2C%20Counting-blue' alt='Topics: Hash Table, String, Counting' />

<hr />

<p>A <strong>sentence</strong> is a string of single-space separated words where each word consists only of lowercase letters.</p>

<p>A word is <strong>uncommon</strong> if it appears exactly once in one of the sentences, and <strong>does not appear</strong> in the other sentence.</p>

<p>Given two <strong>sentences</strong> <code>s1</code> and <code>s2</code>, return <em>a list of all the <strong>uncommon words</strong></em>. You may return the answer in <strong>any order</strong>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<p><strong>Input:</strong> <span class="example-io">s1 = "this apple is sweet", s2 = "this apple is sour"</span></p>

<p><strong>Output:</strong> <span class="example-io">["sweet","sour"]</span></p>

<p><strong>Explanation:</strong></p>

<p>The word <code>"sweet"</code> appears only in <code>s1</code>, while the word <code>"sour"</code> appears only in <code>s2</code>.</p>

<p><strong class="example">Example 2:</strong></p>

<p><strong>Input:</strong> <span class="example-io">s1 = "apple apple", s2 = "banana"</span></p>

<p><strong>Output:</strong> <span class="example-io">["banana"]</span></p>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s1.length, s2.length &lt;= 200</code></li>
	<li><code>s1</code> and <code>s2</code> consist of lowercase English letters and spaces.</li>
	<li><code>s1</code> and <code>s2</code> do not have leading or trailing spaces.</li>
	<li>All the words in <code>s1</code> and <code>s2</code> are separated by a single space.</li>
</ul>
