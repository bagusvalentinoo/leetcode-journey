/**
 * Problem: 3453. Separate Squares I
 *
 * Difficulty: Medium
 *
 * Language: C#
 *
 * Performance: Runtime - 107 ms (Beats 100%)
 */

public class Solution {
    public double SeparateSquares(int[][] squares) {
        // Find maximum y-coordinate and total area of all squares
        // squares[i] = [x, y, l] where (x,y) is bottom-left corner, l is side length
        double max_y = 0, total_area = 0;
        foreach (int[] sq in squares) {
            int y = sq[1], l = sq[2];
            total_area += (double)l * l;  // Area = l²
            max_y = Math.Max(max_y, (double)(y + l));  // Max y = y + l (top edge)
        }

        // Binary search for optimal horizontal line y = limit_y
        double lo = 0, hi = max_y;
        double eps = 1e-5;  // Precision tolerance
        
        while (Math.Abs(hi - lo) > eps) {
            double mid = (hi + lo) / 2;

            // Check if line at y = mid satisfies the condition:
            // Area below line >= total_area/2
            if (Check(mid, squares, total_area)) {
                hi = mid;  // Line too high, lower it
            } else {
                lo = mid;  // Line too low, raise it
            }
        }

        return hi;  // Return optimal line position
    }

    // Check if area below line y = limit_y is at least half of total area
    private bool Check(double limit_y, int[][] squares, double total_area) {
        double area = 0;

        foreach (int[] sq in squares) {
            int y = sq[1], l = sq[2];

            // If square intersects the line (square's bottom y is below the line)
            if (y < limit_y) {
                // Calculate the area of square portion below the line:
                // - Height of portion = min(line_y - square_bottom_y, square_height)
                // - Width = square side length (l)
                area += (double)l * Math.Min(limit_y - y, (double)l);
            }
        }

        // Return true if area below line >= half of total area
        return area >= total_area / 2;
    }
}
