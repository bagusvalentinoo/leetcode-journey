/**
 * Problem: 2566. Maximum Difference by Remapping a Digit
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func minMaxDifference(num int) int {
	s := strconv.Itoa(num)
	var ch rune
	for _, c := range s {
		if c != '9' {
			ch = c
			break
		}
	}
	mx := ""
	if ch != 0 {
		for _, c := range s {
			if c == ch {
				mx += "9"
			} else {
				mx += string(c)
			}
		}
	} else {
		mx = s
	}
	ch0 := rune(s[0])
	mn := ""
	for _, c := range s {
		if c == ch0 {
			mn += "0"
		} else {
			mn += string(c)
		}
	}
	mxVal, _ := strconv.Atoi(mx)
	mnVal, _ := strconv.Atoi(mn)
	return mxVal - mnVal
}