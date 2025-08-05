/**
 * Problem: 1108. Defanging an IP Address
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func defangIPaddr(address string) string {
	return strings.ReplaceAll(address, ".", "[.]")
}
