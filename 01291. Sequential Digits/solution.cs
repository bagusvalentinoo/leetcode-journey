/**
 * Problem: 1291. Sequential Digits
 *
 * Difficulty: Medium
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public IList<int> SequentialDigits(int low, int high)
  {
    // List to store resulting sequential digits
    List<int> sequentialNumbers = new List<int>();

    // String containing sequential digits from 1 to 9
    string sequentialString = "123456789";

    // Determine the minimum and maximum length of numbers in the range
    int minLength = low.ToString().Length, maxLength = high.ToString().Length;

    // Iterate through each possible length of sequential numbers
    for (int length = minLength; length <= maxLength; length++)
    {
      // Iterate through all possible starting positions for the current length
      for (int start = 0; start + length <= 9; start++)
      {
        // Extract substring and convert to integer
        int currentNumber = int.Parse(sequentialString.Substring(start, length));

        // Check if number falls within the specified range
        if (currentNumber >= low && currentNumber <= high)
          sequentialNumbers.Add(currentNumber);
      }
    }

    // Return the list of sequential digits within the range
    return sequentialNumbers;
  }
}
