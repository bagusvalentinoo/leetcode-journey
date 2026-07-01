/**
 * Problem: 781. Rabbits in Forest
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func numRabbits(answers []int) int {
    // Map to store the number of rabbits for each answer
    frequencyMap := make(map[int]int)
    
    // Store the minimum number of rabbits
    totalRabbits := 0
    
    // Iterate through the answers
    for i := 0; i < len(answers); i++ {
        // Current answer
        currentAnswer := answers[i]
        
        // If the current answer is not in the map or the count is 0
        if frequencyMap[currentAnswer] == 0 {
            totalRabbits += currentAnswer + 1
            frequencyMap[currentAnswer] = currentAnswer
        } else {
            // Decrement the count for the current answer
            frequencyMap[currentAnswer]--
        }
    }
    
    // Return the minimum number of rabbits
    return totalRabbits
}
