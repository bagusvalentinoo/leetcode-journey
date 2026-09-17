/**
 * Problem: 1700. Number of Students Unable to Eat Lunch
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  int countStudents(vector<int> &students, vector<int> &sandwiches) {
    // Count students preferring circular (0) and square (1)
    int circularStudents = 0, squareStudents = 0;

    // Tally each student preference
    for (int preference : students) {
      // Increment matching preference bucket
      if (preference == 0)
        circularStudents++;
      else
        squareStudents++;
    }

    // Serve sandwiches from top of stack
    for (int sandwich : sandwiches) {
      // Handle circular sandwich request
      if (sandwich == 0) {
        // No circular lover left, remaining square lovers cannot eat
        if (circularStudents == 0)
          return squareStudents;

        // One circular lover takes this sandwich
        circularStudents--;
      } else {
        // No square lover left, remaining circular lovers cannot eat
        if (squareStudents == 0)
          return circularStudents;

        // One square lover takes this sandwich
        squareStudents--;
      }
    }

    // All sandwiches taken, nobody left hungry
    return 0;
  }
};
