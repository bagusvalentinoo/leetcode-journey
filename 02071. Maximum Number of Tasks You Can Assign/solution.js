/**
 * Problem: 2071. Maximum Number of Tasks You Can Assign
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 102 ms (Beats 100%)
 */

/**
 * Finds maximum tasks assignable with available workers and strength-boosting pills
 *
 * @param {number[]} tasks - Task strength requirements
 * @param {number[]} workers - Worker strengths
 * @param {number} pills - Available magical pills
 * @param {number} strength - Strength increase per pill
 *
 * @returns {number} Maximum assignable tasks
 */
const maxTaskAssign = (tasks, workers, pills, strength) => {
  // Sort tasks and workers in ascending order
  tasks.sort((a, b) => a - b)
  workers.sort((a, b) => a - b)

  // Helper function to check if a given number of tasks can be assigned
  const canAssign = (mid) => {
    const boosted = [] // Array to store workers who can be boosted

    // Copy the workers array to avoid modifying the original
    let w = workers.length - 1
    // Number of free pills available
    let freePills = pills

    // Iterate through the tasks in reverse order
    for (let t = mid - 1; t >= 0; t--) {
      const task = tasks[t] // Current task strength requirement

      // Check if the current worker can handle the task
      if (boosted.length && boosted[0] >= task) boosted.shift()
      // If the current worker can handle the task, move to the next task
      else if (w >= 0 && workers[w] >= task) w--
      // Otherwise, check if the worker can handle the task with a boost
      else {
        // If the worker can handle the task with a boost, use the boost
        while (w >= 0 && workers[w] + strength >= task)
          // Boost the worker and add to the boosted array
          boosted.push(workers[w--])

        // If there are no workers left to boost, return false
        if (!boosted.length || freePills === 0) return false

        boosted.pop() // Use a boosted worker
        freePills-- // Decrease the number of free pills
      }
    }

    return true
  }

  // Binary search to find the maximum number of tasks that can be assigned
  // Initialize low and high pointers
  let low = 0,
    high = Math.min(tasks.length, workers.length)

  // Perform binary search
  while (low < high) {
    // Calculate the mid-point
    const mid = Math.floor((low + high + 1) / 2)

    // Check if the current mid-point can be assigned
    if (canAssign(mid)) low = mid
    // If it can't be assigned, search in the lower half
    else high = mid - 1
  }

  // Return the maximum number of assignable tasks
  return low
}
