/**
 * Problem: 1125. Smallest Sufficient Team
 *
 * Difficulty: Hard
 *
 * Language: Golang
 *
 * Performance: Runtime - 3 ms (Beats 100%)
 */

// smallestSufficientTeam finds the smallest sufficient team to cover all required skills.
// req_skills: list of required skills.
// people: list of people, each with a list of skills.
// Returns the indices of people forming the smallest sufficient team.
func smallestSufficientTeam(req_skills []string, people [][]string) []int {
	// Convert people's skills to bitmask representation and get the completed bitmask for all skills.
	peopleSkillBitmask, completedBitmask := buildPeopleSkillMasks(req_skills, people)
	// Identify redundant people whose skills are covered by others.
	redundantPeople := findRedundantPeople(peopleSkillBitmask)
	// Initialize the minimum number of people required to the total number of people.
	minimumPeopleRequired := len(people)
	// Initialize the bitmask representing the minimum team.
	minimumPeopleBitmask := uint64(0)

	// backtrack is a recursive function to try all combinations of people.
	var backtrack func(int, int, int, uint64)
	backtrack = func(currentPerson, skillBitmask, peopleRequired int, peopleBitmask uint64) {
		// Prune if current team size is already not better than the best found.
		if peopleRequired >= minimumPeopleRequired {
			return
		}

		// If all skills are covered, update the minimum team.
		if skillBitmask == completedBitmask {
			minimumPeopleRequired = peopleRequired
			minimumPeopleBitmask = peopleBitmask
			return
		}

		// If all people have been considered, return.
		if currentPerson == len(people) {
			return
		}

		// If the current person is not redundant, try including them.
		if !redundantPeople[currentPerson] {
			// Combine current skills with this person's skills.
			newBitmask := skillBitmask | peopleSkillBitmask[currentPerson]

			// Only proceed if this person adds new skills.
			if newBitmask != skillBitmask {
				backtrack(
					currentPerson+1,
					newBitmask,
					peopleRequired+1,
					peopleBitmask|(1<<currentPerson),
				)
			}
		}

		// Try excluding the current person.
		backtrack(
			currentPerson+1,
			skillBitmask,
			peopleRequired,
			peopleBitmask,
		)
	}

	// Start backtracking from the first person, with no skills and no people selected.
	backtrack(0, 0, 0, 0)

	// Convert the bitmask of the minimum team to a list of indices.
	return convertPeopleMaskToIndexes(len(people), minimumPeopleBitmask)
}
// smallestSufficientTeam finds the smallest sufficient team to cover all required skills.
// req_skills: list of required skills.
// people: list of people, each with a list of skills.
// Returns the indices of people forming the smallest sufficient team.
func smallestSufficientTeam(req_skills []string, people [][]string) []int {
	// Convert people's skills to bitmask representation and get the completed bitmask for all skills.
	peopleSkillBitmask, completedBitmask := buildPeopleSkillMasks(req_skills, people)
	// Identify redundant people whose skills are covered by others.
	redundantPeople := findRedundantPeople(peopleSkillBitmask)
	// Initialize the minimum number of people required to the total number of people.
	minimumPeopleRequired := len(people)
	// Initialize the bitmask representing the minimum team.
	minimumPeopleBitmask := uint64(0)

	// backtrack is a recursive function to try all combinations of people.
	var backtrack func(int, int, int, uint64)
	backtrack = func(currentPerson, skillBitmask, peopleRequired int, peopleBitmask uint64) {
		// Prune if current team size is already not better than the best found.
		if peopleRequired >= minimumPeopleRequired {
			return
		}

		// If all skills are covered, update the minimum team.
		if skillBitmask == completedBitmask {
			minimumPeopleRequired = peopleRequired
			minimumPeopleBitmask = peopleBitmask
			return
		}

		// If all people have been considered, return.
		if currentPerson == len(people) {
			return
		}

		// If the current person is not redundant, try including them.
		if !redundantPeople[currentPerson] {
			// Combine current skills with this person's skills.
			newBitmask := skillBitmask | peopleSkillBitmask[currentPerson]

			// Only proceed if this person adds new skills.
			if newBitmask != skillBitmask {
				backtrack(
					currentPerson+1,
					newBitmask,
					peopleRequired+1,
					peopleBitmask|(1<<currentPerson),
				)
			}
		}

		// Try excluding the current person.
		backtrack(
			currentPerson+1,
			skillBitmask,
			peopleRequired,
			peopleBitmask,
		)
	}

	// Start backtracking from the first person, with no skills and no people selected.
	backtrack(0, 0, 0, 0)

	// Convert the bitmask of the minimum team to a list of indices.
	return convertPeopleMaskToIndexes(len(people), minimumPeopleBitmask)
}

