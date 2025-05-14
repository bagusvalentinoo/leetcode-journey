/**
 * Problem: 3337. Total Characters in String After Transformations II
 *
 * Difficulty: Hard
 *
 * Language: Go
 *
 * Performance: Runtime - 45 ms (Beats 100%)
 */

func lengthAfterTransformations(s string, t int, nums []int) int {
	// Define modulus for large number arithmetic
	const MOD = 1000000007
	// Count frequency of each character in input string
	var freq [26]int64

	for _, ch := range s {
		freq[ch-'a']++
	}

	// Create transformation matrix where baseM[i][j] represents how many ways
	// character i can transform to character j in one step
	var baseM [26][26]int64

	for i := 0; i < 26; i++ {
		for k := 1; k <= nums[i]; k++ {
			j := (i + k) % 26
			baseM[i][j]++
		}
	}

	// Function to multiply two matrices
	multiply := func(A, B [26][26]int64) [26][26]int64 {
		var c [26][26]int64

		for i := 0; i < 26; i++ {
			for k := 0; k < 26; k++ {
				aik := A[i][k]

				if aik == 0 {
					continue
				}

				for j := 0; j < 26; j++ {
					c[i][j] = (c[i][j] + aik*B[k][j]) % MOD
				}
			}
		}
		return c
	}

	// Calculate matrix raised to power t using binary exponentiation
	matrixPower := func(M [26][26]int64, exp int) [26][26]int64 {
		var res [26][26]int64

		for i := 0; i < 26; i++ {
			res[i][i] = 1
		}

		base := M

		for exp > 0 {
			if exp&1 == 1 {
				res = multiply(res, base)
			}

			base = multiply(base, base)
			exp >>= 1
		}

		return res
	}
	
	// Get transformation matrix after t steps
	mt := matrixPower(baseM, t)
	var ans int64

	// Calculate total characters by summing frequency * transformation count
	for i := 0; i < 26; i++ {
		fi := freq[i]

		if fi == 0 {
			continue
		}

		for j := 0; j < 26; j++ {
			ans = (ans + fi*mt[i][j]) % MOD
		}
	}
	
	return int(ans)
}