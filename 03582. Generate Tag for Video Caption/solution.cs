/**
 * Problem: 3582. Generate Tag for Video Caption
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public string GenerateTag(string caption)
  {
    // Initialize StringBuilder to build the hashtag
    StringBuilder hashtagBuilder = new StringBuilder();

    // Add the leading '#' character
    hashtagBuilder.Append('#');

    // Iterate through each character in the caption
    for (int charIndex = 0; charIndex < caption.Length; charIndex++)
    {
      // Check if current character is a letter (a-z or A-Z)
      if (
        (caption[charIndex] >= 'a' && caption[charIndex] <= 'z')
        || (caption[charIndex] >= 'A' && caption[charIndex] <= 'Z')
      )
      {
        // If this is not the first character and previous character was a space
        if (hashtagBuilder.Length > 1 && caption[charIndex - 1] == ' ')
          // Add letter as uppercase (for word start)
          hashtagBuilder.Append(
            caption[charIndex] >= 'A' && caption[charIndex] <= 'Z'
              ? caption[charIndex]
              : (char)(caption[charIndex] + ('A' - 'a'))
          );
        else
          // Add letter as lowercase (for rest of word)
          hashtagBuilder.Append(
            caption[charIndex] >= 'a' && caption[charIndex] <= 'z'
              ? caption[charIndex]
              : (char)(caption[charIndex] - ('A' - 'a'))
          );
      }
    }

    // Convert StringBuilder to string
    string result = hashtagBuilder.ToString();

    // Truncate to maximum 100 characters if needed
    if (result.Length > 100)
      result = result.Substring(0, 100);

    // Return the final hashtag
    return result;
  }
}
