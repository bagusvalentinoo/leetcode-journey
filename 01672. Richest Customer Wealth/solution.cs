/**
 * Problem: 1672. Richest Customer Wealth
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int MaximumWealth(int[][] accounts)
  {
    // Initialize answer to track maximum wealth
    int maxWealth = 0;

    // Iterate through each customer
    for (int i = 0; i < accounts.Length; i++)
    {
      // Calculate total wealth for the current customer
      int totalWealth = 0;

      // Sum the wealth across all accounts for the current customer
      foreach (int money in accounts[i])
        totalWealth += money;

      // Update maximum wealth if current customer is richer
      if (totalWealth > maxWealth)
        maxWealth = totalWealth;
    }

    // Return the maximum wealth found
    return maxWealth;
  }
}
