/**
 * Problem: 1090. Largest Values From Labels
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 5 ms (Beats 100%)
 */

// Item struct represents a value-label pair.
type Item struct {
	v int // value of the item
	l int // label of the item
}

func largestValsFromLabels(values []int, labels []int, numWanted int, useLimit int) int {
	// Create a slice of Item structs from values and labels.
	items := make([]Item, len(values))

	// Populate items with value-label pairs.
	for i, v := range values {
		items[i] = Item{
			v: v,        // assign value
			l: labels[i],// assign corresponding label
		}
	}

	// Sort items in descending order by value.
	sort.Slice(items, func(a, b int) bool {
		return items[a].v > items[b].v
	})

	// hm maps label to the count of selected items for that label.
	hm := make(map[int]int)
	totalValue, selectedCount := 0, 0 // totalValue: sum of selected values, selectedCount: number of selected items

	// Iterate over sorted items to select the largest values with label constraints.
	for i := 0; i < len(items); i++ {
		// Skip if label has reached its use limit.
		if hm[items[i].l] == useLimit {
			continue
		}

		// Add item's value to totalValue.
		totalValue += items[i].v
		// Increment count for item's label.
		hm[items[i].l]++
		// Increment selected item count.
		selectedCount++

		// If required number of items selected, return the total value.
		if selectedCount == numWanted {
			return totalValue
		}
	}

	// Return total value if fewer than numWanted items are selected.
	return totalValue
}
