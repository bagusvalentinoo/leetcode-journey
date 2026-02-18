/**
 * Problem: 401. Binary Watch
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
    vector<string> readBinaryWatch(int turnedOn) {
        // Handle edge cases
        if (turnedOn == 0)
            return {"0:00"};
        if (turnedOn > 8)
            return {};

        vector<string> validTimes;

        // Initialize bitmask with turnedOn least significant bits set to 1
        // Example: if turnedOn=3, mask = 111 (binary)
        int currentMask = (1 << turnedOn) - 1;

        // Generate all combinations of turnedOn bits among 10 positions
        while (currentMask < (1 << 10)) {
            // Check if current combination represents valid time
            string time = isValidTime(currentMask);
            if (!time.empty())
                validTimes.push_back(time);

            // Gosper's hack: find next combination with same number of set bits
            // Algorithm steps:
            // 1. Find the rightmost contiguous block of 1s
            // 2. Move the leftmost bit of that block one position left
            // 3. Shift the remaining bits to the far right
            int rightmostBit = currentMask & -currentMask;
            int nextMask = currentMask + rightmostBit;
            currentMask =
                (((nextMask ^ currentMask) >> 2) / rightmostBit) | nextMask;
        }

        return validTimes;
    }

    // Validates if a bitmask represents a valid time on binary watch
    // First 6 bits (0-5) represent minutes, next 4 bits (6-9) represent hours
    string isValidTime(int mask) {
        // Extract hour from bits 6-9
        int hour = mask >> 6;

        // Extract minute from bits 0-5
        int minute = mask & 63; // 63 = 111111 (6 bits)

        // Check if time is valid
        if (hour >= 12 || minute >= 60)
            return "";

        // Format time string with leading zero for minutes
        return to_string(hour) + ":" + (minute < 10 ? "0" : "") +
               to_string(minute);
    }
};
