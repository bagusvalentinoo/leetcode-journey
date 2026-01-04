/**
 * Problem: 1390. Four Divisors
 *
 * Difficulty: Medium
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

// Global constants and variables
const int N = 316;         // Square root of maximum possible number (100000)
bitset<N + 1> isPrime = 0; // Bitset to track prime numbers up to N
vector<int> prime;         // Vector to store prime numbers
int Div4[100001];          // Cache array to store results for memoization

class Solution {
public:
    // Static sieve method to generate prime numbers and initialize cache
    static void Sieve() {
        // Check if sieve has already been executed
        if (isPrime[2])
            return;

        // Initialize all numbers as prime
        isPrime.set();
        // Initialize cache with -1 (uncomputed)
        memset(Div4, -1, sizeof(Div4));
        // Set 0 and 1 as not prime
        isPrime[0] = isPrime[1] = 0;
        // Numbers 0 and 1 have 0 divisors
        Div4[0] = Div4[1] = 0;

        // Calculate square root of N for optimization
        int Nsqrt = sqrt(N - 1);

        // Sieve of Eratosthenes for odd numbers
        for (int p = 2; p <= Nsqrt; p += 1 + (p & 1)) {
            if (isPrime[p]) {
                // Prime numbers have exactly 2 divisors
                Div4[p] = 0;
                prime.push_back(p);
                // Mark multiples of p as not prime
                for (int i = p * p; i < N; i += p)
                    isPrime[i] = 0;
            }
        }

        // Collect remaining prime numbers greater than Nsqrt
        for (int i = Nsqrt + ((Nsqrt & 1) == 0); i < N; i += 2) {
            if (isPrime[i])
                prime.push_back(i);
        }
    }

    // Helper function to calculate sum for numbers with exactly 4 divisors
    static int sum4Div(int x) {
        // Return cached result if already computed
        if (Div4[x] != -1)
            return Div4[x];

        // Temporary variable for factorization
        int y = x;
        // Initialize sum with 1 and x (always divisors)
        int sum = 1 + x;
        // Count of distinct prime factors
        int cntPF = 0;
        // Square root of x for optimization
        int xsqrt = sqrt(x);

        // Check prime factors using precomputed prime list
        for (int p : prime) {
            // Stop if prime exceeds square root
            if (p > xsqrt)
                break;
            // Skip if not a divisor
            if (y % p)
                continue;

            // Count exponent of prime factor
            int e = 0;
            while (y % p == 0) {
                y /= p;
                e++;
            }
            cntPF++;

            // Case 1: Number is p^3 (cube of a prime)
            if (e == 3 && y == 1 && cntPF == 1)
                return Div4[x] = 1 + p + p * p + p * p * p;

            // Invalid cases: exponent > 1 (except cube) or more than 2 prime
            // factors
            if (e > 1 || cntPF > 2)
                return Div4[x] = 0;

            // Add prime factor to sum
            sum += p;
        }

        // Handle remaining prime factor if exists
        if (y > 1) {
            cntPF++;
            sum += y;
        }

        // Case 2: Number is product of two distinct primes (p*q)
        // Return sum if exactly 2 prime factors, otherwise 0
        return Div4[x] = (cntPF == 2) ? sum : 0;
    }

    // Main function to calculate sum of four divisors
    static int sumFourDivisors(vector<int>& nums) {
        // Generate primes and initialize cache
        Sieve();

        // Calculate total sum
        int ans = 0;
        for (int x : nums)
            ans += sum4Div(x);

        return ans;
    }
};
