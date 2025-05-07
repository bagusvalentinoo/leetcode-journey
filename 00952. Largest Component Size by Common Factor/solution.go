/**
 * Problem: 952. Largest Component Size by Common Factor
 *
 * Difficulty: Hard
 *
 * Language: Go
 *
 * Performance: Runtime - 77 ms (Beats 100%)
 */

// UnionFind is a data structure for efficient connectivity queries and merging sets
type UnionFind struct {
	parent []int
	rank   []int
	size   []int
}

// NewUnionFind creates a new UnionFind structure with n elements
func NewUnionFind(n int) *UnionFind {
	uf := &UnionFind{
		parent: make([]int, n),
		rank:   make([]int, n),
		size:   make([]int, n),
	}

	for i := range uf.parent {
		uf.parent[i] = i
		uf.size[i] = 1
	}

	return uf
}

// Find returns the root of the set containing x using path compression
func (uf *UnionFind) Find(x int) int {
	if uf.parent[x] != x {
		uf.parent[x] = uf.Find(uf.parent[x])
	}

	return uf.parent[x]
}

// Union merges the sets containing x and y using rank to keep the tree balanced
func (uf *UnionFind) Union(x, y int) {
	px, py := uf.Find(x), uf.Find(y)

	if px == py {
		return
	}
	// Ensure px has higher or equal rank
	if uf.rank[px] < uf.rank[py] {
		px, py = py, px
	}

	// Make px the parent of py
	uf.parent[py] = px
	uf.size[px] += uf.size[py]

	// Increment rank if they had the same rank
	if uf.rank[px] == uf.rank[py] {
		uf.rank[px]++
	}
}

// GetSize returns the number of elements in the set containing x
func (uf *UnionFind) GetSize(x int) int {
	return uf.size[uf.Find(x)]
}

// getPrimeFactors returns all unique prime factors of a number
func getPrimeFactors(n int) []int {
	factors := make([]int, 0)

	// Check for factors until square root of n
	for i := 2; i*i <= n; i++ {
		if n%i == 0 {
			factors = append(factors, i)
			
			// Remove all occurrences of this factor
			for n%i == 0 {
				n /= i
			}
		}
	}

	// If n is a prime number larger than the square root
	if n > 1 {
		factors = append(factors, n)
	}

	return factors
}

// largestComponentSize finds the largest component size in a graph where numbers are
// connected if they share a common prime factor
func largestComponentSize(nums []int) int {
	if len(nums) == 0 {
		return 0
	}

	// Maps prime factors to array indices
	factorToIndex := make(map[int]int)
	uf := NewUnionFind(len(nums))

	// Connect numbers that share prime factors
	for i, num := range nums {
		factors := getPrimeFactors(num)

		for _, factor := range factors {
			if prevIndex, exists := factorToIndex[factor]; exists {
				uf.Union(i, prevIndex)
			} else {
				factorToIndex[factor] = i
			}
		}
	}

	// Find the largest component
	maxSize := 0
	for i := range nums {
		size := uf.GetSize(i)
		
		if size > maxSize {
			maxSize = size
		}
	}

	return maxSize
}