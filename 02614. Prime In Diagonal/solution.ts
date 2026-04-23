/**
 * Problem: 2614. Prime In Diagonal
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Largest prime on matrix diagonals
 *
 * @param nums - Square matrix
 *
 * @returns Max prime on diagonals
 */
const diagonalPrime = (nums: number[][]): number => {
  // Get the size of the square matrix
  const matrixSize: number = nums.length

  // Helper function to check if a number is prime
  const isPrime = (num: number): boolean => {
    // Calculate square root and floor it for loop bound
    const sqrtLimit: number = Math.sqrt(num) | 0

    // Check divisibility from 2 up to square root
    for (let divisor: number = 2; divisor <= sqrtLimit; divisor++) {
      // If divisible, number is not prime
      if (num % divisor === 0) return false
    }

    // Return true if number > 1 (prime), otherwise false
    return num <= 1 ? false : true
  }

  // Track the maximum prime number found
  let maxPrimeFound: number = 0

  // Iterate through each cell in the matrix
  for (let row: number = 0; row < matrixSize; row++) {
    for (let col: number = 0; col < matrixSize; col++) {
      // Check if cell is on main diagonal or secondary diagonal
      if (row === col || row === matrixSize - 1 - col) {
        // Get current cell value
        const currentValue: number = nums[row][col]

        // Update maxPrimeFound if current value is larger and prime
        if (currentValue > maxPrimeFound && isPrime(currentValue))
          maxPrimeFound = currentValue
      }
    }
  }

  // Return the largest prime found, or 0 if none
  return maxPrimeFound
}
