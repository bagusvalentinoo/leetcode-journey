/**
 * Problem: 3136. Valid Word
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Validates a word: must contain at least one consonant, one vowel, and be 3+ characters long
 *
 * @param {string} word - String to validate
 *
 * @returns {boolean} - True if valid, false otherwise
 */
const isValid = (word) =>
  /^(?=.*[b-df-hj-np-tv-z])(?=.*[aieou])[a-z0-9]{3,}$/i.test(word)
