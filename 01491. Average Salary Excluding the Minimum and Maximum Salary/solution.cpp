/**
 * Problem: 1491. Average Salary Excluding the Minimum and Maximum Salary
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  double average(vector<int> &salary) {
    // Get array length
    int n = salary.size();

    // Find minimum and maximum salary
    int minVal = *min_element(salary.begin(), salary.end()),
        maxVal = *max_element(salary.begin(), salary.end());

    // Calculate sum of all salaries
    double sum = 0;

    // Loop through the salary array to calculate the total sum
    for (int i = 0; i < n; i++)
      sum += salary[i];

    // Subtract min and max, divide by remaining count
    sum -= minVal + maxVal;
    n -= 2;

    // Return average excluding min and max
    return (double)sum / n;
  }
};
