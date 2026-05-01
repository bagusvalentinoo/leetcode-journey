/**
 * Problem: 3591. Check if Any Element Has Prime Frequency
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
private:
  // Helper function to check if a number is prime
  bool isPrime(int num) {
    // 0 and 1 are not prime numbers
    if (num == 0 || num == 1)
      return false;
    // 2 is the only even prime number
    if (num == 2)
      return true;

    // Start checking divisibility from 2
    int divisor = 2;

    // Check all potential divisors up to the number itself
    while (num > divisor) {
      // If divisible, number is not prime
      if (num % divisor == 0)
        return false;

      // Move to next divisor
      divisor++;
    }

    // No divisors found, number is prime
    return true;
  }

  // Helper function to count frequency of a specific number in the array
  int countFrequency(vector<int> &numArr, int num) {
    // Initialize frequency counter
    int frequency = 0;

    // Iterate through array to count occurrences
    for (int element : numArr) {
      // Increment count if element matches target number
      if (element == num)
        frequency++;
    }

    // Return total frequency
    return frequency;
  }

public:
  bool checkPrimeFrequency(vector<int> &nums) {
    // Map to store already processed numbers
    unordered_map<int, int> frequencyMap;

    // Iterate through each element in the array
    for (int index = 0; index < nums.size(); index++) {
      // Check if current number has been processed before
      if (frequencyMap.find(nums[index]) == frequencyMap.end()) {
        // Count frequency of current number in the entire array
        int frequencyValue = countFrequency(nums, nums[index]);

        // If frequency is prime, return true immediately
        if (isPrime(frequencyValue))
          return true;

        // Store processed number to avoid re-processing
        frequencyMap[nums[index]] = frequencyValue;
      }
    }

    // No prime frequencies found
    return false;
  }
};
