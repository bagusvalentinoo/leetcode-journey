/**
 * Problem: 412. Fizz Buzz
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Returns Fizz Buzz sequence for numbers 1 to n
 *
 * @param n - Upper limit of the range
 * @returns Array of Fizz Buzz strings
 */
const fizzBuzz = (n: number): string[] => {
  // Initialize result array to store FizzBuzz strings
  const result: string[] = []

  // Iterate through numbers from 1 to n
  for (let i: number = 1; i <= n; i++) {
    // If number is divisible by both 3 and 5, push "FizzBuzz"
    if (i % 3 === 0 && i % 5 === 0) result.push('FizzBuzz')
    // If number is divisible by 3 only, push "Fizz"
    else if (i % 3 === 0) result.push('Fizz')
    // If number is divisible by 5 only, push "Buzz"
    else if (i % 5 === 0) result.push('Buzz')
    // Otherwise, push the number itself as a string
    else result.push(i.toString())
  }

  // Return the completed Fizz Buzz sequence array
  return result
}
