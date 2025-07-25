/**
 * Problem: 1054. Distant Barcodes
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 3 ms (Beats 100%)
 */

// BC struct holds a barcode value (Value) and its count (Count)
type BC struct {
	Value int // barcode value
	Count int // count of the barcode
}

func rearrangeBarcodes(barcodes []int) []int {
	// freqMap maps each barcode to its frequency
	freqMap := map[int]int{}

	// Count the frequency of each barcode
	for _, barcode := range barcodes {
		freqMap[barcode]++
	}

	n := len(barcodes) // total number of barcodes

	// data holds BC structs for each unique barcode and its count
	data := make([]BC, len(freqMap))
	index := 0

	// Fill data with barcode values and their counts
	for barcode, count := range freqMap {
		data[index].Value = barcode
		data[index].Count = count
		index++
	}

	// Sort data in descending order by count (most frequent first)
	sort.Slice(data, func(i, j int) bool {
		return data[i].Count > data[j].Count
	})

	pos := 0 // position to place the next barcode

	// Place barcodes in the result array, skipping every other index
	for _, bc := range data {
		for i := 0; i < bc.Count; i++ {
			barcodes[pos] = bc.Value
			pos += 2

			// If pos exceeds array length, start filling odd indices
			if pos >= n {
				pos = 1
			}
		}
	}

	return barcodes // return the rearranged barcodes
}
