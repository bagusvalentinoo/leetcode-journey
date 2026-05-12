/**
 * Problem: 3461. Check If Digits Are Equal in String After Operations I
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Checks if final two digits are identical after reduction
 *
 * @param s - Numeric string
 *
 * @returns True if last two digits match
 */
const hasSameDigits = (s: string): boolean => {
  // Initialize the length of the input string
  let currentLength: number = s.length

  // Create an array to store numeric values of the string
  const digitArray: number[] = []

  // Loop through each character in the string
  for (let i: number = 0; i < currentLength; i++)
    // Convert the character to an integer and push it into the array
    digitArray.push(parseInt(s[i]))

  // Continue reducing the array until only two elements remain
  while (currentLength > 2) {
    // Decrease the length counter as the array shrinks
    currentLength--

    // Update each element with the sum of adjacent elements modulo 10
    for (let i: number = 0; i < currentLength; i++)
      digitArray[i] = (digitArray[i] + digitArray[i + 1]) % 10
  }

  // Return true if the final two digits are identical, otherwise false
  return digitArray[0] === digitArray[1]
}
