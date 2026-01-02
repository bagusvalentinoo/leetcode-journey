/**
 * Problem: 961. N-Repeated Element in Size 2N Array
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
    public int RepeatedNTimes(int[] nums)
    {
        // Calculate n based on the array length (array size is 2n)
        var n = nums.Length / 2;

        // Create a dictionary to store the frequency of each number
        var dict = new Dictionary<int, int>();
        
        // Iterate through each number in the input array
        foreach (var number in nums)
        {
            // Check if the number already exists in the dictionary
            if (dict.ContainsKey(number))
            {
                // If the number is already in the dictionary, it's the repeated element
                // No need to count frequencies - return immediately when first duplicate is found
                return number;
            }
            // If the number is not in the dictionary, add it with count 1
            else dict.Add(number, 1);
        }

        // Return 0 if no repeated element is found (should not happen per problem constraints)
        return 0;
    }
}