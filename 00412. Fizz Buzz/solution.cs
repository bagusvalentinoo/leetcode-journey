/**
 * Problem: 412. Fizz Buzz
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Problem: 412. Fizz Buzz
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public IList<string> FizzBuzz(int n)
  {
    // Initialize result array with size n
    string[] result = new string[n];

    // Set first element to "1"
    result[0] = "1";

    // Variables for current value and boolean flags
    int currentValue;
    bool isFizz;
    bool isBuzz;

    // If n >= 2, set second element to "2"
    if (n >= 2)
      result[1] = "2";

    // Iterate from index 2 to n-1 (values 3 to n)
    for (int i = 2; i < n; i++)
    {
      // Calculate current value (index + 1)
      currentValue = i + 1;

      // Check if divisible by 3
      isFizz = currentValue % 3 == 0;
      // Check if divisible by 5
      isBuzz = currentValue % 5 == 0;

      // If divisible by both 3 and 5, set "FizzBuzz"
      if (isFizz && isBuzz)
        result[i] = "FizzBuzz";
      // If divisible by 3 only, set "Fizz"
      else if (isFizz)
        result[i] = "Fizz";
      // If divisible by 5 only, set "Buzz"
      else if (isBuzz)
        result[i] = "Buzz";
      // Otherwise, set the number as string
      else
        result[i] = currentValue.ToString();
    }

    // Return the result array as IList<string>
    return result;
  }
}