// buildPeopleSkillMasks converts people's skills to bitmask representation and returns the completed bitmask.
// req_skills: list of required skills.
// people: list of people, each with a list of skills.
// Returns a slice of bitmasks for each person and the completed bitmask for all skills.
func buildPeopleSkillMasks(req_skills []string, people [][]string) ([]int, int) {
	// Map each skill to a unique bit position.
	skillMap := make(map[string]int, 16)
	completedBitmask := 0
	bit := 1

	// Assign a unique bit to each required skill.
	for i := 0; i < len(req_skills); i++ {
		skillMap[req_skills[i]] = bit
		completedBitmask |= bit
		bit <<= 1
	}

	// Create a bitmask for each person's skills.
	peopleSkillBitmask := make([]int, len(people))

	for i := 0; i < len(people); i++ {
		bitmask := 0

		for j := 0; j < len(people[i]); j++ {
			bitmask |= skillMap[people[i][j]]
		}
		
		peopleSkillBitmask[i] = bitmask
	}

	return peopleSkillBitmask, completedBitmask
}

// findRedundantPeople identifies people whose skills are subsets of others and marks them as redundant.
// peopleSkillBitmask: slice of bitmasks representing each person's skills.
// Returns a slice of booleans indicating if a person is redundant.
func findRedundantPeople(peopleSkillBitmask []int) []bool {
	redundantPeople := make([]bool, len(peopleSkillBitmask))

	for i := 0; i < len(peopleSkillBitmask); i++ {
		// If a person has no skills, they are redundant.
		if peopleSkillBitmask[i] == 0 {
			redundantPeople[i] = true
			continue
		}

		for j := i + 1; j < len(peopleSkillBitmask); j++ {
			inCommon := peopleSkillBitmask[i] & peopleSkillBitmask[j]

			// If all skills of j are covered by i, j is redundant.
			if inCommon == peopleSkillBitmask[j] {
				redundantPeople[j] = true
			} else if inCommon == peopleSkillBitmask[i] {
				// If all skills of i are covered by j, i is redundant.
				redundantPeople[i] = true
			}
		}
	}

	return redundantPeople
}

// convertPeopleMaskToIndexes converts a bitmask of selected people to their indices.
// people: total number of people.
// minimumPeopleBitmask: bitmask representing the selected team.
// Returns a slice of indices of selected people.
func convertPeopleMaskToIndexes(people int, minimumPeopleBitmask uint64) []int {
	// Allocate the answer slice with the number of set bits in the bitmask.
	answer := make([]int, bits.OnesCount64(minimumPeopleBitmask))
	currentIndex := 0
	bit := uint64(1)
	
	for i := 0; i < people; i++ {
		// If the i-th bit is set, include this person.
		if minimumPeopleBitmask&bit > 0 {
			answer[currentIndex] = i
			currentIndex++
		}
		
		bit <<= 1
	}

	return answer
}

// buildPeopleSkillMasks converts people's skills to bitmask representation and returns the completed bitmask.
// req_skills: list of required skills.
// people: list of people, each with a list of skills.
// Returns a slice of bitmasks for each person and the completed bitmask for all skills.
func buildPeopleSkillMasks(req_skills []string, people [][]string) ([]int, int) {
	// Map each skill to a unique bit position.
	skillMap := make(map[string]int, 16)
	completedBitmask := 0
	bit := 1

	// Assign a unique bit to each required skill.
	for i := 0; i < len(req_skills); i++ {
		skillMap[req_skills[i]] = bit
		completedBitmask |= bit
		bit <<= 1
	}

	// Create a bitmask for each person's skills.
	peopleSkillBitmask := make([]int, len(people))

	for i := 0; i < len(people); i++ {
		bitmask := 0

		for j := 0; j < len(people[i]); j++ {
			bitmask |= skillMap[people[i][j]]
		}
		
		peopleSkillBitmask[i] = bitmask
	}

	return peopleSkillBitmask, completedBitmask
}

// findRedundantPeople identifies people whose skills are subsets of others and marks them as redundant.
// peopleSkillBitmask: slice of bitmasks representing each person's skills.
// Returns a slice of booleans indicating if a person is redundant.
func findRedundantPeople(peopleSkillBitmask []int) []bool {
	redundantPeople := make([]bool, len(peopleSkillBitmask))

	for i := 0; i < len(peopleSkillBitmask); i++ {
		// If a person has no skills, they are redundant.
		if peopleSkillBitmask[i] == 0 {
			redundantPeople[i] = true
			continue
		}

		for j := i + 1; j < len(peopleSkillBitmask); j++ {
			inCommon := peopleSkillBitmask[i] & peopleSkillBitmask[j]

			// If all skills of j are covered by i, j is redundant.
			if inCommon == peopleSkillBitmask[j] {
				redundantPeople[j] = true
			} else if inCommon == peopleSkillBitmask[i] {
				// If all skills of i are covered by j, i is redundant.
				redundantPeople[i] = true
			}
		}
	}

	return redundantPeople
}

// convertPeopleMaskToIndexes converts a bitmask of selected people to their indices.
// people: total number of people.
// minimumPeopleBitmask: bitmask representing the selected team.
// Returns a slice of indices of selected people.
func convertPeopleMaskToIndexes(people int, minimumPeopleBitmask uint64) []int {
	// Allocate the answer slice with the number of set bits in the bitmask.
	answer := make([]int, bits.OnesCount64(minimumPeopleBitmask))
	currentIndex := 0
	bit := uint64(1)
	
	for i := 0; i < people; i++ {
		// If the i-th bit is set, include this person.
		if minimumPeopleBitmask&bit > 0 {
			answer[currentIndex] = i
			currentIndex++
		}
		
		bit <<= 1
	}

	return answer
}
