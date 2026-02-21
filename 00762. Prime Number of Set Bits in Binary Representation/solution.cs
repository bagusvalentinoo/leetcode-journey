/**
 * Problem: 762. Prime Number of Set Bits in Binary Representation
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 2 ms (Beats 100%)
 */

public class Solution
{
  // Mask for prime numbers up to 32 (since max set bits for int is 32)
  // 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31 (0x)
  private uint _primesMask = 0xa08a28acU;

  public int CountPrimeSetBits(int left, int right)
  {
    // Initialize count to 0
    var count = 0;

    // Iterate through each number in the range
    for (var i = left; i <= right; i++)
    {
      // If the number of set bits is not prime, continue
      if ((_primesMask & (1U << (int)System.Runtime.Intrinsics.X86.Popcnt.PopCount((uint)i))) == 0)
        continue;

      // Increment count
      count++;
    }

    // Return count
    return count;
  }
}
