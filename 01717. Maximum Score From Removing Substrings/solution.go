/**
 * Problem: 1717. Maximum Score From Removing Substrings
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 20 ms (Beats 100%)
 */

// stack is a custom stack implementation for rune elements
type stack struct {
	ele []rune // slice to hold stack elements
}

// Push adds a rune element to the top of the stack
func (s *stack) Push(c rune) {
	s.ele = append(s.ele, c)
}

// Top returns the top element of the stack without removing it
func (s *stack) Top() rune {
	return s.ele[len(s.ele)-1]
}

// Pop removes and returns the top element of the stack
func (s *stack) Pop() rune {
	poppedEle := s.ele[len(s.ele)-1]
	s.ele = s.ele[:len(s.ele)-1]
	return poppedEle
}

// IsEmpty checks if the stack is empty
func (s *stack) IsEmpty() bool {
	return len(s.ele) == 0
}

// maximumGain calculates the maximum score by removing substrings "ab" or "ba" from s
func maximumGain(s string, x int, y int) int {
	var st stack // initialize stack to process characters

	toRemove := "ab" // default substring to remove
	point := x       // default points for removing "ab"

	// If y > x, prioritize removing "ba" for higher points
	if y > x {
		toRemove = "ba"
		point = y
	}

	st.Push(rune(s[0])) // push the first character to stack
	ans := 0            // initialize answer to accumulate points

	// Iterate through the string starting from the second character
	for i := 1; i < len(s); i++ {
		// If current character matches the second char of toRemove and stack top matches the first char
		if s[i] == toRemove[1] && !st.IsEmpty() && st.Top() == rune(toRemove[0]) {
			ans += point // add points for removing substring
			st.Pop()     // remove the matched character from stack
		} else {
			st.Push(rune(s[i])) // push current character to stack
		}
	}

	// Switch to removing the other substring for remaining characters
	if toRemove == "ab" {
		point = y
		toRemove = "ba"
	} else {
		point = x
		toRemove = "ab"
	}

	remaining := st.ele // get remaining characters in stack
	st.ele = []rune{}   // reset stack for second pass

	// If there are remaining characters, push the first one to stack
	if len(remaining) != 0 {
		st.Push(remaining[0])
	}

	// Process the remaining characters for the other substring
	for i := 1; i < len(remaining); i++ {
		if remaining[i] == rune(toRemove[1]) && !st.IsEmpty() && st.Top() == rune(toRemove[0]) {
			ans += point // add points for removing substring
			st.Pop()     // remove the matched character from stack
		} else {
			st.Push(rune(remaining[i])) // push current character to stack
		}
	}

	return ans // return the total score
}
