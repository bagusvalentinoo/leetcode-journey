/**
 * Problem: 937. Reorder Data in Log Files
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Reorders logs: letter logs first (sorted lexicographically), then digit logs (original order)
 *
 * @param {string[]} logs - Logs with identifiers followed by content
 *
 * @returns {string[]} - Reordered logs
 */

const reorderLogFiles = (logs) => {
  // Initialize arrays for letter and digit logs
  const letterLogs = []
  const digitLogs = []

  // Iterate through each log
  for (let i = 0; i < logs.length; i++) {
    // Get the current log
    const log = logs[i]
    // Split the log into parts
    const logArr = log.split(' ')
    // Extract the identifier from the log
    const logId = logArr.shift()

    // Check if the first character of the log is a digit
    isNaN(logArr[0])
      ? letterLogs.push([log, logArr.join(' '), logId])
      : digitLogs.push(log)
  }

  // Sort letter logs first by content, then by identifier
  letterLogs.sort((a, b) => {
    // Check if the first character of the logs is a digit
    if (a[1] === b[1]) return a[2].localeCompare(b[2])

    // Return the comparison of the content of the logs
    return a[1].localeCompare(b[1])
  })

  // Return the sorted letter logs followed by the digit logs
  return [...letterLogs.map((log) => log[0]), ...digitLogs]
}
