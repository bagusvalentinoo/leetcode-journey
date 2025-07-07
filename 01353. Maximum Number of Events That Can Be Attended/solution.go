/**
 * Problem: 1353. Maximum Number of Events That Can Be Attended
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 45 ms (Beats 100%)
 */

func maxEvents(events [][]int) int {
    sort.Slice(events, func(i, j int) bool {
        if events[i][0] == events[j][0] {
            return events[i][1] < events[j][1]
        } 
        return events[i][0] < events[j][0]
    })

    heap := make([][]int, 0)
    i, now, total := 0, 1, 0

    for i < len(events) || len(heap) != 0 {
        for i < len(events) && events[i][0] <= now {
            heap = append(heap, events[i])
            heapifyBottom(heap)
            i += 1
        }

        for len(heap) > 0 && heap[0][1] < now {
            heap = pop(heap)
        }

        if len(heap) > 0 {
            total += 1
            heap = pop(heap)
        }

        // fmt.Println(now, heap)
        now += 1
    }

    return total
}

func heapifyBottom(heap [][]int) {
    i := len(heap) - 1

    for i > 0 {
        p := parent(i)
        if heap[p][1] <= heap[i][1] {
            return
        }
        heap[i], heap[p] = heap[p], heap[i]
        // fmt.Println(heap)
        i = p
    }
}

func pop(heap [][]int) [][]int {
    // switch root to end
    heap[0], heap[len(heap)-1] = heap[len(heap)-1], heap[0]
    heap = heap[:len(heap)-1]

    // sort that top to bottom
    i := 0
    l, r := (i * 2 + 1), (i * 2 + 2)

    for l < len(heap) {
        j := minVal(l, r, heap)

        if heap[j][1] >= heap[i][1] {
            return heap
        } 
        heap[j], heap[i] = heap[i], heap[j]

        i = j
        l, r = (i * 2 + 1), (i * 2 + 2)
    }

    return heap
}

func parent(i int) int {
    return ((i + 1) / 2) - 1
}

func minVal(l, r int, heap [][]int) int {
    if r >= len(heap) || (heap[l][1] < heap[r][1]) {
        return l
    }

    return r
}
