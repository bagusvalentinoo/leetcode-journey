/**
 * Problem: 3542. Minimum Operations to Convert All Elements to Zero
 *
 * Difficulty: Medium
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution
{
private:
  // Define a constant for the maximum size of the stack
  static constexpr uint MAXN = 100'000;

  // Declare a static stack array to store intermediate values
  static uint stk[MAXN + 1];

public:
  static int minOperations(vector<int> &nums) noexcept __attribute__((hot))
  {
    // Initialize variables:
    // k: count of operations, m: unused, l: stack pointer, p: previous value
    uint k = 0, m = 0, l = 1, p = MAXN + 1;

    // Iterate through each value in the input vector nums
    for (const uint v : nums)
    {
      // Adjust the stack pointer and previous value until p <= v
      while (p > v)
      {
        // Update p to the top of the stack
        p = stk[l - 1];
        // Decrement the stack pointer if p > v
        l -= p > v;
      }

      // Push the current value v onto the stack
      stk[l] = v;

      // Increment the stack pointer if p < v
      l += p < v;

      // Increment the operation count if p < v
      k += p < v;

      // Update p to the current value v
      p = v;
    }

    // Return the total count of operations
    return k;
  }
};

// Define the static stack array outside the class
uint Solution::stk[MAXN + 1];