/**
 * Problem: 1455. Check If a Word Occurs As a Prefix of Any Word in a Sentence
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution
{
public:
  int isPrefixOfWord(string sentence, string searchWord)
  {
    // Split sentence into individual words
    vector<string> words;
    stringstream ss(sentence);
    string word;

    // Extract each word from the stringstream and add to vector
    while (ss >> word)
      words.push_back(word);

    // Check each word to see if it starts with searchWord
    for (int i = 0; i < words.size(); i++)
    {
      // If word has the prefix, return 1-indexed position
      if (words[i].find(searchWord) == 0)
        return i + 1;
    }

    // No word starts with searchWord
    return -1;
  }
};
