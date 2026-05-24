/**
 * Problem: 3270. Find the Key of the Numbers
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int GenerateKey(int num1, int num2, int num3)
  {
    // Convert each number to 4-digit string with leading zeros
    string firstNum = num1.ToString("D4");
    string secondNum = num2.ToString("D4");
    string thirdNum = num3.ToString("D4");

    // Array to store resulting digits
    char[] resultDigits = new char[4];

    // Process each digit position (0-3)
    for (int position = 0; position < 4; position++)
      // Take the minimum character (digit) among the three numbers at current position
      resultDigits[position] = (char)Math.Min(
          firstNum[position],
          Math.Min(secondNum[position], thirdNum[position])
      );

    // Convert character array to string and then to integer
    return int.Parse(new string(resultDigits));
  }
}
