/**
 * Problem: 2073. Time Needed to Buy Tickets
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  int timeRequiredToBuy(vector<int> &tickets, int k) {
    // Store the number of tickets the target person needs
    int targetTickets = tickets[k];
    // Track the total number of ticket purchases before the target person
    // leaves
    int time = 0;

    // Count each person's purchases before the target person finishes
    for (int i = 0; i < tickets.size(); i++) {
      // Limit people after the target to one fewer turn
      int maximumPurchases = targetTickets - (i > k ? 1 : 0);

      // Add this person's purchases to the total time
      time += min(tickets[i], maximumPurchases);
    }

    // Return the time when the target person buys their final ticket
    return time;
  }
};
