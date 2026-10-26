/**
 * Problem: 2124. Check if All A's Appears Before All B's
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func checkString(s string) bool {
  // Return whether the invalid adjacent ordering is absent
  return !strings.Contains(s, "ba")
}
