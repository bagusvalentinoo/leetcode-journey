<h1>
  <a href="https://leetcode.com/problems/find-most-frequent-vowel-and-consonant/">
    3541. Find Most Frequent Vowel and Consonant
  </a>
</h1>
<img src='https://img.shields.io/badge/Difficulty-Easy-greenlight' alt='Difficulty: Easy' />
<img src='https://img.shields.io/badge/Topics-Hash%20Table%2C%20String%2C%20Counting%2C%20Biweekly%20Contest%20156-blue' alt='Topics: Hash Table, String, Counting, Biweekly Contest 156' />

<hr />

<p>You are given a string <code>s</code> consisting of lowercase English letters (<code>'a'</code> to <code>'z'</code>). </p>

<p>Your task is to:</p>

<ul>
	<li>Find the vowel (one of <code>'a'</code>, <code>'e'</code>, <code>'i'</code>, <code>'o'</code>, or <code>'u'</code>) with the <strong>maximum</strong> frequency.</li>
	<li>Find the consonant (all other letters excluding vowels) with the <strong>maximum</strong> frequency.</li>
</ul>

<p>Return the sum of the two frequencies.</p>

<p><strong>Note</strong>: If multiple vowels or consonants have the same maximum frequency, you may choose any one of them. If there are no vowels or no consonants in the string, consider their frequency as 0.</p>
The <strong>frequency</strong> of a letter <code>x</code> is the number of times it occurs in the string.
<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">s = "successes"</span></p>

<p><strong>Output:</strong> <span class="example-io">6</span></p>

<p><strong>Explanation:</strong></p>

<ul>
	<li>The vowels are: <code>'u'</code> (frequency 1), <code>'e'</code> (frequency 2). The maximum frequency is 2.</li>
	<li>The consonants are: <code>'s'</code> (frequency 4), <code>'c'</code> (frequency 2). The maximum frequency is 4.</li>
	<li>The output is <code>2 + 4 = 6</code>.</li>
</ul>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">s = "aeiaeia"</span></p>

<p><strong>Output:</strong> <span class="example-io">3</span></p>

<p><strong>Explanation:</strong></p>

<ul>
	<li>The vowels are: <code>'a'</code> (frequency 3), <code>'e'</code> ( frequency 2), <code>'i'</code> (frequency 2). The maximum frequency is 3.</li>
	<li>There are no consonants in <code>s</code>. Hence, maximum consonant frequency = 0.</li>
	<li>The output is <code>3 + 0 = 3</code>.</li>
</ul>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 100</code></li>
	<li><code>s</code> consists of lowercase English letters only.</li>
</ul>
