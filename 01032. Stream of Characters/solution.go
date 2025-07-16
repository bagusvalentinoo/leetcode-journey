/**
 * Problem: 1032. Stream of Characters
 *
 * Difficulty: Hard
 *
 * Language: Golang
 *
 * Performance: Runtime - 35 ms (Beats 100%)
 */

// StreamChecker implements a data structure that can efficiently check if any suffix
// of a stream of characters matches any of the given words using a suffix trie
type StreamChecker struct {
	trieRoot suffixTrie // Root node of the suffix trie containing all words
	curr     []byte     // Current stream of characters received so far
}

// Constructor initializes a new StreamChecker with the given words
// It builds a suffix trie where words are stored in reverse order
func Constructor(words []string) StreamChecker {
	// Create a new trie to store all words
	trie := newTrie()
	
	// Add each word to the trie (words are stored in reverse for suffix matching)
	for _, word := range words {
		trie.add(word)
	}

	// Return initialized StreamChecker with the trie and empty current stream
	return StreamChecker{
		trieRoot: trie,
		curr:     []byte{},
	}
}

// Query adds a new letter to the stream and checks if any suffix matches stored words
// Returns true if any suffix of the current stream matches any of the stored words
func (this *StreamChecker) Query(letter byte) bool {
	// Append the new letter to the current stream
	this.curr = append(this.curr, letter)
	
	// Search for any suffix match in the trie
	return this.trieRoot.search(this.curr)
}

// suffixTrie represents a trie node for storing words in reverse order
// This enables efficient suffix matching for the stream of characters
type suffixTrie struct {
	isEnd    bool               // Indicates if this node represents the end of a word
	children [26]*suffixTrie    // Array of child nodes for each lowercase letter (a-z)
}

// newTrie creates and returns a new empty trie node
// Initializes all children pointers to nil and sets isEnd to false
func newTrie() suffixTrie {
	return suffixTrie{
		isEnd:    false,                // Initially not the end of any word
		children: [26]*suffixTrie{},    // Initialize all children to nil
	}
}

// add inserts a word into the trie in reverse order
// This reverse insertion allows for efficient suffix matching during queries
func (s *suffixTrie) add(word string) {
	// Base case: if word is empty, mark current node as end of word
	if len(word) == 0 {
		s.isEnd = true
		return
	}

	// Get the length of the word for processing
	wordLen := len(word)
	
	// Take the last character and convert to array index (a=0, b=1, ..., z=25)
	nextChar := word[wordLen-1] - 'a'
	
	// Create new trie node if it doesn't exist for this character
	if s.children[nextChar] == nil {
		next := newTrie()
		s.children[nextChar] = &next
	}

	// Recursively add the remaining word (excluding the last character)
	s.children[nextChar].add(word[:wordLen-1])
}

// search checks if any suffix of the given word exists in the trie
// Returns true if any suffix matches a complete word stored in the trie
func (s *suffixTrie) search(word []byte) bool {
	// If current node marks end of a word, we found a match
	if s.isEnd {
		return true
	}

	// If no more characters to process and not at end of word, no match
	if len(word) == 0 {
		return false
	}

	// Get the length of the word for processing
	wordLen := len(word)
	
	// Take the last character and convert to array index (a=0, b=1, ..., z=25)
	nextChar := word[wordLen-1] - 'a'
	
	// If no child exists for this character, no match possible
	if s.children[nextChar] == nil {
		return false
	}

	// Recursively search with remaining word (excluding the last character)
	return s.children[nextChar].search(word[:wordLen-1])
}
