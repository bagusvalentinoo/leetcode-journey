/**
 * Problem: 1291. Sequential Digits
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func sequentialDigits(low int, high int) []int {
    // Define a string containing sequential digits from 1 to 9
    sequentialString := "123456789"
    
    // Initialize a slice to store the resulting sequential digits
    result := make([]int, 0)
    
    // Outer loop to iterate through each character in the string
    for start := 0; start < len(sequentialString); start++ {
        // Inner loop to create substrings starting from the current character
        for end := start + 1; end < len(sequentialString); end++ {
            // Extract the substring and convert it to an integer
            number, _ := strconv.Atoi(sequentialString[start : end+1])
            
            // Break the loop if the number exceeds the upper bound
            if number > high {
                break
            }
            // Add the number to the result slice if it is within the range
            if low <= number {
                result = append(result, number)
            }
        }
    }

    // Sort the result slice in ascending order
    sort.Ints(result)

    // Return the sorted slice containing sequential digits within the range
    return result
}
