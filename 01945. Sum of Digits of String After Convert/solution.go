/**
 * Problem: 1945. Sum of Digits of String After Convert
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func getLucky(s string, k int) int {
  // Store the result of the first digit-sum transformation
  transformedValue := 0

  // Convert each letter and add the digits of its alphabet position
  for _, character := range s {
    // Calculate the one-based alphabet position for the current letter
    alphabetPosition := int(character - 'a' + 1)

    // Add both decimal digits to avoid constructing the converted integer
    transformedValue += alphabetPosition/10 + alphabetPosition%10
  }

  // Perform the remaining digit-sum transformations
  for transformation := 1; transformation < k; transformation++ {
    // Store the sum of digits for the current transformed value
    digitSum := 0

    // Extract and add every digit from the current value
    for transformedValue > 0 {
      // Add the least significant digit to the current sum
      digitSum += transformedValue % 10
      // Remove the least significant digit before the next iteration
      transformedValue /= 10
    }

    // Use the computed digit sum for the next transformation
    transformedValue = digitSum
  }

  // Return the value after exactly k transformations
  return transformedValue
}
