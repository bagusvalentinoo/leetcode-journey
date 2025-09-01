/**
 * Problem: 1792. Maximum Average Pass Ratio
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 402 ms (Beats 100%)
 */

/**
 * Calculates the maximum average pass ratio after assigning extra students
 *
 * @param {number[][]} classes - Each element is [pass, total]
 * @param {number} extraStudents - Number of extra students
 *
 * @returns {number} - Maximum average pass ratio
 */
const maxAverageRatio = (classes, extraStudents) => {
  // Get the number of classes
  const classCount = classes.length

  // Create a max-heap priority queue to store [gain, classIndex] pairs
  // Gain is the increase in pass ratio if an extra student is added
  const priorityQueue = new PriorityQueue((a, b) => b[0] - a[0])

  // Initialize the priority queue with the gain for each class
  for (let i = 0; i < classCount; i++) {
    const [passCount, totalCount] = classes[i]
    // Calculate current pass ratio
    const currentRatio = Number(passCount / totalCount)
    // Calculate pass ratio if one extra student is added
    const nextRatio = Number((passCount + 1) / (totalCount + 1))
    // Gain is the difference between next and current ratio
    const gain = nextRatio - currentRatio

    // Enqueue the gain and class index into the priority queue
    priorityQueue.enqueue([gain, i])
  }

  // Assign extra students one by one to the class with the highest gain
  while (extraStudents--) {
    // Dequeue the class with the maximum gain
    const [, classIndex] = priorityQueue.dequeue()

    // Increment pass and total count for the selected class
    classes[classIndex][0]++
    classes[classIndex][1]++

    // Recalculate the pass ratio after adding the student
    const updatedRatio = Number(classes[classIndex][0] / classes[classIndex][1])
    // Calculate the gain if another student is added
    const nextRatio = Number(
      (classes[classIndex][0] + 1) / (classes[classIndex][1] + 1)
    )

    // Gain for the next possible addition
    const gain = nextRatio - updatedRatio
    // Enqueue the updated gain and class index back into the priority queue
    priorityQueue.enqueue([gain, classIndex])
  }

  // Calculate the total pass ratio after all extra students have been assigned
  let totalRatio = 0

  // Sum the pass ratios for all classes
  for (let i = 0; i < classCount; i++)
    totalRatio += Number(classes[i][0] / classes[i][1])

  // Return the average pass ratio
  return totalRatio / classCount
}
