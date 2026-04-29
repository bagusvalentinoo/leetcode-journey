/**
 * Problem: 3606. Coupon Code Validator
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public IList<string> ValidateCoupons(string[] code, string[] businessLine, bool[] isActive)
  {
    // Create 4 buckets for each business category
    var buckets = new List<string>[]
    {
      new List<string>(), // electronics
      new List<string>(), // grocery
      new List<string>(), // pharmacy
      new List<string>(), // restaurant
    };

    // Iterate through each coupon
    for (int i = 0; i < code.Length; i++)
    {
      // Skip if coupon is inactive or code is empty/null
      if (!isActive[i] || string.IsNullOrEmpty(code[i]))
        continue;

      // Determine bucket index based on business line
      int bucketIndex = businessLine[i] switch
      {
        "electronics" => 0,
        "grocery" => 1,
        "pharmacy" => 2,
        "restaurant" => 3,
        _ => -1,
      };

      // Skip if business line is not recognized
      if (bucketIndex == -1)
        continue;

      // Validate coupon code format and add to appropriate bucket
      if (IsValidCode(code[i]))
        buckets[bucketIndex].Add(code[i]);
    }

    // List to store final sorted results
    List<string> result = new List<string>();

    // Process each bucket in category order
    foreach (var bucket in buckets)
    {
      // Sort codes in each bucket alphabetically
      bucket.Sort(StringComparer.Ordinal);

      // Add sorted codes to result list
      result.AddRange(bucket);
    }

    // Return combined sorted results
    return result;
  }

  // Helper method to validate coupon code format
  private bool IsValidCode(string couponCode)
  {
    // Check each character in the coupon code
    foreach (char character in couponCode)
    {
      // Reject if character is not alphanumeric and not underscore
      if (!char.IsLetterOrDigit(character) && character != '_')
        return false;
    }

    // All characters are valid
    return true;
  }
}
