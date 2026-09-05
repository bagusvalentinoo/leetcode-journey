/**
 * Problem: 1592. Rearrange Spaces Between Words
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public string ReorderSpaces(string text)
  {
    // Split on spaces and drop empty entries to get words
    string[] words = text.Split(' ', StringSplitOptions.RemoveEmptyEntries);

    // Count total spaces in text
    int totalSpaces = 0;

    // Count each space character
    foreach (char ch in text) if (ch == ' ') totalSpaces++;

    // Track even spaces per gap and leftover trailing spaces
    int spacesPerGap = 0, trailingSpaces = totalSpaces;

    // Divide spaces evenly between gaps when more than one word exists
    if (words.Length > 1)
    {
      // Compute even spaces per gap
      spacesPerGap = totalSpaces / (words.Length - 1);
      // Compute leftover spaces for the end
      trailingSpaces = totalSpaces % (words.Length - 1);
    }

    // Preallocate result buffer matching original length
    char[] result = new char[text.Length];

    // Track write position in result buffer
    int resultIndex = 0;

    // Build result word by word
    for (int i = 0; i < words.Length; i++)
    {
      // Copy current word characters into result
      foreach (char ch in words[i]) result[resultIndex++] = ch;

      // Decide spaces after current word: even gap or trailing block at end
      int spacesAfter = i == words.Length - 1 ? trailingSpaces : spacesPerGap;

      // Fill spaces after current word
      for (int j = 0; j < spacesAfter; j++) result[resultIndex++] = ' ';
    }

    // Return string built from preallocated buffer
    return new string(result);
  }
}
