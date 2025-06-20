<h1>
  <a href="https://leetcode.com/problems/maximum-manhattan-distance-after-k-changes/">
    3443. Maximum Manhattan Distance After K Changes
  </a>
</h1>
<img src='https://img.shields.io/badge/Difficulty-Medium-orange' alt='Difficulty: Medium' />
<img src='https://img.shields.io/badge/Topics-Hash%20Table%2C%20Math%2C%20String%2C%20Counting-blue' alt='Topics: Hash Table, Math, String, Counting' />

<hr />

<p>You are given a string <code>s</code> consisting of the characters <code>'N'</code>, <code>'S'</code>, <code>'E'</code>, and <code>'W'</code>, where <code>s[i]</code> indicates movements in an infinite grid:</p>

<ul>
	<li><code>'N'</code> : Move north by 1 unit.</li>
	<li><code>'S'</code> : Move south by 1 unit.</li>
	<li><code>'E'</code> : Move east by 1 unit.</li>
	<li><code>'W'</code> : Move west by 1 unit.</li>
</ul>

<p>Initially, you are at the origin <code>(0, 0)</code>. You can change <strong>at most</strong> <code>k</code> characters to any of the four directions.</p>

<p>Find the <strong>maximum</strong> <strong>Manhattan distance</strong> from the origin that can be achieved <strong>at any time</strong> while performing the movements <strong>in order</strong>.</p>
The <strong>Manhattan Distance</strong> between two cells <code>(x<sub>i</sub>, y<sub>i</sub>)</code> and <code>(x<sub>j</sub>, y<sub>j</sub>)</code> is <code>|x<sub>i</sub> - x<sub>j</sub>| + |y<sub>i</sub> - y<sub>j</sub>|</code>.
<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">s = "NWSE", k = 1</span></p>

<p><strong>Output:</strong> <span class="example-io">3</span></p>

<p><strong>Explanation:</strong></p>

<p>Change <code>s[2]</code> from <code>'S'</code> to <code>'N'</code>. The string <code>s</code> becomes <code>"NWNE"</code>.</p>

<table style="border: 1px solid black;"><thead><tr><th style="border: 1px solid black;">Movement</th><th style="border: 1px solid black;">Position (x, y)</th><th style="border: 1px solid black;">Manhattan Distance</th><th style="border: 1px solid black;">Maximum</th></tr></thead><tbody><tr><td style="border: 1px solid black;">s[0] == 'N'</td><td style="border: 1px solid black;">(0, 1)</td><td style="border: 1px solid black;">0 + 1 = 1</td><td style="border: 1px solid black;">1</td></tr><tr><td style="border: 1px solid black;">s[1] == 'W'</td><td style="border: 1px solid black;">(-1, 1)</td><td style="border: 1px solid black;">1 + 1 = 2</td><td style="border: 1px solid black;">2</td></tr><tr><td style="border: 1px solid black;">s[2] == 'N'</td><td style="border: 1px solid black;">(-1, 2)</td><td style="border: 1px solid black;">1 + 2 = 3</td><td style="border: 1px solid black;">3</td></tr><tr><td style="border: 1px solid black;">s[3] == 'E'</td><td style="border: 1px solid black;">(0, 2)</td><td style="border: 1px solid black;">0 + 2 = 2</td><td style="border: 1px solid black;">3</td></tr></tbody></table>

<p>The maximum Manhattan distance from the origin that can be achieved is 3. Hence, 3 is the output.</p>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">s = "NSWWEW", k = 3</span></p>

<p><strong>Output:</strong> <span class="example-io">6</span></p>

<p><strong>Explanation:</strong></p>

<p>Change <code>s[1]</code> from <code>'S'</code> to <code>'N'</code>, and <code>s[4]</code> from <code>'E'</code> to <code>'W'</code>. The string <code>s</code> becomes <code>"NNWWWW"</code>.</p>

<p>The maximum Manhattan distance from the origin that can be achieved is 6. Hence, 6 is the output.</p>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 10<sup>5</sup></code></li>
	<li><code>0 &lt;= k &lt;= s.length</code></li>
	<li><code>s</code> consists of only <code>'N'</code>, <code>'S'</code>, <code>'E'</code>, and <code>'W'</code>.</li>
</ul>
