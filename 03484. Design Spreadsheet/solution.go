/**
 * Problem: 3484. Design Spreadsheet
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 21 ms (Beats 100%)
 */

// Spreadsheet struct represents the spreadsheet with a map to store cell values.
type Spreadsheet struct {
	m map[string]int // m maps cell names (e.g., "A1") to their integer values.
}

// Constructor initializes a new Spreadsheet with the given number of rows.
// The rows parameter is currently unused, but included for interface compatibility.
func Constructor(rows int) Spreadsheet {
	return Spreadsheet{
		m: make(map[string]int), // Initialize the map to store cell values.
	}
}

// SetCell sets the value of a cell identified by its name.
func (s *Spreadsheet) SetCell(cell string, value int) {
	s.m[cell] = value // Assign the value to the specified cell.
}

// ResetCell removes the value of a cell, effectively resetting it.
func (s *Spreadsheet) ResetCell(cell string) {
	delete(s.m, cell) // Delete the cell from the map.
}

// GetValue evaluates a formula string and returns its integer result.
// The formula is expected to be in the format "=A1+B2" or similar.
func (s *Spreadsheet) GetValue(formula string) int {
	indexSecondOperator := strings.Index(formula, "+") // Find the index of the '+' operator.
	firstValue, _ := s.extractValue(formula[1:indexSecondOperator]) // Extract the first operand's value.
	secondValue, _ := s.extractValue(formula[indexSecondOperator+1:]) // Extract the second operand's value.

	return firstValue + secondValue // Return the sum of the two operands.
}

// extractValue parses an operand and returns its integer value.
// If the operand is a cell reference, it looks up the value in the map.
// If the operand is a number, it converts it from string to int.
func (s *Spreadsheet) extractValue(operand string) (int, error) {
	if unicode.IsLetter(rune(operand[0])) { // Check if the operand is a cell reference.
		return s.m[operand], nil // Return the value from the map.
	}

	return strconv.Atoi(operand) // Convert the operand to an integer.
}
