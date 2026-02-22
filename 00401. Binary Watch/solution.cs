/**
 * Problem: 401. Binary Watch
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime 0 ms (Beats 100%)
 */

public class Solution
{
  private void GenerateValidHours(
    List<string> validTimes,
    int currentLedIndex,
    int ledsToUse,
    int currentHour,
    int currentMinute
  )
  {
    // Base case: used all LEDs
    if (ledsToUse == 0)
    {
      // Format minute with leading zero if needed
      string minuteString =
        currentMinute < 10 ? "0" + currentMinute.ToString() : currentMinute.ToString();

      // Add valid time to result list
      validTimes.Add(currentHour + ":" + minuteString);

      // Backtrack
      return;
    }

    // Skip current LED without using it
    if (currentLedIndex > ledsToUse - 1)
      GenerateValidHours(validTimes, currentLedIndex - 1, ledsToUse, currentHour, currentMinute);

    // Track new hour and minute values
    int newMinute = currentMinute;
    int newHour = currentHour;

    // Determine if current LED belongs to hour or minute section
    // LEDs 0-5 represent minutes, LEDs 6-9 represent hours
    if (currentLedIndex > 5)
      newHour += (int)Math.Pow(2, currentLedIndex - 6); // Add to hour
    else
      newMinute += (int)Math.Pow(2, currentLedIndex); // Add to minute

    // Use current LED only if resulting time is valid
    if (newHour < 12 && newMinute < 60)
      GenerateValidHours(validTimes, currentLedIndex - 1, ledsToUse - 1, newHour, newMinute);
  }

  public IList<string> ReadBinaryWatch(int turnedOn)
  {
    // If more than 9 LEDs are on, no valid time exists
    if (turnedOn > 9)
      return new List<string>();

    // List to store all valid times
    List<string> validTimes = new List<string>();

    // Generate all valid times using backtracking
    GenerateValidHours(validTimes, 9, turnedOn, 0, 0);

    // Return list of valid times
    return validTimes;
  }
}
