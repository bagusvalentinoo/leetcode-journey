/**
 * Problem: 788. Rotated Digits
 *
 * Difficulty: Medium
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int RotatedDigits(int n)
  {
    // Convert number to string for digit-by-digit processing
    string numberString = n.ToString();

    // Array of valid digits (0,1,2,5,6,8,9)
    int[] validDigits = new int[7] { 0, 1, 2, 5, 6, 8, 9 };

    // Start depth-first search from the first digit
    int result = DepthFirstSearch(numberString, true, 0, false, validDigits);

    return result;
  }

  // Recursive DFS to count valid rotated numbers
  public int DepthFirstSearch(
    string numberString,
    bool isTight,
    int currentIndex,
    bool hasRotatingDigit,
    int[] validDigits
  )
  {
    // Base case: reached the end of the number
    if (currentIndex == numberString.Length)
    {
      // Return 1 if we have at least one rotating digit, otherwise 0
      if (hasRotatingDigit)
        return 1;

      // Return 0 if we don't have any rotating digit
      return 0;
    }

    // Lower bound is always 0
    int lowerBound = 0;

    // Upper bound depends on whether we are in tight mode
    int upperBound = isTight ? numberString[currentIndex] - '0' : 9;

    // Accumulator for result
    int totalCount = 0;

    // Iterate through valid digits that are within the upper bound
    for (int i = 0; i < validDigits.Length && validDigits[i] <= upperBound; i++)
    {
      // Copy current flag for rotating digit
      bool currentHasRotating = hasRotatingDigit;

      // If we haven't found a rotating digit yet and current digit is rotating (2,5,6,9)
      // Note: 1 and 8 are not considered rotating because they look the same after rotation
      if (!hasRotatingDigit && validDigits[i] > 1 && validDigits[i] != 8)
        currentHasRotating = true;

      // Recurse to next digit
      totalCount += DepthFirstSearch(
        numberString,
        (isTight && validDigits[i] == upperBound) ? true : false,
        currentIndex + 1,
        currentHasRotating,
        validDigits
      );
    }

    // Return the total count of valid rotated numbers
    return totalCount;
  }
}
