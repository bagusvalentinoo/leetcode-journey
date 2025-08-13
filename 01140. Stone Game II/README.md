<h1>
  <a href="https://leetcode.com/problems/stone-game-ii/">
    1140. Stone Game II
  </a>
</h1>
<img src='https://img.shields.io/badge/Difficulty-Medium-orange' alt='Difficulty: Medium' />
<img src='https://img.shields.io/badge/Topics-Array%2C%20Math%2C%20Dynamic%20Programming%2C%20Prefix%20Sum%2C%20Game%20Theory%2C%20Weekly%20Contest%20147-blue' alt='Topics: Array, Math, Dynamic Programming, Prefix Sum, Game Theory, Weekly Contest 147' />

<hr />

<p>Alice and Bob continue their games with piles of stones. There are a number of piles <strong>arranged in a row</strong>, and each pile has a positive integer number of stones <code>piles[i]</code>. The objective of the game is to end with the most stones.</p>

<p>Alice and Bob take turns, with Alice starting first.</p>

<p>On each player's turn, that player can take <strong>all the stones</strong> in the <strong>first</strong> <code>X</code> remaining piles, where <code>1 &lt;= X &lt;= 2M</code>. Then, we set <code>M = max(M, X)</code>. Initially, M = 1.</p>

<p>The game continues until all the stones have been taken.</p>

<p>Assuming Alice and Bob play optimally, return the maximum number of stones Alice can get.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">piles = [2,7,9,4,4]</span></p>

<p><strong>Output:</strong> <span class="example-io">10</span></p>

<p><strong>Explanation:</strong></p>

<ul>
	<li>If Alice takes one pile at the beginning, Bob takes two piles, then Alice takes 2 piles again. Alice can get <code>2 + 4 + 4 = 10</code> stones in total.</li>
	<li>If Alice takes two piles at the beginning, then Bob can take all three piles left. In this case, Alice get <code>2 + 7 = 9</code> stones in total.</li>
</ul>

<p>So we return 10 since it's larger.</p>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">piles = [1,2,3,4,5,100]</span></p>

<p><strong>Output:</strong> <span class="example-io">104</span></p>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= piles.length &lt;= 100</code></li>
	<li><code>1 &lt;= piles[i]&nbsp;&lt;= 10<sup>4</sup></code></li>
</ul>
