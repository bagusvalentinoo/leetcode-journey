/**
 * Problem: 67. Add Binary
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
    string addBinary(string a, string b) {
        // Convert binary strings to integers (handling large strings)
        // For very long binary strings, we need to process digit by digit
        string result = "";
        int carry = 0;
        int i = a.length() - 1;
        int j = b.length() - 1;

        // Process from rightmost digits
        while (i >= 0 || j >= 0 || carry) {
            int sum = carry;

            if (i >= 0)
                sum += a[i--] - '0';
            if (j >= 0)
                sum += b[j--] - '0';

            // Current digit is sum % 2, carry is sum / 2
            result = char(sum % 2 + '0') + result;
            carry = sum / 2;
        }

        return result;
    }
};
