/**
 * Problem: 412. Fizz Buzz
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution
{
public:
  vector<string> fizzBuzz(int n)
  {
    // Initialize result vector to store FizzBuzz strings
    vector<string> result;

    // Iterate through numbers from 1 to n
    for (int i = 1; i <= n; i++)
    {
      // If number is divisible by both 3 and 5, push "FizzBuzz"
      if (i % 3 == 0 && i % 5 == 0)
        result.push_back("FizzBuzz");
      // If number is divisible by 3 only, push "Fizz"
      else if (i % 3 == 0)
        result.push_back("Fizz");
      // If number is divisible by 5 only, push "Buzz"
      else if (i % 5 == 0)
        result.push_back("Buzz");
      // Otherwise, push the number itself as a string
      else
        result.push_back(to_string(i));
    }

    // Return the completed Fizz Buzz sequence
    return result;
  }
};
