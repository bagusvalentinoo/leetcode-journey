/**
 * Problem: 2075. Decode the Slanted Ciphertext
 *
 * Difficulty: Medium
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public string DecodeCiphertext(string encodedText, int rows)
  {
    // If only one row, the text is already in original order
    if (rows == 1)
      return encodedText;

    // Get total length of encoded text
    int totalLength = encodedText.Length;
    // Calculate number of columns in the grid
    int cols = totalLength / rows;

    // Initialize indices: row, column, position in encoded text
    int row = 0,
      col = 0,
      position = 0;

    // Store decoded characters
    System.Text.StringBuilder decoded = new System.Text.StringBuilder();

    // Traverse the grid in diagonal order
    while (position < totalLength)
    {
      // Add character at current position to decoded string
      decoded.Append(encodedText[position]);
      // Move to next row
      row++;

      // If reached bottom row, move to next column and reset row
      if (row == rows)
      {
        row = 0;
        col++;
      }

      // Calculate next position in encoded text
      position = row * (cols + 1) + col;
    }

    // Remove trailing spaces from decoded string
    return decoded.ToString().TrimEnd(' ');
  }
}
