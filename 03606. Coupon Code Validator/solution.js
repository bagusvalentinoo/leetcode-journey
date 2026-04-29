/**
 * Problem: 3606. Coupon Code Validator
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

// List of valid business categories
const validCategories = ['electronics', 'grocery', 'pharmacy', 'restaurant']

// Regular expression to validate coupon code format (alphanumeric and underscore only)
const couponCodeRegex = /^\w+$/

/**
 * Validates and sorts coupons based on category and code
 *
 * @param {string[]} code - Array of coupon codes
 * @param {string[]} businessLine - Array of business line categories
 * @param {boolean[]} isActive - Array indicating if coupon is active
 *
 * @returns {string[]} Sorted list of valid coupon codes
 */
const validateCoupons = (code, businessLine, isActive) => {
  // Get number of coupons to process
  const totalCoupons = code.length

  // Array to store encoded valid coupon indices
  const encodedValidCoupons = []

  // Iterate through each coupon to filter valid ones
  for (
    let couponIndex = 0, categoryId = -1;
    couponIndex < totalCoupons;
    ++couponIndex
  ) {
    // Check if coupon is active, category exists, and code format is valid
    if (
      isActive[couponIndex] &&
      (categoryId = validCategories.indexOf(businessLine[couponIndex])) !==
        -1 &&
      couponCodeRegex.test(code[couponIndex])
    )
      // Encode coupon index and category ID into a single number
      // Lower 8 bits store index, higher bits store category ID
      encodedValidCoupons.push(couponIndex | (categoryId << 8))
  }

  // Sort encoded coupons by category first, then by code alphabetically
  encodedValidCoupons.sort((firstCoupon, secondCoupon) => {
    // Extract category IDs from encoded values
    const categoryDifference = (firstCoupon >> 8) - (secondCoupon >> 8)

    // If categories differ, sort by category
    if (categoryDifference !== 0) return categoryDifference

    // Extract original coupon indices from encoded values
    const firstCouponCode = code[firstCoupon & 255],
      secondCouponCode = code[secondCoupon & 255]

    // Sort by coupon code alphabetically
    if (firstCouponCode > secondCouponCode) return 1
    if (firstCouponCode < secondCouponCode) return -1

    // If codes are equal, maintain order
    return 0
  })

  // Array to store final valid coupon codes
  const validCouponCodes = []

  // Get number of valid coupons
  const validCount = encodedValidCoupons.length

  // Extract coupon codes from sorted encoded values
  for (let i = 0; i < validCount; ++i)
    validCouponCodes.push(code[encodedValidCoupons[i] & 255])

  // Return sorted list of valid coupon codes
  return validCouponCodes
}
