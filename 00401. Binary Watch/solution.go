/**
 * Problem: 401. Binary Watch
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func readBinaryWatch(turnedOn int) []string {
    // Initialize result slice
    var result []string
    
    // Hours range from 0 to 11, minutes from 0 to 59
    for hour := 0; hour < 12; hour++ {
        for minute := 0; minute < 60; minute++ {
            // Check if total LEDs on equals turnedOn count
            if bitCount(hour)+bitCount(minute) == turnedOn {
                // Build time string
                time := strconv.Itoa(hour) + ":"
                
                // Add leading zero for minutes less than 10
                if minute < 10 {
                    time += "0"
                }
                
                // Append minute to time string
                time += strconv.Itoa(minute)
                
                // Add valid time to result
                result = append(result, time)
            }
        }
    }
    
    return result
}

// bitCount counts number of 1 bits in binary representation
func bitCount(n int) int {
    count := 0
    
    // Iterate through each bit until number becomes 0
    for n > 0 {
        // Add least significant bit to count
        count += n & 1
        
        // Shift right to process next bit
        n >>= 1
    }
    
    return count
}
