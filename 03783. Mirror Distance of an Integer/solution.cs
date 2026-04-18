/**
 * Problem: 3783. Mirror Distance of an Integer
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int MirrorDistance(int n)
  {
    // Convert integer to string
    string num = n.ToString();
    // Convert string to character array for reversal
    char[] numAsArray = num.ToCharArray();

    // Reverse the character array
    Array.Reverse(numAsArray);

    // Create new string from reversed character array
    string revNum = new string(numAsArray);

    // Parse reversed string back to integer
    int revNumInt = int.Parse(revNum);

    // Return absolute difference between original and reversed numbers
    return Math.Abs(n - revNumInt);
  }
}
