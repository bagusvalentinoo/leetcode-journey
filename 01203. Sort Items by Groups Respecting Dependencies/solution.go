/**
 * Problem: 1203. Sort Items by Groups Respecting Dependencies
 *
 * Difficulty: Hard
 *
 * Language: Golang
 *
 * Performance: Runtime - 14 ms (Beats 100%)
 */

func sortItems(n int, m int, group []int, beforeItems [][]int) []int {
	// itemAdj: adjacency list for item dependencies
	// itemDegree: in-degree count for each item
	itemAdj, itemDegree := make([][]int, n), make([]int, n)

	// Assign unique group id to items with no group (-1)
	for i := range group {
		if group[i] == -1 {
			group[i] = m // Assign new group id
			m++         // Increment group count
		}
	}

	// groupAdj: adjacency list for group dependencies
	// groupDegree: in-degree count for each group
	groupAdj, groupDegree := make([][]int, m), make([]int, m)

	// Build dependency graphs for items and groups
	for itemIdx, dependencies := range beforeItems {
		for _, depItem := range dependencies {
			u, v := depItem, itemIdx // u: dependency, v: current item

			groupU, groupV := group[u], group[v]

			// Add edge in item graph
			itemAdj[u] = append(itemAdj[u], v)
			itemDegree[v]++

			// Add edge in group graph if items belong to different groups
			if groupU != groupV {
				groupAdj[groupU] = append(groupAdj[groupU], groupV)
				groupDegree[groupV]++
			}
		}
	}

	// groupItems: stores sorted items for each group
	groupItems := make([][]int, m)
	// queue for topological sort of items
	queue := make([]int, 0)

	// Enqueue items with zero in-degree
	for i := 0; i < n; i++ {
		if itemDegree[i] == 0 {
			queue = append(queue, i)
		}
	}

	head, sortedItemCount := 0, 0

	// Topological sort for items
	for head < len(queue) {
		currentItem := queue[head]
		head++
		currentGroup := group[currentItem]

		sortedItemCount++
		groupItems[currentGroup] = append(groupItems[currentGroup], currentItem)

		// Decrease in-degree for adjacent items
		for _, neighbor := range itemAdj[currentItem] {
			itemDegree[neighbor]--
			if itemDegree[neighbor] == 0 {
				queue = append(queue, neighbor)
			}
		}
	}

	// If not all items are sorted, there is a cycle
	if sortedItemCount < n {
		return nil
	}

	// Prepare for topological sort of groups
	queue = make([]int, 0)
	for i := 0; i < m; i++ {
		if groupDegree[i] == 0 {
			queue = append(queue, i)
		}
	}

	result := make([]int, 0)
	head = 0
	sortedGroupCount := 0

	// Topological sort for groups
	for head < len(queue) {
		currentGroup := queue[head]
		head++

		// Append sorted items of current group to result
		result = append(result, groupItems[currentGroup]...)
		sortedGroupCount++

		// Decrease in-degree for adjacent groups
		for _, neighborGroup := range groupAdj[currentGroup] {
			groupDegree[neighborGroup]--
			if groupDegree[neighborGroup] == 0 {
				queue = append(queue, neighborGroup)
			}
		}
	}

	// If not all groups are sorted, there is a cycle
	if sortedGroupCount < m {
		return nil
	}

	// Return sorted items respecting dependencies and group constraints
	return result
}
