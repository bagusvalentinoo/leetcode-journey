/**
 * Problem: 1912. Design Movie Rental System
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 484 ms (Beats 100%)
 */

/**
 * MovieRentingSystem constructor
 *
 * @param {number} _n - Number of shops (unused)
 *
 * @param {number[][]} entries - [shop, movie, price] entries
 */
const MovieRentingSystem = function (_n, entries) {
  // Maximum number of search/report results to return.
  this.maxNumSearchResults = 5

  // Sort entries by price, then by shop number.
  const sorted = [...entries].sort(
    ([shop1, _1, price1], [shop2, _2, price2]) => {
      const priceDiff = price1 - price2
      return priceDiff ? priceDiff : shop1 - shop2
    }
  )

  // Map of movieId -> array of shopIds (sorted by price, then shop).
  this.movies = sorted.reduce((movies, [shop, movie]) => {
    let shops = movies[movie]
    if (shops === undefined) shops = movies[movie] = []
    shops.push(shop)
    return movies
  }, {})

  // Map of shopId -> { movieId: { price } }
  this.shops = sorted.reduce((shops, [shop, movie, price]) => {
    let data = shops[shop]
    if (data === undefined) data = shops[shop] = {}
    data[movie] = { price }
    return shops
  }, {})

  // Array to keep track of rented movies: [shop, movie]
  this.rented = []
}

/**
 * Find shops with the given movie available
 *
 * @param {number} movie - Movie ID
 *
 * @returns {number[]} - Shop IDs sorted by price, then shop
 */
MovieRentingSystem.prototype.search = function (movie) {
  const results = [],
    shops = this.movies[movie]

  // Iterate through shops for the movie, add to results if not rented.
  if (shops) {
    for (
      let i = 0, l = shops.length;
      results.length < this.maxNumSearchResults && i < l;
      i++
    ) {
      const shop = shops[i]

      if (!this.shops[shop][movie].rented) results.push(shop)
    }
  }

  return results
}

/**
 * Rent a movie from a shop
 *
 * @param {number} shop - Shop ID
 * @param {number} movie - Movie ID
 *
 * @returns {void}
 */
MovieRentingSystem.prototype.rent = function (shop, movie) {
  // Only rent if not already rented.
  if (this.shops[shop][movie].rented === undefined) {
    const rentData = [shop, movie]
    this.shops[shop][movie].rented = rentData
    this.rented.push(rentData)
  }
}

/**
 * Drop (return) a rented movie to a shop
 *
 * @param {number} shop - Shop ID
 * @param {number} movie - Movie ID
 *
 * @returns {void}
 */
MovieRentingSystem.prototype.drop = function (shop, movie) {
  // Get the rented data for the movie at the shop.
  const movieData = this.shops[shop]?.[movie].rented

  // If movie is rented, remove from rented list and mark as not rented.
  if (movieData) {
    this.rented.splice(this.rented.indexOf(movieData), 1)
    delete this.shops[shop][movie].rented
  }
}

/**
 * Get rented movies, sorted by price, shop, then movie
 *
 * @returns {number[][]} - [shop, movie] pairs
 */
MovieRentingSystem.prototype.report = function () {
  return this.rented
    .sort(([shop1, movie1], [shop2, movie2]) => {
      // Sort by price, then shop, then movie.
      const priceDiff =
        this.shops[shop1][movie1].price - this.shops[shop2][movie2].price

      if (!priceDiff) return shop1 === shop2 ? movie1 - movie2 : shop1 - shop2

      return priceDiff
    })
    .slice(0, this.maxNumSearchResults)
}
