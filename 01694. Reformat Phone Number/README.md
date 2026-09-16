<h1>
  <a href="https://leetcode.com/problems/reformat-phone-number/"> 1694. Reformat Phone Number </a>
</h1>
<img src="https://img.shields.io/badge/Difficulty-Easy-greenlight" alt="Difficulty: Easy" />
<img src="https://img.shields.io/badge/Topics-Mid%20Level%2C%20String%2C%20Weekly%20Contest%20220-blue" alt="Topics: Mid Level, String, Weekly Contest 220" />

<hr />

<p>You are given a phone number as a string <code>number</code>. <code>number</code> consists of digits, spaces <code>&#39; &#39;</code>, and/or dashes <code>&#39;-&#39;</code>.</p>

<p>You would like to reformat the phone number in a certain manner. Firstly, <strong>remove</strong> all spaces and dashes. Then, <strong>group</strong> the digits from left to right into blocks of length 3 <strong>until</strong> there are 4 or fewer digits. The final digits are then grouped as follows:</p>

<ul>
	<li>2 digits: A single block of length 2.</li>
	<li>3 digits: A single block of length 3.</li>
	<li>4 digits: Two blocks of length 2 each.</li>
</ul>

<p>The blocks are then joined by dashes. Notice that the reformatting process should <strong>never</strong> produce any blocks of length 1 and produce <strong>at most</strong> two blocks of length 2.</p>

<p>Return <em>the phone number after formatting.</em></p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> number = "1-23-45 6"
<strong>Output:</strong> "123-456"
<strong>Explanation:</strong> The digits are "123456".
Step 1: There are more than 4 digits, so group the next 3 digits. The 1st block is "123".
Step 2: There are 3 digits remaining, so put them in a single block of length 3. The 2nd block is "456".
Joining the blocks gives "123-456".
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> number = "123 4-567"
<strong>Output:</strong> "123-45-67"
<strong>Explanation: </strong>The digits are "1234567".
Step 1: There are more than 4 digits, so group the next 3 digits. The 1st block is "123".
Step 2: There are 4 digits left, so split them into two blocks of length 2. The blocks are "45" and "67".
Joining the blocks gives "123-45-67".
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> number = "123 4-5678"
<strong>Output:</strong> "123-456-78"
<strong>Explanation:</strong> The digits are "12345678".
Step 1: The 1st block is "123".
Step 2: The 2nd block is "456".
Step 3: There are 2 digits left, so put them in a single block of length 2. The 3rd block is "78".
Joining the blocks gives "123-456-78".
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>2 &lt;= number.length &lt;= 100</code></li>
	<li><code>number</code> consists of digits and the characters <code>&#39;-&#39;</code> and <code>&#39; &#39;</code>.</li>
	<li>There are at least <strong>two</strong> digits in <code>number</code>.</li>
</ul>
