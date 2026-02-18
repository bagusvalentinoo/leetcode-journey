/**
 * Problem: 401. Binary Watch
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution {
    public IList<string> ReadBinaryWatch(int turnedOn) {
        // Initialize result list
        IList<string> validTimes = new List<string>();
        
        // Hours range from 0 to 11, minutes from 0 to 59
        for (int hour = 0; hour < 12; hour++) {
            for (int minute = 0; minute < 60; minute++) {
                // Check if total LEDs on equals turnedOn count
                if (CountBits(hour) + CountBits(minute) == turnedOn) {
                    // Format time with leading zero for minutes < 10
                    validTimes.Add($"{hour}:{minute:D2}");
                }
            }
        }
        
        return validTimes;
    }
    
    // Counts number of 1 bits using optimized bit manipulation (popcount)
    private static int CountBits(int number) {
        // Count bits in 2-bit groups
        number = number - ((number >> 1) & 0x55555555);
        
        // Count bits in 4-bit groups
        number = (number & 0x33333333) + ((number >> 2) & 0x33333333);
        
        // Count bits in 8-bit groups
        number = (number + (number >> 4)) & 0x0f0f0f0f;
        
        // Sum all 8-bit groups
        number = number + (number >> 8);
        number = number + (number >> 16);
        
        // Mask to get only the lower 6 bits (maximum 32)
        return number & 0x3f;
    }
}
