/**
 * Problem: 1291. Sequential Digits
 *
 * Difficulty: Medium
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution
{
public:
  vector<int> sequentialDigits(int low, int high)
  {
    // Define a string containing sequential digits from 1 to 9
    string sequentialString = "123456789";

    // Initialize a vector to store the resulting sequential digits
    vector<int> result;

    // Outer loop to iterate through each character in the string
    for (int start = 0; start < sequentialString.length(); start++)
    {
      // Inner loop to create substrings starting from the current character
      for (int end = start + 1; end < sequentialString.length(); end++)
      {
        // Extract the substring and convert it to an integer
        int number = stoi(sequentialString.substr(start, end - start + 1));

        // Break the loop if the number exceeds the upper bound
        if (number > high)
          break;
        // Add the number to the result vector if it is within the range
        if (low <= number)
          result.push_back(number);
      }
    }

    // Sort the result vector to ensure the numbers are in ascending order
    sort(result.begin(), result.end());

    // Return the vector containing all sequential digits within the specified range
    return result;
  }
};
