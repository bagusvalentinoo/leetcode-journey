/**
 * Problem: 1652. Defuse the Bomb
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int[] Decrypt(int[] code, int k)
  {
    // Store array length for circular index wrapping
    int n = code.Length;

    // Initialize output array for decrypted values
    int[] decryptedCode = new int[n];

    // Store sliding window sum
    int sum = 0;

    // Handle positive k by summing the next k elements
    if (k > 0)
    {
      // Build initial window from first k elements after index 0
      for (int i = 1; i <= k; i++) sum += code[i];

      // Store decrypted value for first position
      decryptedCode[0] = sum;

      // Slide window across remaining positions
      for (int j = 1; j < n; j++)
      {
        // Remove element leaving the window
        sum -= code[j];

        // Add new element entering the window with wraparound
        sum += code[(j + k) % n];

        // Store decrypted value for current position
        decryptedCode[j] = sum;
      }

      // Return the decrypted code array
      return decryptedCode;
    }
    else if (k == 0)
    {
      // Set all values to zero when k is zero
      for (int i = 0; i < n; i++) decryptedCode[i] = 0;

      // Return the zero-filled array
      return decryptedCode;
    }
    else
    {
      // Build initial window from last -k elements for negative k
      for (int i = (n + k) % n; i < n; i++) sum += code[i];

      // Store decrypted value for first position
      decryptedCode[0] = sum;

      // Slide window across remaining positions
      for (int i = 1; i < n; i++)
      {
        // Remove element leaving the window with wraparound
        sum -= code[((n + k) + (i - 1)) % n];

        // Add new element entering the window with wraparound
        sum += code[(i - 1) % n];

        // Store decrypted value for current position
        decryptedCode[i] = sum;
      }

      // Return the decrypted code array
      return decryptedCode;
    }
  }
}
