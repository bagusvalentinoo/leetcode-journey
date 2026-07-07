/**
 * Problem: 3754. Concatenate Non-Zero Digits and Multiply by Sum I
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func sumAndMultiply(n int) int64 {
    // Variable to store sum of non-zero digits
    digitSum := 0
    // Variable to store reversed number (excluding zeros)
    var reversedNumber int64 = 0
    
    // Convert number to string for digit-by-digit processing
    numberString := strconv.Itoa(n)
    
    // Process each digit from left to right (most significant to least)
    for i := 0; i < len(numberString); i++ {
        // Check if current digit is non-zero
        if numberString[i]-'0' != 0 {
            // Add current digit to sum
            digitSum += int(numberString[i] - '0')
            // Build reversed number by appending current digit
            reversedNumber = reversedNumber*10 + int64(numberString[i]-'0')
        }
    }
    
    // Return product of reversed number and sum of non-zero digits
    return int64(digitSum) * reversedNumber
}
