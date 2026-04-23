/**
 * Problem: 2614. Prime In Diagonal
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  int diagonalPrime(vector<vector<int>> &nums) {
    // Get the size of the square matrix
    int matrixSize = nums.size();

    // Helper function to check if a number is prime
    auto isPrime = [](int num) -> bool {
      // Numbers less than 2 are not prime
      if (num <= 1)
        return false;

      // Calculate square root and floor it for loop bound
      int sqrtLimit = sqrt(num);

      // Check divisibility from 2 up to square root
      for (int divisor = 2; divisor <= sqrtLimit; divisor++) {
        // If divisible, number is not prime
        if (num % divisor == 0)
          return false;
      }

      // Number is prime
      return true;
    };

    // Track the maximum prime number found
    int maxPrimeFound = 0;

    // Iterate through each cell in the matrix
    for (int row = 0; row < matrixSize; row++) {
      for (int col = 0; col < matrixSize; col++) {
        // Check if cell is on main diagonal or secondary diagonal
        if (row == col || row == matrixSize - 1 - col) {
          // Get current cell value
          int currentValue = nums[row][col];

          // Update maxPrimeFound if current value is larger and prime
          if (currentValue > maxPrimeFound && isPrime(currentValue))
            maxPrimeFound = currentValue;
        }
      }
    }

    // Return the largest prime found, or 0 if none
    return maxPrimeFound;
  }
};
