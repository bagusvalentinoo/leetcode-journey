/**
 * Problem: 2353. Design a Food Rating System
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 32 ms (Beats 100%)
 */

// Food struct represents a food item with its name, rating, and its position/index in the cuisine heap.
type Food struct {
	name       string  // Name of the food
	rating     int32   // Rating of the food
	cuisineIdx int16   // Index of the cuisine in the cuisines slice
	cuisinePos int16   // Position of the food in the cuisine heap
}

// Cuisine is a slice of pointers to Food, representing all foods in a particular cuisine.
// It implements heap.Interface for maintaining a max-heap based on rating and name.
type Cuisine []*Food

// Len returns the number of foods in the cuisine.
func (c Cuisine) Len() int { return len(c) }

// Less compares two foods in the cuisine heap. Higher rating comes first; if ratings are equal, lexicographically smaller name comes first.
func (c Cuisine) Less(i, j int) bool {
	return c[i].rating > c[j].rating || (c[i].rating == c[j].rating && c[i].name < c[j].name)
}

// Swap swaps two foods in the cuisine heap and updates their positions.
func (c Cuisine) Swap(i, j int) {
	c[i].cuisinePos = int16(j)
	c[j].cuisinePos = int16(i)
	c[i], c[j] = c[j], c[i]
}

// Push adds a new food to the cuisine heap.
func (c *Cuisine) Push(x interface{}) { *c = append(*c, x.(*Food)) }

// Pop removes and returns the last food from the cuisine heap.
func (c *Cuisine) Pop() interface{} {
	old := *c
	n := len(old)
	x := old[n-1]
	*c = old[0 : n-1]

	return x
}

// FoodRatings struct manages the food rating system, mapping food names and cuisines to their indices and heaps.
type FoodRatings struct {
	foodNameToIdx    map[string]int16 // Maps food name to its index in foods slice
	foods            []Food           // Slice of all foods
	cuisineNameToIdx map[string]int16 // Maps cuisine name to its index in cuisines slice
	cuisines         []Cuisine        // Slice of all cuisines, each as a heap of foods
}

// Constructor initializes the FoodRatings system with the given foods, cuisines, and ratings.
func Constructor(foods []string, cuisines []string, ratings []int) FoodRatings {
	foodsSl := make([]Food, len(foods))                  // Slice to store Food structs
	foodsM := make(map[string]int16, len(foods))         // Map food name to index
	cuisineM := make(map[string]int16)                   // Map cuisine name to index (temporary for counting)

	// Count the number of foods per cuisine and initialize foods slice and food name map
	for i := 0; i < len(foods); i++ {
		foodsSl[i].name = foods[i]
		foodsSl[i].rating = int32(ratings[i])
		foodsM[foods[i]] = int16(i)
		cuisineM[cuisines[i]]++
	}

	cuisinesSl := make([]Cuisine, 0, len(cuisineM))      // Slice to store cuisines as heaps

	// Assign an index to each cuisine and initialize their slices
	for cuisine, count := range cuisineM {
		cuisineIdx := int16(len(cuisinesSl))
		cuisinesSl = append(cuisinesSl, make([]*Food, 0, count))
		cuisineM[cuisine] = cuisineIdx
	}

	// Assign each food to its cuisine and set its position in the cuisine heap
	for i := 0; i < len(foods); i++ {
		cuisineIdx := cuisineM[cuisines[i]]
		foodsSl[i].cuisineIdx = cuisineIdx
		foodsSl[i].cuisinePos = int16(len(cuisinesSl[cuisineIdx]))
		cuisinesSl[cuisineIdx] = append(cuisinesSl[cuisineIdx], &foodsSl[i])
	}

	// Initialize each cuisine as a heap
	for i := 0; i < len(cuisinesSl); i++ {
		heap.Init(&cuisinesSl[i])
	}

	return FoodRatings{
		foodNameToIdx:    foodsM,
		foods:            foodsSl,
		cuisineNameToIdx: cuisineM,
		cuisines:         cuisinesSl,
	}
}

// ChangeRating updates the rating of a food and fixes its position in the cuisine heap.
func (f FoodRatings) ChangeRating(foodName string, newRating int) {
	foodIdx := f.foodNameToIdx[foodName]
	
	if f.foods[foodIdx].rating != int32(newRating) {
		f.foods[foodIdx].rating = int32(newRating)
		heap.Fix(&f.cuisines[f.foods[foodIdx].cuisineIdx], int(f.foods[foodIdx].cuisinePos))
	}
}

// HighestRated returns the name of the highest-rated food in the given cuisine.
func (f FoodRatings) HighestRated(cuisine string) string {
	return f.cuisines[f.cuisineNameToIdx[cuisine]][0].name
}
