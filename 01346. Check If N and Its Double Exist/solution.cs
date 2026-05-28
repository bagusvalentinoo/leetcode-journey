/**
 * Problem: 1346. Check If N and Its Double Exist
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  // Maximum absolute value size for bit array (1001)
  private int arraySize = 1001;

  public bool CheckIfExist(int[] arr)
  {
    // Bit arrays to track seen positive and negative numbers
    BitArray positiveSeen = new BitArray(arraySize),
              negativeSeen = new BitArray(arraySize);

    // Iterate through each number in the array
    foreach (int currentNumber in arr)
    {
      // Calculate double of current number
      int doubleValue = currentNumber * 2;

      // Handle non-negative numbers (0 and positive)
      if (currentNumber >= 0)
      {
        // Check if double exists or half exists (and is integer)
        if ((doubleValue < arraySize && positiveSeen[doubleValue]) ||
            (currentNumber % 2 == 0 && positiveSeen[currentNumber >> 1]))
          return true;

        // Mark current number as seen
        positiveSeen[currentNumber] = true;
      }
      // Handle negative numbers
      else
      {
        // Make double positive for indexing
        doubleValue = -doubleValue;

        // Check if double exists or half exists (and is integer)
        if ((doubleValue < arraySize && negativeSeen[doubleValue]) ||
            (currentNumber % 2 == 0 && negativeSeen[(-currentNumber) >> 1]))
          return true;

        // Mark current number as seen (store as positive index)
        negativeSeen[-currentNumber] = true;
      }
    }

    // No such pair found
    return false;
  }
}
