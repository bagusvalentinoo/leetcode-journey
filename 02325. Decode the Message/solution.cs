/**
 * Problem: 2325. Decode the Message
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public string DecodeMessage(string key, string message)
  {
    // Store each encoded letter's decoded alphabet letter
    char[] substitutions = new char[26];
    char decodedLetter = 'a';

    // Build the substitution table from first appearances in the key
    foreach (char character in key)
    {
      if (character != ' ' && substitutions[character - 'a'] == '\0')
        // Assign the next alphabet letter to this encoded letter
        substitutions[character - 'a'] = decodedLetter++;
    }

    // Allocate space for the decoded message characters
    char[] decodedMessage = new char[message.Length];

    // Decode each message character while preserving spaces
    for (int i = 0; i < message.Length; i++)
      decodedMessage[i] = message[i] == ' ' ? ' ' : substitutions[message[i] - 'a'];

    // Return the decoded message
    return new string(decodedMessage);
  }
}
