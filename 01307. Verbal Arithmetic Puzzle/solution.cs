/**
 * Problem: 1307. Verbal Arithmetic Puzzle
 *
 * Difficulty: Hard
 *
 * Language: C#
 *
 * Performance: Runtime - 5 ms (Beats 100%)
 */

public class Solution
{
  // Coefficient for each letter based on positional value
  private long[] coefficient;

  // List of letter indices sorted by absolute coefficient
  private List<int> sortedIndices;

  // Set of letters that cannot be zero (first letters of words)
  private HashSet<char> nonZeroLetters;

  // Current digit assignment for each letter index
  private int[] digitAssignment;

  // Track which digits (0-9) are already used
  private bool[] usedDigits;

  // Map from index back to character
  private char[] indexToChar;

  // Map from character to index
  private Dictionary<char, int> charToIndex;

  public bool IsSolvable(string[] words, string result)
  {
    // Initialize mapping from characters to indices
    charToIndex = new Dictionary<char, int>();
    int currentIndex = 0;

    // Assign indices to all characters in words
    foreach (string word in words)
    {
      foreach (char c in word)
      {
        if (!charToIndex.ContainsKey(c))
          charToIndex[c] = currentIndex++;
      }
    }

    // Assign indices to characters in result
    foreach (char c in result)
    {
      if (!charToIndex.ContainsKey(c))
        charToIndex[c] = currentIndex++;
    }

    // Number of unique letters
    int letterCount = charToIndex.Count;

    // Initialize coefficient array
    coefficient = new long[letterCount];

    // Initialize mapping from index to character
    indexToChar = new char[letterCount];
    foreach (var kv in charToIndex)
      indexToChar[kv.Value] = kv.Key;

    // Calculate coefficients from words (positive contribution)
    foreach (string word in words)
    {
      long multiplier = 1;

      // Process from rightmost digit to leftmost
      for (int i = word.Length - 1; i >= 0; i--)
      {
        coefficient[charToIndex[word[i]]] += multiplier;
        multiplier *= 10;
      }
    }

    // Subtract coefficients from result (negative contribution)
    long resultMultiplier = 1;
    for (int i = result.Length - 1; i >= 0; i--)
    {
      coefficient[charToIndex[result[i]]] -= resultMultiplier;
      resultMultiplier *= 10;
    }

    // Identify letters that cannot be zero (first letters)
    nonZeroLetters = new HashSet<char>();
    foreach (string word in words)
    {
      if (word.Length > 1)
        nonZeroLetters.Add(word[0]);
    }
    if (result.Length > 1)
      nonZeroLetters.Add(result[0]);

    // Create list of indices sorted by absolute coefficient
    sortedIndices = new List<int>();
    for (int i = 0; i < letterCount; i++)
      sortedIndices.Add(i);

    // Sort indices by descending absolute coefficient for better pruning
    sortedIndices.Sort((a, b) => Math.Abs(coefficient[b]).CompareTo(Math.Abs(coefficient[a])));

    // Initialize digit assignment and usage tracking
    digitAssignment = new int[letterCount];
    usedDigits = new bool[10];

    // Start depth-first search
    return DFS(0, 0);
  }

  /// <summary>
  /// Depth-first search to assign digits to letters
  /// </summary>
  /// <param name="position">Current position in sorted indices</param>
  /// <param name="currentSum">Current sum of assigned digits</param>
  /// <returns>True if solution found</returns>
  private bool DFS(int position, long currentSum)
  {
    // Base case: all letters assigned, sum must be zero
    if (position == sortedIndices.Count)
      return currentSum == 0;

    // Calculate remaining sum bounds for pruning
    int currentIndex = sortedIndices[position];
    long maxRemaining = 0,
      minRemaining = 0;

    // Calculate maximum and minimum possible sum from remaining letters
    for (int j = position; j < sortedIndices.Count; j++)
    {
      int idx = sortedIndices[j];
      long coeff = coefficient[idx];

      if (coeff > 0)
      {
        // Positive coefficient: max with digit 9, min with digit 0
        maxRemaining += coeff * 9;
        minRemaining += 0;
      }
      else
      {
        // Negative coefficient: max with digit 0, min with digit 9
        maxRemaining += 0;
        minRemaining += coeff * 9;
      }
    }

    // Prune if impossible to reach zero with remaining letters
    if (currentSum + maxRemaining < 0 || currentSum + minRemaining > 0)
      return false;

    // Current letter to assign
    char currentLetter = indexToChar[currentIndex];

    // Check if this letter cannot be zero
    bool isNonZero = nonZeroLetters.Contains(currentLetter);

    // Starting digit (0 unless letter is non-zero)
    int startDigit = isNonZero ? 1 : 0;

    // Try all possible digits for current letter
    for (int digit = startDigit; digit <= 9; digit++)
    {
      // Skip if digit already used
      if (usedDigits[digit])
        continue;

      // Assign digit
      usedDigits[digit] = true;

      // Recurse with updated sum
      if (DFS(position + 1, currentSum + coefficient[currentIndex] * digit))
        return true;

      // Backtrack
      usedDigits[digit] = false;
    }

    return false;
  }
}
