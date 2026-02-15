/**
 * Problem: 67. Add Binary
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution {
    public string AddBinary(string a, string b) {
        // Handle cases where one string is "0"
        if (a == "0") return b;
        if (b == "0") return a;
        
        // Determine maximum length for result array
        int maxLen = a.Length > b.Length ? a.Length : b.Length;
        
        // Create result array with extra space for possible carry
        char[] result = new char[maxLen + 1];
        int charCounter = maxLen;
        
        // Track carry flag
        bool carry = false;
        int i = 1;
        
        // Process both strings simultaneously while both have digits
        while (a.Length - i >= 0 && b.Length - i >= 0) {
            // Case: both digits are 0
            if (a[a.Length - i] == '0' && b[b.Length - i] == '0') {
                if (carry) result[charCounter--] = '1';
                else result[charCounter--] = '0';
                
                carry = false;
            } 
            // Case: both digits are 1
            else if (a[a.Length - i] == '1' && b[b.Length - i] == '1') {
                if (carry) result[charCounter--] = '1';
                else result[charCounter--] = '0';
                
                carry = true;
            } 
            // Case: one digit is 1, the other is 0
            else {
                if (carry) result[charCounter--] = '0';
                else result[charCounter--] = '1';
            }
            
            i++;
        }
        
        // Determine which string is longer (remaining digits)
        string remaining = a.Length > b.Length ? a : b;
        
        // Process remaining digits from the longer string
        while (remaining.Length - i >= 0) {
            if (carry) {
                // Handle carry with remaining digit
                if (remaining[remaining.Length - i] == '1') result[charCounter--] = '0';
                else {
                    result[charCounter--] = '1';
                    carry = false;
                }
            } else {
                // No carry, just copy remaining digit
                result[charCounter--] = remaining[remaining.Length - i];
            }
            i++;
        }
        
        // Return result without leading zero if no final carry
        if (!carry) return new string(result, 1, maxLen);
        
        // Include final carry at the beginning
        result[charCounter] = '1';
        return new string(result);
    }
}
