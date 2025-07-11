/**
 * Problem: 2402. Meeting Rooms III
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 87 ms (Beats 100%)
 */

/**
 * Finds the room with the most meetings
 *
 * @param {number} n - Number of rooms
 * @param {number[][]} meetings - Array of [start, end] times
 *
 * @returns {number} - Room index with most meetings
 */
const mostBooked = (n, meetings) => {
  // Initialize array to track when each room becomes available (0 means immediately available)
  const roomAvaliablityTime = new Array(n).fill(0)
  // Initialize array to count meetings held in each room
  const meetingCount = new Array(n).fill(0)

  // Sort meetings by start time to process them chronologically
  meetings.sort((a, b) => a[0] - b[0])

  // Process each meeting in chronological order
  for (let i = 0; i < meetings.length; i++) {
    // Track the earliest availability time among all rooms
    let minAvaliblityTime = Infinity
    // Track which room has the earliest availability time
    let minRoomNum = 0
    // Flag to check if we found an immediately available room
    let foundRoom = false

    // Check each room to find the best available option
    for (let j = 0; j < roomAvaliablityTime.length; j++) {
      // If room is available at or before meeting start time
      if (roomAvaliablityTime[j] <= meetings[i][0]) {
        // Mark that we found an available room
        foundRoom = true
        // Update room availability to meeting end time
        roomAvaliablityTime[j] = meetings[i][1]
        // Increment meeting count for this room
        meetingCount[j] += 1

        // Use first available room (lowest index) and stop searching
        break
      }

      // Track room with earliest availability time for fallback
      if (minAvaliblityTime > roomAvaliablityTime[j]) {
        minAvaliblityTime = roomAvaliablityTime[j]
        minRoomNum = j
      }
    }

    // If no room was immediately available, use the room that becomes available earliest
    if (!foundRoom) {
      // Extend the room's availability by the meeting duration
      roomAvaliablityTime[minRoomNum] += meetings[i][1] - meetings[i][0]
      // Increment meeting count for this room
      meetingCount[minRoomNum] += 1
    }
  }

  // Initialize variables to track room with maximum meetings
  let maxMeeting = 0
  let numRoom = 0

  // Find the room with the most meetings (lowest index in case of tie)
  for (let i = 0; i < meetingCount.length; i++) {
    // Update if current room has more meetings than previous maximum
    if (meetingCount[i] > maxMeeting) {
      maxMeeting = meetingCount[i]
      numRoom = i
    }
  }

  // Return the room number with the most meetings
  return numRoom
}
