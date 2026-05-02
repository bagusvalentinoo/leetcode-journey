/**
 * Problem: 788. Rotated Digits
 *
 * Difficulty: Medium
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  int rotatedDigits(int n) {
    // Digits that become different valid digits when rotated
    vector<int> rotatingDigits = {2, 5, 6, 9};
    // Digits that remain valid and the same when rotated (0, 1, 8)
    vector<int> sameDigits = {0, 1, 8};

    // All valid digits (rotating + same)
    vector<int> validDigits = {2, 5, 6, 9, 0, 1, 8};

    // Convert number to string for digit-by-digit processing
    string numberString = to_string(n);

    // Counter for valid numbers
    int validCount = 0;

    // Flag indicating if we've already placed a digit that changes upon
    // rotation
    bool hasRotatingDigit = false;

    // Process each digit position from left to right
    for (int position = 0; position < numberString.length(); position++) {
      // Get current digit at this position
      int currentDigit = numberString[position] - '0';

      // Counter for number of valid digits less than current digit
      int lessThanCount = 0;

      // Count how many valid digits are smaller than current digit
      for (int digit : validDigits) {
        // If valid digit is smaller, increment counter
        if (digit < currentDigit)
          lessThanCount++;
      }

      // Add count of all combinations where current digit is less than given
      // digit Multiply by all possible combinations for remaining positions
      validCount += lessThanCount * pow(validDigits.size(),
                                        numberString.length() - position - 1);

      // Subtract invalid combinations (those without any rotating digit) only
      // if we haven't placed a rotating digit yet
      if (!hasRotatingDigit) {
        // Counter for same digits less than current digit
        int sameLessCount = 0;

        // Count how many same digits are smaller than current digit
        for (int digit : sameDigits) {
          // If same digit is smaller, increment counter
          if (digit < currentDigit)
            sameLessCount++;
        }

        // Subtract combinations that have no rotating digit
        validCount -= sameLessCount * pow(sameDigits.size(),
                                          numberString.length() - position - 1);
      }

      // Flag to check if current digit is a rotating digit
      bool isRotating = false;

      // Check if current digit belongs to rotating digits list
      for (int digit : rotatingDigits) {
        // If current digit matches a rotating digit
        if (digit == currentDigit) {
          // Mark as rotating digit
          isRotating = true;

          // Exit loop early since we found a match
          break;
        }
      }

      // Flag to check if current digit is a valid same digit
      bool isValidSame = false;

      // Check if current digit belongs to same digits list
      for (int digit : sameDigits) {
        // If current digit matches a same digit
        if (digit == currentDigit) {
          // Mark as valid same digit
          isValidSame = true;

          // Exit loop early since we found a match
          break;
        }
      }

      // If current digit is a rotating digit, mark that we have one
      if (isRotating)
        hasRotatingDigit = true;
      // If current digit is not valid at all, stop processing further digits
      else if (!isValidSame)
        return validCount;
    }

    // Add 1 if we have a rotating digit (count the number itself)
    return validCount + (hasRotatingDigit ? 1 : 0);
  }
};
