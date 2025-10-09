/**
 * Problem: 3494. Find the Minimum Amount of Time to Brew Potions
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 147 ms (Beats 100%)
 */

/**
 * Calculates minimum time based on skill and mana arrays
 *
 * @param {number[]} skill - Skill values
 * @param {number[]} mana - Mana values
 *
 * @returns {number} - Minimum time
 */
const minTime = (skill, mana) => {
  // Get the number of wizards and potions from the input arrays
  const wizardCount = skill.length,
    potionCount = mana.length

  // Initialize an array to store cumulative skill values for each wizard
  const cumulativeSkill = Array(wizardCount)

  // Set the first cumulative skill value to the first wizard's skill
  cumulativeSkill[0] = skill[0]

  // Calculate cumulative skill values for all wizards
  for (let wizardIdx = 1; wizardIdx < wizardCount; wizardIdx++) {
    cumulativeSkill[wizardIdx] =
      cumulativeSkill[wizardIdx - 1] + skill[wizardIdx]
  }

  // Initialize the total start time for potions to zero
  let currentPotionStartTime = 0

  // Iterate through each potion except the first one
  for (let potionIdx = 1; potionIdx < potionCount; potionIdx++) {
    // Set the minimum time difference for the current potion
    let minTimeDelta = skill[0] * mana[potionIdx - 1]

    // Check time differences for each wizard except the last one
    for (let wizardIdx = 0; wizardIdx < wizardCount - 1; wizardIdx++) {
      // Calculate the time difference for splitting potions between wizards
      const timeDifference =
        cumulativeSkill[wizardIdx + 1] * mana[potionIdx - 1] -
        cumulativeSkill[wizardIdx] * mana[potionIdx]

      // Update the minimum time difference if a larger value is found
      if (timeDifference > minTimeDelta) minTimeDelta = timeDifference
    }

    // Add the minimum time difference to the total potion start time
    currentPotionStartTime += minTimeDelta
  }

  // Calculate the total time for the last potion using all wizards' skills
  const lastPotionTotalTime =
    cumulativeSkill[wizardCount - 1] * mana[potionCount - 1]

  // Return the sum of all potion start times and the last potion's total time
  return currentPotionStartTime + lastPotionTotalTime
}
