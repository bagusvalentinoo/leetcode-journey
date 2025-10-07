/**
 * Problem: 1263. Minimum Moves to Move a Box to Their Target Location
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 18 ms (Beats 100%)
 */

// point represents a coordinate (row, column) in the grid.
type point struct{ r, c int }

// state represents the current state: box row/col, player row/col.
type state struct{ br, bc, pr, pc int }

// abs returns the absolute value of an integer.
func abs(x int) int {
	if x < 0 {
		return -x
	}
	return x
}

// minPushBox calculates the minimum number of pushes required to move the box to the target location.
func minPushBox(grid [][]byte) int {
	// m and n store the number of rows and columns in the grid.
	m, n := len(grid), len(grid[0])

	// startB stores the initial box position.
	// startP stores the initial player position.
	// targetT stores the target position for the box.
	var startB, startP, targetT point

	// Iterate through the grid to find the positions of the player, box, and target.
	for r := 0; r < m; r++ {
		for c := 0; c < n; c++ {
			switch grid[r][c] {
			case 'S':
				startP = point{r, c}
				grid[r][c] = '.'
			case 'B':
				startB = point{r, c}
				grid[r][c] = '.'
			case 'T':
				targetT = point{r, c}
				grid[r][c] = '.'
			}
		}
	}

	// dist is a 4D slice to store the minimum pushes for each state.
	dist := make([][][][]int, m)

	// Initialize the dist slice with -1 for all states.
	for r := 0; r < m; r++ {
		dist[r] = make([][][]int, n)
		for c := 0; c < n; c++ {
			dist[r][c] = make([][]int, m)
			for pr := 0; pr < m; pr++ {
				dist[r][c][pr] = make([]int, n)
				for pc := 0; pc < n; pc++ {
					dist[r][c][pr][pc] = -1
				}
			}
		}
	}

	// dq is a double-ended queue to perform BFS.
	dq := list.New()

	// initialState stores the starting state of the box and player.
	initialState := state{startB.r, startB.c, startP.r, startP.c}
	dist[startB.r][startB.c][startP.r][startP.c] = 0

	// Push the initial state to the front of the queue.
	dq.PushFront(initialState)

	// dirs defines the four possible movement directions.
	dirs := []point{{0, 1}, {0, -1}, {1, 0}, {-1, 0}}

	// Perform BFS until the queue is empty.
	for dq.Len() > 0 {
		// elem stores the current element from the front of the queue.
		elem := dq.Front()
		dq.Remove(elem)

		// curr stores the current state.
		curr := elem.Value.(state)

		// br, bc are the box's row and column.
		// pr, pc are the player's row and column.
		br, bc, pr, pc := curr.br, curr.bc, curr.pr, curr.pc

		// p stores the current number of pushes.
		p := dist[br][bc][pr][pc]

		// If the box reaches the target, return the number of pushes.
		if br == targetT.r && bc == targetT.c {
			return p
		}

		// Try moving the player in all four directions.
		for _, dir := range dirs {
			npr, npc := pr + dir.r, pc + dir.c
			// Skip if out of bounds or hitting a wall.
			if npr < 0 || npr >= m || npc < 0 || npc >= n || grid[npr][npc] == '#' {
				continue
			}
			// Skip if moving into the box's position.
			if npr == br && npc == bc {
				continue
			}
			// If the new state has not been visited, update and push to the front.
			if dist[br][bc][npr][npc] == -1 {
				dist[br][bc][npr][npc] = p
				dq.PushFront(state{br, bc, npr, npc})
			}
		}

		// Check if the player is adjacent to the box to push it.
		if abs(pr-br) + abs(pc-bc) == 1 {
			// dr, dc are the direction from player to box.
			dr, dc := br-pr, bc-pc
			// nbr, nbc are the new box position after push.
			nbr, nbc := br + dr, bc + dc

			// Skip if the new box position is out of bounds or hitting a wall.
			if !(nbr < 0 || nbr >= m || nbc < 0 || nbc >= n || grid[nbr][nbc] == '#') {
				// npr, npc are the new player position after push.
				npr, npc := br, bc
				// If the new state has not been visited, update and push to the back.
				if dist[nbr][nbc][npr][npc] == -1 {
					dist[nbr][nbc][npr][npc] = p + 1
					dq.PushBack(state{nbr, nbc, npr, npc})
				}
			}
		}
	}

	// Return -1 if the box cannot reach the target.
	return -1
}
