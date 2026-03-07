/**
 * Problem: 1307. Verbal Arithmetic Puzzle
 *
 * Difficulty: Hard
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  bool isSolvable(vector<string> &words, string result) {
    // Combine all words and result into a single vector
    vector<string> allWords = words;
    allWords.push_back(result);

    // Get unique letters from all words and result
    string allLetters;
    for (const string &w : allWords) {
      allLetters += w;
    }
    sort(allLetters.begin(), allLetters.end());
    allLetters.erase(unique(allLetters.begin(), allLetters.end()),
                     allLetters.end());
    vector<char> letters(allLetters.begin(), allLetters.end());

    // If more than 10 unique letters, impossible (only digits 0-9)
    if (letters.size() > 10)
      return false;

    // Set to store letters that cannot be zero (first letters of each word)
    unordered_set<char> nonZero;

    // Mark first letters of each word as non-zero
    for (const string &word : allWords) {
      if (word.length() > 1)
        nonZero.insert(word[0]);
    }

    // Map to store coefficient for each letter (based on position value)
    unordered_map<char, int> coeff;

    // Initialize coefficient for each letter to 0
    for (char ch : letters)
      coeff[ch] = 0;

    // Calculate coefficients from words (positive contribution)
    for (const string &word : words) {
      // Start with multiplier 1 for units place
      int multiplier = 1;

      // Process from rightmost digit to leftmost
      for (int i = word.length() - 1; i >= 0; i--) {
        // Add current multiplier to letter's coefficient
        coeff[word[i]] += multiplier;

        // Move to next place value (tens, hundreds, etc.)
        multiplier *= 10;
      }
    }

    // Subtract coefficients from result (negative contribution)
    {
      int multiplier = 1;

      // Process from rightmost digit to leftmost
      for (int i = result.length() - 1; i >= 0; i--) {
        // Subtract current multiplier from letter's coefficient
        coeff[result[i]] -= multiplier;

        // Move to next place value
        multiplier *= 10;
      }
    }

    // Sort letters by absolute coefficient for better pruning
    // Larger coefficients first to reduce branching
    sort(letters.begin(), letters.end(),
         [&](char a, char b) { return abs(coeff[a]) > abs(coeff[b]); });

    // Number of unique letters
    int letterCount = letters.size();

    // Array of coefficients in same order as sorted letters
    vector<int> coeffArray(letterCount);
    for (int i = 0; i < letterCount; i++) {
      coeffArray[i] = coeff[letters[i]];
    }

    // Precompute suffix sums for pruning bounds
    vector<int> suffixMax(letterCount + 1, 0);
    vector<int> suffixMin(letterCount + 1, 0);

    // Calculate suffix bounds from right to left
    for (int i = letterCount - 1; i >= 0; i--) {
      // Current coefficient value
      int currentCoeff = coeffArray[i];

      if (currentCoeff > 0) {
        // Positive coefficient: max when digit is 9, min when digit is 0
        suffixMax[i] = suffixMax[i + 1] + currentCoeff * 9;
        suffixMin[i] = suffixMin[i + 1];
      } else {
        // Negative coefficient: max when digit is 0, min when digit is 9
        suffixMax[i] = suffixMax[i + 1];
        suffixMin[i] = suffixMin[i + 1] + currentCoeff * 9;
      }
    }

    // Track used digits (0-9) to ensure uniqueness
    vector<bool> usedDigits(10, false);

    // Recursive backtracking to assign digits to letters
    function<bool(int, int)> backtrack = [&](int index, int currentSum) {
      // Base case: all letters assigned, sum must be zero
      if (index == letterCount)
        return currentSum == 0;

      // Pruning: impossible to reach zero with remaining letters
      if (currentSum + suffixMin[index] > 0 ||
          currentSum + suffixMax[index] < 0)
        return false;

      // Current letter to assign
      char currentChar = letters[index];

      // Coefficient for current letter
      int currentCoeff = coeffArray[index];

      // Starting digit (0 unless letter is leading and cannot be zero)
      int startDigit = nonZero.count(currentChar) ? 1 : 0;

      // Try all possible digits for current letter
      for (int digit = startDigit; digit <= 9; digit++) {
        // Skip if digit already used
        if (usedDigits[digit])
          continue;

        // Mark digit as used
        usedDigits[digit] = true;

        // Recurse with updated sum
        if (backtrack(index + 1, currentSum + currentCoeff * digit))
          return true;

        // Backtrack: unmark digit
        usedDigits[digit] = false;
      }

      // No valid digit found for current letter
      return false;
    };

    // Start backtracking from first letter with sum 0
    return backtrack(0, 0);
  }
};
