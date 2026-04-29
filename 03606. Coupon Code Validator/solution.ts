/**
 * Problem: 3606. Coupon Code Validator
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

// List of valid business categories
const validCategories: string[] = [
  'electronics',
  'grocery',
  'pharmacy',
  'restaurant'
]

// Regular expression to validate coupon code format (alphanumeric and underscore only)
const couponCodeRegex: RegExp = /^\w+$/

/**
 * Validates and sorts coupons based on category and code
 *
 * @param code - Array of coupon codes
 * @param businessLine - Array of business line categories
 * @param isActive - Array indicating if coupon is active
 *
 * @returns Sorted list of valid coupon codes
 */
const validateCoupons = (
  code: string[],
  businessLine: string[],
  isActive: boolean[]
): string[] => {
  // Get number of coupons to process
  const totalCoupons: number = code.length

  // Array to store encoded valid coupon indices
  const encodedValidCoupons: number[] = []

  // Iterate through each coupon to filter valid ones
  for (
    let couponIndex: number = 0, categoryId: number = -1;
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
  encodedValidCoupons.sort(
    (firstCoupon: number, secondCoupon: number): number => {
      // Extract category IDs from encoded values
      const categoryDifference: number =
        (firstCoupon >> 8) - (secondCoupon >> 8)

      // If categories differ, sort by category
      if (categoryDifference !== 0) return categoryDifference

      // Extract the original coupon codes using lower 8 bits as index
      const firstCouponCode: string = code[firstCoupon & 255],
        secondCouponCode: string = code[secondCoupon & 255]

      // Sort in ascending alphabetical order: return 1 if first is greater
      if (firstCouponCode > secondCouponCode) return 1
      // Return -1 if first is smaller
      if (firstCouponCode < secondCouponCode) return -1

      // If codes are equal, maintain order
      return 0
    }
  )

  // Array to store final valid coupon codes
  const validCouponCodes: string[] = []

  // Get number of valid coupons
  const validCount: number = encodedValidCoupons.length

  // Extract coupon codes from sorted encoded values
  for (let i: number = 0; i < validCount; ++i)
    validCouponCodes.push(code[encodedValidCoupons[i] & 255])

  // Return sorted list of valid coupon codes
  return validCouponCodes
}
