/**
 * Problem: 2353. Design a Food Rating System
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 75 ms (Beats 100%)
 */

/**
 * Maxheap class implements a max-heap data structure with a custom comparator.
 */
class Maxheap {
  /**
   * Constructs a Maxheap instance.
   * @param {Function} comparator - Function to compare two elements in the heap.
   */
  constructor(comparator) {
    this.heap = [] // Array to store heap elements.
    this.comparator = comparator // Comparator function for heap ordering.
  }

  /**
   * Inserts a new element into the heap.
   * @param {*} food - The element to insert.
   */
  insert(food) {
    this.heap.push(food) // Add new element to the end.
    this._bubbleup(this.heap.length - 1) // Restore heap property by bubbling up.
  }

  /**
   * Returns the maximum element in the heap without removing it.
   * @returns {*} The top element of the heap.
   */
  peek() {
    return this.heap[0] // Return the root element.
  }

  /**
   * Removes and returns the maximum element from the heap.
   * @returns {*} The removed maximum element.
   */
  extractmax() {
    if (this.isEmpty()) return null // Return null if heap is empty.
    if (this.heap.length === 1) return this.heap.pop() // Return the only element if heap has one.

    this._swap(0, this.heap.length - 1) // Swap root with last element.

    const ele = this.heap.pop() // Remove and store the last element (former root).

    this._bubbledown(0) // Restore heap property by bubbling down.

    return ele // Return the removed element.
  }

  /**
   * Restores the heap property by moving the element at index up.
   * @param {number} index - Index of the element to bubble up.
   */
  _bubbleup(index) {
    while (index > 0) {
      const parentIdx = Math.floor((index - 1) / 2) // Calculate parent index.

      if (this.comparator(this.heap[index], this.heap[parentIdx]) > 0) {
        this._swap(index, parentIdx) // Swap if current is greater than parent.
        index = parentIdx // Move up to parent index.
      }
      //
      else break // Stop if heap property is satisfied.
    }
  }

  /**
   * Restores the heap property by moving the element at index down.
   * @param {number} index - Index of the element to bubble down.
   */
  _bubbledown(index) {
    const left = index * 2 + 1, // Left child index.
      right = index * 2 + 2 // Right child index.
    let largest = index // Assume current index is largest.

    const n = this.heap.length // Heap size.

    if (left < n && this.comparator(this.heap[left], this.heap[largest]) > 0)
      largest = left // Update largest if left child is greater.
    if (right < n && this.comparator(this.heap[right], this.heap[largest]) > 0)
      largest = right // Update largest if right child is greater.

    if (largest !== index) {
      this._swap(largest, index) // Swap with the largest child.
      this._bubbledown(largest) // Continue bubbling down.
    }
  }

  /**
   * Checks if the heap is empty.
   * @returns {boolean} True if heap is empty, false otherwise.
   */
  isEmpty() {
    return this.heap.length === 0 // Return true if heap has no elements.
  }

  /**
   * Swaps two elements in the heap.
   * @param {number} i - First index.
   * @param {number} j - Second index.
   */
  _swap(i, j) {
    ;[this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]] // Swap elements at indices i and j.
  }
}

/**
 * FoodRatings class manages foods, their cuisines, and ratings.
 * @param {string[]} foods - Array of food names.
 * @param {string[]} cuisines - Array of cuisine names corresponding to foods.
 * @param {number[]} ratings - Array of ratings corresponding to foods.
 */
const FoodRatings = function (foods, cuisines, ratings) {
  this.foods = new Map() // Map to store food name to its cuisine and rating.
  this.cuisines = new Map() // Map to store cuisine name to its Maxheap.

  for (let i = 0; i < foods.length; i++) {
    const food = foods[i], // Current food name.
      cuisine = cuisines[i], // Current cuisine name.
      rating = ratings[i] // Current rating.

    this.foods.set(food, { cuisine: cuisine, rating: rating }) // Store food's cuisine and rating.

    if (!this.cuisines.has(cuisine)) {
      // If cuisine is not yet in the map, create a new Maxheap for it.
      const comparator = (a, b) => {
        if (a.rating !== b.rating) return a.rating - b.rating // Compare by rating.

        return b.food.localeCompare(a.food) // If ratings are equal, compare by food name lexicographically.
      }

      this.cuisines.set(cuisine, new Maxheap(comparator)) // Add new Maxheap for the cuisine.
    }

    this.cuisines.get(cuisine).insert({ food: food, rating: rating }) // Insert food into the cuisine's heap.
  }
}

/**
 * Changes the rating of a given food.
 * @param {string} food - The food whose rating is to be changed.
 * @param {number} newRating - The new rating value.
 * @returns {void}
 */
FoodRatings.prototype.changeRating = function (food, newRating) {
  const foodData = this.foods.get(food) // Get the food's data.

  foodData.rating = newRating // Update the rating in the foods map.
  this.cuisines.get(foodData.cuisine).insert({ food: food, rating: newRating }) // Insert updated food into the cuisine's heap.
}

/**
 * Returns the highest rated food for a given cuisine.
 * @param {string} cuisine - The cuisine to query.
 * @returns {string} The name of the highest rated food.
 */
FoodRatings.prototype.highestRated = function (cuisine) {
  const heap = this.cuisines.get(cuisine) // Get the heap for the cuisine.

  while (true) {
    const topFood = heap.peek() // Get the top food from the heap.
    const currentRating = this.foods.get(topFood.food).rating // Get the current rating from the foods map.

    if (topFood.rating === currentRating) return topFood.food // If ratings match, return the food name.

    heap.extractmax() // Otherwise, remove outdated entry and continue.
  }
}
