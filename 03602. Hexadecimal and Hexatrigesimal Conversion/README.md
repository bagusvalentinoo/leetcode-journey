<h1>
  <a href="https://leetcode.com/problems/hexadecimal-and-hexatrigesimal-conversion/">
    3602. Hexadecimal and Hexatrigesimal Conversion
  </a>
</h1>

<img src="https://img.shields.io/badge/Difficulty-Easy-greenlight" alt="Difficulty: Easy" />
<img src="https://img.shields.io/badge/Topics-Mid%20Level%20Math%20String%20Biweekly%20Contest%20160-blue" alt="Topics: Mid Level, Math, String, Biweekly Contest 160" />

<hr />

<p>You are given an integer <code>n</code>.</p>

<p>Return the concatenation of the <strong>hexadecimal</strong> representation of <code>n<sup>2</sup></code> and the <strong>hexatrigesimal</strong> representation of <code>n<sup>3</sup></code>.</p>

<p>A <strong>hexadecimal</strong> number is defined as a base-16 numeral system that uses the digits <code>0 – 9</code> and the uppercase letters <code>A - F</code> to represent values from 0 to 15.</p>

<p>A <strong>hexatrigesimal</strong> number is defined as a base-36 numeral system that uses the digits <code>0 – 9</code> and the uppercase letters <code>A - Z</code> to represent values from 0 to 35.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">n = 13</span></p>

<p><strong>Output:</strong> <span class="example-io">"A91P1"</span></p>

<p><strong>Explanation:</strong></p>

<ul>
	<li><code>n<sup>2</sup> = 13 * 13 = 169</code>. In hexadecimal, it converts to <code>(10 * 16) + 9 = 169</code>, which corresponds to <code>"A9"</code>.</li>
	<li><code>n<sup>3</sup> = 13 * 13 * 13 = 2197</code>. In hexatrigesimal, it converts to <code>(1 * 36<sup>2</sup>) + (25 * 36) + 1 = 2197</code>, which corresponds to <code>"1P1"</code>.</li>
	<li>Concatenating both results gives <code>"A9" + "1P1" = "A91P1"</code>.</li>
</ul>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">n = 36</span></p>

<p><strong>Output:</strong> <span class="example-io">"5101000"</span></p>

<p><strong>Explanation:</strong></p>

<ul>
	<li><code>n<sup>2</sup> = 36 * 36 = 1296</code>. In hexadecimal, it converts to <code>(5 * 16<sup>2</sup>) + (1 * 16) + 0 = 1296</code>, which corresponds to <code>"510"</code>.</li>
	<li><code>n<sup>3</sup> = 36 * 36 * 36 = 46656</code>. In hexatrigesimal, it converts to <code>(1 * 36<sup>3</sup>) + (0 * 36<sup>2</sup>) + (0 * 36) + 0 = 46656</code>, which corresponds to <code>"1000"</code>.</li>
	<li>Concatenating both results gives <code>"510" + "1000" = "5101000"</code>.</li>
</ul>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 1000</code></li>
</ul>
