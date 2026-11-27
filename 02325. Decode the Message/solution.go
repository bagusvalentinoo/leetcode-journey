/**
 * Problem: 2325. Decode the Message
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func decodeMessage(key string, message string) string {
	// Store each key letter's decoded alphabet letter
	substitutions := [26]byte{}
	decodedLetter := byte('a')

	// Build the substitution table from first appearances in the key
	for i := range key {
		character := key[i]
		if character != ' ' && substitutions[character-'a'] == 0 {
			substitutions[character-'a'] = decodedLetter
			decodedLetter++
		}
	}

	// Decode each message letter while preserving spaces
	decodedMessage := []byte(message)
	for i, character := range decodedMessage {
		if character != ' ' {
			decodedMessage[i] = substitutions[character-'a']
		}
	}

	// Return the decoded message
	return string(decodedMessage)
}
