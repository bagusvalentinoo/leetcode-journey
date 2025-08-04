/**
 * Problem: 1105. Filling Bookcase Shelves
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func arrangeBooks(books [][]int, maxShelfWidth int) int {
	// minHeights[i] stores the minimum height required to arrange the first i books.
	minHeights := make([]int, len(books)+1)

	// Initialize all elements to the maximum integer value to represent infinity.
	for i := range minHeights {
		minHeights[i] = math.MaxInt32
	}

	// Base case: no books require zero height.
	minHeights[0] = 0

	// Iterate through each book to determine the minimum height arrangement.
	for bookIndex := 1; bookIndex <= len(books); bookIndex++ {
		// Variables to track the current shelf's height and width.
		currentShelfHeight, currentShelfWidth := 0, 0

		// Try to place books on the current shelf, starting from the last book.
		for lastBook := bookIndex - 1; lastBook >= 0; lastBook-- {
			// Extract thickness and height of the current book.
			currentBookThickness, currentBookHeight := books[lastBook][0], books[lastBook][1]

			// If adding this book exceeds the shelf width, stop adding more books to this shelf.
			if currentShelfWidth+currentBookThickness > maxShelfWidth {
				break
			}

			// Update the shelf width and shelf height.
			currentShelfWidth += currentBookThickness
			currentShelfHeight = max(currentShelfHeight, currentBookHeight)

			// Calculate the total height if this arrangement is chosen.
			currentArrangementHeight := minHeights[lastBook] + currentShelfHeight
			// Update the minimum height for arranging the first bookIndex books.
			minHeights[bookIndex] = min(minHeights[bookIndex], currentArrangementHeight)
		}
	}

	// Return the minimum height required to arrange all books.
	return minHeights[len(books)]
}

func minHeightShelves(books [][]int, shelfWidth int) int {
	return arrangeBooks(books, shelfWidth)
}
