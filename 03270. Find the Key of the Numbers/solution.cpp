/**
 * Problem: 3270. Find the Key of the Numbers
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
  int generateKey(int num1, int num2, int num3)
  {
    // Convert to 4-digit string with leading zeros if needed
    string paddedNum1 = to_string(num1);
    string paddedNum2 = to_string(num2);
    string paddedNum3 = to_string(num3);

    // Pad with leading zeros to make 4 digits
    while (paddedNum1.length() < 4)
      paddedNum1 = "0" + paddedNum1;
    while (paddedNum2.length() < 4)
      paddedNum2 = "0" + paddedNum2;
    while (paddedNum3.length() < 4)
      paddedNum3 = "0" + paddedNum3;

    // String to build the result key
    string resultKey = "";

    // Compare digits at each position (0-3)
    for (int position = 0; position < 4; position++)
    {
      // Take the minimum digit among the three numbers at current position
      int digit1 = paddedNum1[position] - '0';
      int digit2 = paddedNum2[position] - '0';
      int digit3 = paddedNum3[position] - '0';

      resultKey += to_string(min(min(digit1, digit2), digit3));
    }

    // Convert result string back to integer and return
    return stoi(resultKey);
  }
};
