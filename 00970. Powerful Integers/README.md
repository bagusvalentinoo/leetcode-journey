<h1>
  <a href="https://leetcode.com/problems/powerful-integers/">
    970. Powerful Integers
  </a>
</h1>
<img src='https://img.shields.io/badge/Difficulty-Medium-orange' alt='Difficulty: Medium' />
<img src='https://img.shields.io/badge/Topics-Hash%20Table%2C%20Math%2C%20Enumeration-blue' alt='Topics: Hash Table, Math, Enumeration' />

<hr />

<p>Given three integers <code>x</code>, <code>y</code>, and <code>bound</code>, return <em>a list of all the <strong>powerful integers</strong> that have a value less than or equal to</em> <code>bound</code>.</p>

<p>An integer is <strong>powerful</strong> if it can be represented as <code>x<sup>i</sup> + y<sup>j</sup></code> for some integers <code>i &gt;= 0</code> and <code>j &gt;= 0</code>.</p>

<p>You may return the answer in <strong>any order</strong>. In your answer, each value should occur <strong>at most once</strong>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre><strong>Input:</strong> x = 2, y = 3, bound = 10
<strong>Output:</strong> [2,3,4,5,7,9,10]
<strong>Explanation:</strong>
2 = 2<sup>0</sup> + 3<sup>0</sup>
3 = 2<sup>1</sup> + 3<sup>0</sup>
4 = 2<sup>0</sup> + 3<sup>1</sup>
5 = 2<sup>1</sup> + 3<sup>1</sup>
7 = 2<sup>2</sup> + 3<sup>1</sup>
9 = 2<sup>3</sup> + 3<sup>0</sup>
10 = 2<sup>0</sup> + 3<sup>2</sup>
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre><strong>Input:</strong> x = 3, y = 5, bound = 15
<strong>Output:</strong> [2,4,6,8,10,14]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= x, y &lt;= 100</code></li>
	<li><code>0 &lt;= bound &lt;= 10<sup>6</sup></code></li>
</ul>
