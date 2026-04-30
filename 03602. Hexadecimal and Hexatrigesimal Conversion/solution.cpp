/**
 * Problem: 3602. Hexadecimal and Hexatrigesimal Conversion
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  string concatHex36(int n) {
    // Maximum possible length for concatenated result (square hex + cube
    // base36)
    int bufferLength = 12;

    // Character buffer to build result from right to left
    char resultBuffer[12];

    // Process cube value and convert to base36 (right to left)
    for (int cube = n * n * n; cube > 0; cube /= 36)
      resultBuffer[--bufferLength] = getCharFromDigit(cube % 36);

    // Process square value and convert to hexadecimal (right to left)
    for (int square = n * n; square > 0; square /= 16)
      resultBuffer[--bufferLength] = getCharFromDigit(square % 16);

    // Return string from the first filled position to the end
    return string(resultBuffer + bufferLength, 12 - bufferLength);
  }

private:
  // Convert numeric digit to character: 0-9 -> '0'-'9', 10-35 -> 'A'-'Z'
  char getCharFromDigit(int digit) {
    return digit <= 9 ? (char)('0' + digit) : (char)('A' + (digit - 10));
  }
};
