<h1>
  <a href="https://leetcode.com/problems/available-captures-for-rook/">
    999. Available Captures for Rook
  </a>
</h1>
<img src='https://img.shields.io/badge/Difficulty-Easy-greenlight' alt='Difficulty: Easy' />
<img src='https://img.shields.io/badge/Topics-Array%2C%20Matrix%2C%20Simulation-blue' alt='Topics: Array, Matrix, Simulation' />

<hr />

<p>You are given an <code>8 x 8</code> <strong>matrix</strong> representing a chessboard. There is <strong>exactly one</strong> white rook represented by <code>'R'</code>, some number of white bishops <code>'B'</code>, and some number of black pawns <code>'p'</code>. Empty squares are represented by <code>'.'</code>.</p>

<p>A rook can move any number of squares horizontally or vertically (up, down, left, right) until it reaches another piece <em>or</em> the edge of the board. A rook is <strong>attacking</strong> a pawn if it can move to the pawn's square in one move.</p>

<p>Note: A rook cannot move through other pieces, such as bishops or pawns. This means a rook cannot attack a pawn if there is another piece blocking the path.</p>

<p>Return the <strong>number of pawns</strong> the white rook is <strong>attacking</strong>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2019/02/20/1253_example_1_improved.PNG" style="width: 300px; height: 305px;">
<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">board = [[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".","R",".",".",".","p"],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."]]</span></p>

<p><strong>Output:</strong> <span class="example-io">3</span></p>

<p><strong>Explanation:</strong></p>

<p>In this example, the rook is attacking all the pawns.</p>
</div>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2019/02/19/1253_example_2_improved.PNG" style="width: 300px; height: 306px;">
<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">board = [[".",".",".",".",".",".","."],[".","p","p","p","p","p",".","."],[".","p","p","B","p","p",".","."],[".","p","B","R","B","p",".","."],[".","p","p","B","p","p",".","."],[".","p","p","p","p","p",".","."],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."]]</span></p>

<p><strong>Output:</strong> <span class="example-io">0</span></p>

<p><strong>Explanation:</strong></p>

<p>The bishops are blocking the rook from attacking any of the pawns.</p>
</div>

<p><strong class="example">Example 3:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2019/02/20/1253_example_3_improved.PNG" style="width: 300px; height: 305px;">
<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">board = [[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".","p",".",".",".","."],["p","p",".","R",".","p","B","."],[".",".",".",".",".",".",".","."],[".",".",".","B",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".",".",".",".",".","."]]</span></p>

<p><strong>Output:</strong> <span class="example-io">3</span></p>

<p><strong>Explanation:</strong></p>

<p>The rook is attacking the pawns at positions b5, d6, and f5.</p>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>board.length == 8</code></li>
	<li><code>board[i].length == 8</code></li>
	<li><code>board[i][j]</code> is either <code>'R'</code>, <code>'.'</code>, <code>'B'</code>, or <code>'p'</code></li>
	<li>There is exactly one cell with <code>board[i][j] == 'R'</code></li>
</ul>
