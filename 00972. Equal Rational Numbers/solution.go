/**
 * Problem: 972. Equal Rational Numbers
 *
 * Difficulty: Hard
 *
 * Language: Go
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func isRationalEqual(s string, t string) bool {
	// Compare rational numbers by checking their digits up to a certain precision
	// If the numbers differ, check if they represent the same value (e.g., 0.999... = 1.000...)
	iter1, iter2 := getIter(s), getIter(t)

	// Check the first 24 digits of both numbers
	for i := 0; i < 24; i++ {
		a, b := iter1.next(), iter2.next()

		// If digits are equal, continue checking
		if a == b {
			continue
		}
		// Ensure a is the larger digit for consistent comparison
		if b > a {
			a, b = b, a
			iter1, iter2 = iter2, iter1
		}
		// If difference isn't exactly 1, numbers can't be equal
		if a-b != 1 {
			return false
		}

		// Check if pattern matches the form x.000... = (x-1).999...
		for i := 0; i < 24; i++ {
			if iter1.next() != byte('0') || iter2.next() != byte('9') {
				return false
			}
		}

		// Pattern confirms equality (e.g., 0.999... = 1.000...)
		return true
	}

	// Numbers are equal if we reach here
	return true
}

// iterator represents a rational number with non-repeating and repeating parts
type iterator struct {
	nonRepeating string // The non-repeating part of the number
	repeating    string // The repeating part of the number (if any)
	i            int    // Current index position in the digit sequence
}

func (iter *iterator) next() byte {
	// Increment the iterator position
	iter.i++
	
	// Skip over decimal point if present at current position
	if iter.i < len(iter.nonRepeating) {
		if iter.nonRepeating[iter.i] == byte('.') {
			iter.i++
		}
	}
	// Return the current digit from non-repeating part if available
	if iter.i < len(iter.nonRepeating) {
		return iter.nonRepeating[iter.i]
	}
	// Return '0' for trailing zeros if no repeating part exists
	if len(iter.repeating) == 0 {
		return byte('0')
	}

	// Calculate index into the repeating part using modulo to cycle through it
	index := (iter.i - len(iter.nonRepeating)) % len(iter.repeating)

	// Return the appropriate digit from the repeating part
	return iter.repeating[index]
}

func getIter(s string) *iterator {
	// Split the string at "(" to separate non-repeating and repeating parts
	repeatSplit := strings.Split(s, "(")

	// If there's no repeating part (no parentheses)
	if len(repeatSplit) == 1 {
		return &iterator{
			s, "", -1, // non-repeating part, empty repeating part, initial position
		}
	}

	// Extract the repeating decimal part (removing the closing parenthesis)
	repeat := repeatSplit[1][:len(repeatSplit[1])-1]
	
	// Return iterator with non-repeating part, repeating part, and initial position
	return &iterator{
		repeatSplit[0],
		repeat,
		-1,
	}
}