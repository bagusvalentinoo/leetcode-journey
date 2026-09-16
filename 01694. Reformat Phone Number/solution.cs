/**
 * Problem: 1694. Reformat Phone Number
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public string ReformatNumber(string number)
  {
    // Collect only digit characters, skipping spaces and dashes
    StringBuilder digits = new StringBuilder();

    // Scan each character of the input
    foreach (char ch in number) if (ch >= '0' && ch <= '9') digits.Append(ch);

    // Total count of digits to group
    int totalDigits = digits.Length;

    // Store formatted blocks before joining
    List<string> blocks = new List<string>();

    // Current read position inside digits
    int index = 0;

    // Take blocks of 3 while more than 4 digits remain
    while (totalDigits - index > 4)
    {
      // Take the next block of 3 digits
      blocks.Add(digits.ToString(index, 3));

      // Advance past the consumed block
      index += 3;
    }

    // Count digits left for the final grouping
    int remaining = totalDigits - index;

    // Four remaining digits split into two blocks of 2
    if (remaining == 4)
    {
      // Take the first pair of the final four
      blocks.Add(digits.ToString(index, 2));

      // Take the second pair of the final four
      blocks.Add(digits.ToString(index + 2, 2));
    }
    // Two or three remaining digits form one final block
    else
      blocks.Add(digits.ToString(index, remaining));

    // Join blocks with dashes
    return string.Join("-", blocks);
  }
}
