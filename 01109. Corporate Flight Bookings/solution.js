/**
 * Problem: 1109. Corporate Flight Bookings
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 1 ms (Beats 100%)
 */

/**
 * Calculate the total number of seats booked for each flight
 *
 * @param {number[][]} bookings - Array of [first, last, seats] bookings
 * @param {number} n - Number of flights
 *
 * @returns {number[]} - Total seats booked per flight
 */
const corpFlightBookings = (bookings, n) => {
  // Initialize result array with zeros for each flight (1 to n)
  const flightSeats = new Array(n).fill(0)

  // Process each booking using difference array technique
  for (const booking of bookings) {
    // Extract booking details: first flight, last flight, and number of seats
    const firstFlight = booking[0],
      lastFlight = booking[1],
      seatsBooked = booking[2]

    // Add seats at the start of the booking range (convert to 0-based index)
    flightSeats[firstFlight - 1] += seatsBooked

    // Subtract seats after the end of the booking range to mark the boundary
    if (lastFlight < n) flightSeats[lastFlight] -= seatsBooked
  }

  // Apply prefix sum to get actual seat counts for each flight
  for (let i = 1; i < n; i++) flightSeats[i] += flightSeats[i - 1]

  // Return the final array with total seats booked per flight
  return flightSeats
}
