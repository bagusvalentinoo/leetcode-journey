<h1>
  <a href="https://leetcode.com/problems/generate-tag-for-video-caption/">
    3582. Generate Tag for Video Caption
  </a>
</h1>

<img src="https://img.shields.io/badge/Difficulty-Easy-greenlight" alt="Difficulty: Easy" />
<img src="https://img.shields.io/badge/Topics-Mid%20Level%2C%20String%2C%20Simulation%2C%20Weekly%20Contest%20454-blue" alt="Topics: Mid Level, String, Simulation, Weekly Contest 454" />

<hr />

<p>You are given a string <code><font face="monospace">caption</font></code> representing the caption for a video.</p>

<p>The following actions must be performed <strong>in order</strong> to generate a <strong>valid tag</strong> for the video:</p>

<ol>
	<li>
	<p><strong>Combine all words</strong> in the string into a single <em>camelCase string</em> prefixed with <code>'#'</code>. A <em>camelCase string</em> is one where the first letter of all words <em>except</em> the first one is capitalized. All characters after the first character in <strong>each</strong> word must be lowercase.</p>
	</li>
	<li>
	<p><b>Remove</b> all characters that are not an English letter, <strong>except</strong> the first <code>'#'</code>.</p>
	</li>
	<li>
	<p><strong>Truncate</strong> the result to a maximum of 100 characters.</p>
	</li>
</ol>

<p>Return the <strong>tag</strong> after performing the actions on <code>caption</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">caption = "Leetcode daily streak achieved"</span></p>

<p><strong>Output:</strong> <span class="example-io">"#leetcodeDailyStreakAchieved"</span></p>

<p><strong>Explanation:</strong></p>

<p>The first letter for all words except <code>"leetcode"</code> should be capitalized.</p>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">caption = "can I Go There"</span></p>

<p><strong>Output:</strong> <span class="example-io">"#canIGoThere"</span></p>

<p><strong>Explanation:</strong></p>

<p>The first letter for all words except <code>"can"</code> should be capitalized.</p>
</div>

<p><strong class="example">Example 3:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">caption = "hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh"</span></p>

<p><strong>Output:</strong> <span class="example-io">"#hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh"</span></p>

<p><strong>Explanation:</strong></p>

<p>Since the first word has length 101, we need to truncate the last two letters from the word.</p>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= caption.length &lt;= 150</code></li>
	<li><code>caption</code> consists only of English letters and <code>' '</code>.</li>
</ul>
