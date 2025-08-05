/**
 * Problem: 1108. Defanging an IP Address
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 21 ms (Beats 100%)
 */

/**
 * Replaces '.' with '[.]' in an IPv4 address
 *
 * @param {string} address - IPv4 address
 *
 * @returns {string} - Defanged address
 */
const defangIPaddr = (address) => address.replace(/\./g, '[.]')
