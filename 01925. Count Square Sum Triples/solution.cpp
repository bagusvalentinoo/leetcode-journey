/**
 * Problem: 1925. Count Square Sum Triples
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  int countTriples(int n) {
    // Track the number of ordered triples generated from primitive triples
    int count = 0;

    // Generate primitive Pythagorean triples using Euclid's formula
    for (int u = 2; u <= sqrt(n); u++) {
      // Select the smaller Euclid parameter
      for (int v = 1; v < u; v++) {
        // Skip parameters with equal parity or a common divisor
        if (~(u - v) & 1 || gcd(u, v) != 1)
          continue;

        // Calculate the hypotenuse squared for this primitive triple
        int hypotenuseSquared = u * u + v * v;

        // Ignore triples whose hypotenuse exceeds the limit
        if (hypotenuseSquared > n)
          continue;

        // Count every scaled triple and both leg orderings
        count += (n / hypotenuseSquared) << 1;
      }
    }

    // Return the total number of ordered square triples
    return count;
  }
};
