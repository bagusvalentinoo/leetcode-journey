<h1>
  <a href="https://leetcode.com/problems/toggle-light-bulbs/">
    3842. Toggle Light Bulbs
  </a>
</h1>

<img src="https://img.shields.io/badge/Difficulty-Easy-greenlight" alt="Difficulty: Easy" />
<img src="https://img.shields.io/badge/Topics-Mid%20Level%2C%20Array%2C%20Hash%20Table%2C%20Sorting%2C%20Simulation%2C%20Weekly%20Contest%20489-blue" alt="Topics: Mid Level, Array, Hash Table, Sorting, Simulation, Weekly Contest 489" />

<hr />

<p>You are given an array <code>bulbs</code> of integers between 1 and 100.</p>

<p>There are 100 light bulbs numbered from 1 to 100. All of them are switched off initially.</p>

<p>For each element <code>bulbs[i]</code> in the array <code>bulbs</code>:</p>

<ul>
	<li>If the <code>bulbs[i]<sup>th</sup></code> light bulb is currently off, switch it on.</li>
	<li>Otherwise, switch it off.</li>
</ul>

<p>Return the list of integers denoting the light bulbs that are on in the end, <strong>sorted</strong> in <strong>ascending</strong> order. If no bulb is on, return an empty list.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> bulbs<span class="example-io"> = [10,30,20,10]</span></p>

<p><strong>Output:</strong> <span class="example-io">[20,30]</span></p>

<p><strong>Explanation:</strong></p>

<ul>
	<li>The <code>bulbs[0] = 10<sup>th</sup></code> light bulb is currently off. We switch it on.</li>
	<li>The <code>bulbs[1] = 30<sup>th</sup></code> light bulb is currently off. We switch it on.</li>
	<li>The <code>bulbs[2] = 20<sup>th</sup></code> light bulb is currently off. We switch it on.</li>
	<li>The <code>bulbs[3] = 10<sup>th</sup></code> light bulb is currently on. We switch it off.</li>
	<li>In the end, the 20<sup>th</sup> and the 30<sup>th</sup> light bulbs are on.</li>
</ul>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> bulbs<span class="example-io"> = [100,100]</span></p>

<p><strong>Output:</strong> <span class="example-io">[]</span></p>

<p><strong>Explanation:</strong></p>

<ul>
	<li>The <code>bulbs[0] = 100<sup>th</sup></code> light bulb is currently off. We switch it on.</li>
	<li>The <code>bulbs[1] = 100<sup>th</sup></code> light bulb is currently on. We switch it off.</li>
	<li>In the end, no light bulb is on.</li>
</ul>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= bulbs.length &lt;= 100</code></li>
	<li><code>1 &lt;= bulbs[i] &lt;= 100</code></li>
</ul>
