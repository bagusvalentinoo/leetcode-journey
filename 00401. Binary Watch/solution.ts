/**
 * Problem: 401. Binary Watch
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Counts number of 1 bits in binary representation of a number
 *
 * @param num - Number to count bits for
 *
 * @returns Number of 1 bits in the binary representation
 */
const countBits = (num: number): number => {
  let bitCount = 0

  // Iterate through each bit until number becomes 0
  while (num) {
    // Add least significant bit
    bitCount += num & 1
    // Shift right to process next bit
    num >>= 1
  }

  return bitCount
}

/**
 * Generates all possible times on a binary watch with given number of LEDs on
 *
 * @param turnedOn - Number of LEDs that are currently on
 *
 * @returns All possible times the watch could represent
 */
const readBinaryWatch = (turnedOn: number): string[] => {
  const validTimes: string[] = []

  // Hours range from 0 to 11, minutes from 0 to 59
  for (let hour = 0; hour < 12; hour++) {
    for (let minute = 0; minute < 60; minute++) {
      // Check if total LEDs on equals turnedOn count
      if (countBits(hour) + countBits(minute) === turnedOn) {
        // Format time with leading zero for minutes < 10
        validTimes.push(`${hour}:${minute < 10 ? '0' + minute : minute}`)
      }
    }
  }

  return validTimes
}
