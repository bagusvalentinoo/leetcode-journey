/**
 * Problem: 3754. Concatenate Non-Zero Digits and Multiply by Sum I
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution
{
public:
  long long sumAndMultiply(int n)
  {
    // Variable to store sum of non-zero digits
    int digitSum = 0;
    // Variable to store reversed number (excluding zeros)
    long long reversedNumber = 0;

    // Convert number to string for digit-by-digit processing
    string numberString = to_string(n);

    // Process each digit from left to right (most significant to least)
    for (int i = 0; i < numberString.length(); i++)
    {
      // Check if current digit is non-zero
      if (numberString[i] - '0' != 0)
      {
        // Add current digit to sum
        digitSum += numberString[i] - '0';
        // Build reversed number by appending current digit
        reversedNumber = reversedNumber * 10 + (numberString[i] - '0');
      }
    }

    // Return product of reversed number and sum of non-zero digits
    return digitSum * reversedNumber;
  }
};
