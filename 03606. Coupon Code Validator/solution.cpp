/**
 * Problem: 3606. Coupon Code Validator
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  // Custom comparator for sorting pairs by category priority then code
  // alphabetically
  struct PairComparator {
    bool operator()(const std::pair<std::string, std::string> &firstPair,
                    const std::pair<std::string, std::string> &secondPair) {
      // If categories are different, compare by category priority
      if (firstPair.first != secondPair.first) {
        // Priority order: electronics > grocery > pharmacy > restaurant
        if (firstPair.first == "electronics" ||
            secondPair.first == "electronics")
          return firstPair.first == "electronics" ? true : false;
        else if (firstPair.first == "grocery" || secondPair.first == "grocery")
          return firstPair.first == "grocery" ? true : false;
        else if (firstPair.first == "pharmacy" ||
                 secondPair.first == "pharmacy")
          return firstPair.first == "pharmacy" ? true : false;
        else if (firstPair.first == "restaurant" ||
                 secondPair.first == "restaurant")
          return firstPair.first == "restaurant" ? true : false;
      }

      // If categories are same, compare by code alphabetically
      return firstPair.second < secondPair.second;
    }
  };

  std::vector<std::string>
  validateCoupons(std::vector<std::string> &code,
                  std::vector<std::string> &businessLine,
                  std::vector<bool> &isActive) {
    // If no coupons to process, return empty vector
    if (code.size() < 1)
      return code;

    // Vector to store final result
    std::vector<std::string> validCoupons{};
    // Vector to store pairs of (category, code) for sorting
    std::vector<std::pair<std::string, std::string>> categoryCodePairs{};

    // Iterate through all coupons
    for (unsigned index = 0; index < code.size(); index++) {
      // Flag to track if code contains punctuation
      bool hasNoPunctuation = true;

      // Check if coupon is active and code is not empty
      if (isActive[index] && !code[index].empty()) {
        // Check if business line is one of the valid categories
        if (businessLine[index] == "electronics" ||
            businessLine[index] == "grocery" ||
            businessLine[index] == "pharmacy" ||
            businessLine[index] == "restaurant") {

          // Validate coupon code characters
          for (unsigned charIndex = 0; charIndex < code[index].size();
               charIndex++) {
            // Skip underscore characters (allowed)
            if (code[index][charIndex] == '_')
              continue;

            // If punctuation found, mark as invalid
            if (std::ispunct(code[index][charIndex])) {
              hasNoPunctuation = false;
              // Exit loop early
              break;
            }
          }

          // If code has no punctuation, add to valid pairs
          if (hasNoPunctuation)
            categoryCodePairs.push_back({businessLine[index], code[index]});
        }
      }
    }

    // Sort pairs using custom comparator
    std::sort(categoryCodePairs.begin(), categoryCodePairs.end(),
              PairComparator());

    // Extract sorted coupon codes from pairs
    if (categoryCodePairs.size() > 0) {
      for (auto pair : categoryCodePairs)
        validCoupons.push_back(pair.second);
    }

    // Return vector of valid coupon codes
    return validCoupons;
  }
};
