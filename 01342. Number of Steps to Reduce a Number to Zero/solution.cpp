/**
 * Problem: 1342. Number of Steps to Reduce a Number to Zero
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
  int numberOfSteps(int num)
  {
    // Counter for number of steps taken
    int stepCount = 0;

    // Continue until number becomes zero
    while (num > 0)
    {
      // If number is even, divide by 2
      if (num % 2 == 0)
        num = num / 2;
      // If number is odd, subtract 1
      else
        num -= 1;

      // Increment step counter
      stepCount++;
    }

    // Return total steps taken
    return stepCount;
  }
};
