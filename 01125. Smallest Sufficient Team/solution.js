/**
 * Problem: 1125. Smallest Sufficient Team
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 13 ms (Beats 100%)
 */

/**
 * Find the smallest sufficient team to cover all required skills
 *
 * @param {string[]} req_skills - The required skills
 * @param {string[][]} people - The skills possessed by each person
 *
 * @returns {number[]} - The smallest sufficient team
 */
// Function to find the smallest sufficient team to cover all required skills
const smallestSufficientTeam = (req_skills, people) => {
  // Remove people whose skills are a subset of another person's skills
  people.forEach((personSkills, i) => {
    const isSubset = people.some((otherSkills, j) => {
      if (i === j) return false // Skip comparing the same person

      // Check if all skills of personSkills are present in otherSkills
      return personSkills.every((skill) => otherSkills.includes(skill))
    })

    // If personSkills is a subset, clear their skills (mark as redundant)
    if (isSubset) people[i] = []
  })

  // Create a mapping from each skill to the list of people who have that skill
  const skillToPeopleMap = people.reduce((acc, skills, personIdx) => {
    for (const skill of skills) {
      if (!(skill in acc)) acc[skill] = [] // Initialize array if not present

      acc[skill].push(personIdx) // Add person index to the skill's list
    }

    return acc
  }, {})

  let smallestTeam = null // To store the smallest sufficient team found

  // Recursive function to try all combinations to cover remaining skills
  const findTeam = (remainingSkills, currentTeam) => {
    // Base case: all skills are covered
    if (remainingSkills.length === 0) {
      // Update smallestTeam if currentTeam is smaller
      if (!smallestTeam || currentTeam.length < smallestTeam.length)
        smallestTeam = currentTeam

      return
    }

    // Take the first skill from the remaining skills
    const firstSkill = remainingSkills.shift()
    const candidatePeople = skillToPeopleMap[firstSkill]

    // Try adding each person who has the firstSkill
    for (const personIdx of candidatePeople) {
      // Skip if person is already in the team
      if (currentTeam.includes((x) => x === personIdx)) continue

      const personSkills = people[personIdx]

      if (!personSkills) continue // Skip if person has no skills

      // Remove skills covered by this person from remainingSkills
      const updatedSkills = remainingSkills.filter(
        (skill) => !personSkills.includes(skill)
      )

      // Recurse with updated skills and team
      findTeam(updatedSkills, [...currentTeam, personIdx])
    }
  }

  // Start the recursive search with all required skills and an empty team
  findTeam([...req_skills], [])

  // Return the smallest sufficient team found, or an empty array if none
  return smallestTeam ?? []
}
