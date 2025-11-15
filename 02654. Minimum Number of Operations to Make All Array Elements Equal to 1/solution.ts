/**
 * Problem: 2654. Minimum Number of Operations to Make All Array Elements Equal to 1
 *
 * Difficulty: Medium
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Returns the minimum operations to achieve GCD 1 in the array
 *
 * @param nums - Input array
 *
 * @returns - Minimum operations or -1
 */
const minOperations = (nums: number[]): number => {
  const n = nums.length

  let ones = 0

  for (let i = 0; i < n; i++) if (nums[i] === 1) ones++

  if (ones > 0) return n - ones

  let all = gcd(nums[0], nums[1])

  for (let i = 2; i < n; i++) all = gcd(all, nums[i])

  if (all !== 1) return -1

  let answer = Infinity

  for (let i = 0; i < n - 1; i++) {
    let state = gcd(nums[i], nums[i + 1])

    let j = i + 2

    while (j < n && state !== 1) {
      state = gcd(state, nums[j])
      j++
    }

    if (state !== 1) break

    const k = j - i

    answer = Math.min(answer, (k - 1) * 2 + (n - k))
  }

  return answer
}

/**
 * Calculates the greatest common divisor (GCD) of two numbers
 *
 * @param x - The first number
 * @param y - The second number
 *
 * @returns - The GCD of x and y
 */
const gcd = (x: number, y: number): number => {
  let a = x,
    b = y

  while (b !== 0) {
    const temp = b

    b = a % b
    a = temp
  }

  return a
}
