/**
 * Problem: 3408. Design Task Manager
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 286 ms (Beats 100%)
 */

/**
 * TaskManager constructor function to manage tasks with priorities
 *
 * @param {number[][]} tasks - Initial list of tasks, each represented as [userId, taskId, priority]
 */
const TaskManager = function (tasks) {
  // Store tasks in an object with taskId as the key for quick access.
  this.tasks = {}

  // Initialize a priority queue (heap) to manage tasks by priority and taskId.
  this.heap = new PriorityQueue((a, b) => {
    // Compare tasks by priority (higher priority first).
    if (a.priority !== b.priority) return b.priority - a.priority

    // If priorities are equal, compare by taskId (higher taskId first).
    return b.taskId - a.taskId
  })

  // Iterate through the initial tasks array to add each task to the manager.
  for (let i = 0; i < tasks.length; i++) {
    // Destructure userId, taskId, and priority from the current task.
    const [userId, taskId, priority] = tasks[i]

    // Store the task in the tasks object with an initial version of 1.
    this.tasks[taskId] = { userId, priority, version: 1 }
    // Enqueue the task into the priority queue.
    this.heap.enqueue({ taskId, priority, version: 1 })
  }
}

/**
 * Add a new task to the manager
 *
 * @param {number} userId - The ID of the user who owns the task
 * @param {number} taskId - The unique ID of the task
 * @param {number} priority - The priority of the task
 *
 * @returns {void}
 */
TaskManager.prototype.add = function (userId, taskId, priority) {
  // Add the new task to the tasks object with an initial version of 1.
  this.tasks[taskId] = { userId, priority, version: 1 }
  // Enqueue the new task into the priority queue.
  this.heap.enqueue({ taskId, priority, version: 1 })
}

/**
 * Edit the priority of an existing task
 *
 * @param {number} taskId - The unique ID of the task to edit
 * @param {number} newPriority - The new priority value
 *
 * @returns {void}
 */
TaskManager.prototype.edit = function (taskId, newPriority) {
  // Update the priority of the task in the tasks object.
  this.tasks[taskId].priority = newPriority
  // Increment the version to indicate the task has been updated.
  this.tasks[taskId].version++

  // Enqueue the updated task into the priority queue with the new version.
  this.heap.enqueue({
    taskId,
    priority: newPriority,
    version: this.tasks[taskId].version
  })
}

/**
 * Remove a task from the manager
 *
 * @param {number} taskId - The unique ID of the task to remove
 *
 * @returns {void}
 */
TaskManager.prototype.rmv = function (taskId) {
  // Delete the task from the tasks object.
  delete this.tasks[taskId]
}

/**
 * Execute the highest-priority valid task and return its userId
 *
 * @returns {number} - The userId of the executed task, or -1 if no valid tasks remain
 */
TaskManager.prototype.execTop = function () {
  // Continue processing while the heap is not empty.
  while (!this.heap.isEmpty()) {
    // Dequeue the task with the highest priority.
    const { taskId, priority, version } = this.heap.dequeue()
    // Retrieve the current task from the tasks object.
    const task = this.tasks[taskId]

    // Check if the task exists and matches the priority and version.
    if (task && task.priority === priority && task.version === version)
      // Return the userId of the valid task.
      return task.userId
  }

  // Return -1 if no valid tasks are found.
  return -1
}
