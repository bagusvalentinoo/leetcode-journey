/**
 * Problem: 1912. Design Movie Rental System
 *
 * Difficulty: Hard
 *
 * Language: Golang
 *
 * Performance: Runtime - 246 ms (Beats 100%)
 */

// Movie struct represents a movie in a shop.
type Movie struct {
	movie int // movie id
	shop  int // shop id
}

// MovieRentingSystem struct manages the renting system.
type MovieRentingSystem struct {
	freeMovies     map[int]*FreeMovieQueue    // maps movie id to available movies priority queue
	rentedMovies   ReportMovieQueue           // priority queue for rented movies
	freeMoviesHM   map[Movie]*FreeMovie       // maps Movie to its FreeMovie struct
	rentedMoviesHM map[Movie]*RentedMovie     // maps Movie to its RentedMovie struct
}

// Constructor initializes the MovieRentingSystem with the given entries.
func Constructor(m int, entries [][]int) MovieRentingSystem {
	n := len(entries)
	freeMovies := make(map[int]*FreeMovieQueue) // initialize map for free movies
	freeMoviesHM := make(map[Movie]*FreeMovie)  // initialize map for free movie lookup

	for i := 0; i < n; i++ {
		movie := Movie{
			movie: entries[i][1], // movie id
			shop:  entries[i][0], // shop id
		}

		freeMovie := FreeMovie{
			movie: entries[i][1], // movie id
			price: entries[i][2], // price
			shop:  entries[i][0], // shop id
		}

		pq, ok := freeMovies[entries[i][1]] // get or create priority queue for this movie

		if !ok {
			pq = &FreeMovieQueue{}
			freeMovies[entries[i][1]] = pq
		}

		freeMoviesHM[movie] = &freeMovie // map Movie to FreeMovie
		heap.Push(pq, &freeMovie)        // add FreeMovie to priority queue
	}

	rentedMoviesPq := make(ReportMovieQueue, 0, 2) // initialize rented movies priority queue
	heap.Init(&rentedMoviesPq)

	return MovieRentingSystem{
		freeMovies:     freeMovies,
		rentedMovies:   rentedMoviesPq,
		freeMoviesHM:   freeMoviesHM,
		rentedMoviesHM: make(map[Movie]*RentedMovie),
	}
}

// Search returns up to 5 shops with the given movie available, sorted by price and shop id.
func (this *MovieRentingSystem) Search(movie int) []int {
	shops := make([]int, 0, 5)         // result shops
	movies := make([]*FreeMovie, 0, 5) // temporary storage for popped movies
	pq := this.freeMovies[movie]       // get priority queue for the movie

	if pq == nil {
		return []int{}
	}

	for pq.Len() > 0 {
		mv := heap.Pop(pq).(*FreeMovie) // pop the cheapest movie
		movies = append(movies, mv)

		if len(movies) == 5 {
			break
		}
	}

	for _, mv := range movies {
		shops = append(shops, mv.shop) // collect shop ids
		heap.Push(pq, mv)              // push movies back to queue
	}

	return shops
}

// Rent marks a movie as rented from a shop.
func (this *MovieRentingSystem) Rent(shop int, movie int) {
	movieKey := Movie{
		movie: movie,
		shop:  shop,
	}

	freeMovie := this.freeMoviesHM[movieKey] // get the FreeMovie

	freeMoviesQueue := this.freeMovies[movie]
	heap.Remove(freeMoviesQueue, freeMovie.index) // remove from free movies queue

	delete(this.freeMoviesHM, movieKey) // remove from freeMoviesHM

	rentedMovie := RentedMovie{
		movie: movie,
		price: freeMovie.price,
		shop:  shop,
	}

	heap.Push(&this.rentedMovies, &rentedMovie) // add to rented movies queue
	
	this.rentedMoviesHM[movieKey] = &rentedMovie // map Movie to RentedMovie
}

// Drop returns a rented movie back to the available pool.
func (this *MovieRentingSystem) Drop(shop int, movie int) {
	movieKey := Movie{
		movie: movie,
		shop:  shop,
	}

	rentedMovie := this.rentedMoviesHM[movieKey] // get the RentedMovie
	heap.Remove(&this.rentedMovies, rentedMovie.index) // remove from rented movies queue
	delete(this.rentedMoviesHM, movieKey) // remove from rentedMoviesHM
	freeMoviePq := this.freeMovies[movie]

	freeMovie := FreeMovie{
		movie: movie,
		price: rentedMovie.price,
		shop:  shop,
	}

	heap.Push(freeMoviePq, &freeMovie) // add back to free movies queue
	this.freeMoviesHM[movieKey] = &freeMovie // map Movie to FreeMovie
}

// Report returns up to 5 currently rented movies, sorted by price, shop, and movie id.
func (this *MovieRentingSystem) Report() [][]int {
	movies := make([]*RentedMovie, 0, 5) // temporary storage for popped rented movies
	ans := make([][]int, 0, 5)           // result

	for this.rentedMovies.Len() > 0 {
		mv := heap.Pop(&this.rentedMovies).(*RentedMovie) // pop the cheapest rented movie
		movies = append(movies, mv)

		if len(movies) == 5 {
			break
		}
	}

	for _, mv := range movies {
		ans = append(ans, []int{mv.shop, mv.movie}) // collect shop and movie ids
		heap.Push(&this.rentedMovies, mv)           // push rented movies back to queue
	}

	return ans
}

// FreeMovie struct represents a movie available for rent.
type FreeMovie struct {
	movie int // movie id
	price int // price
	shop  int // shop id
	index int // index in the priority queue
}

// FreeMovieQueue is a priority queue for FreeMovie.
type FreeMovieQueue []*FreeMovie

// Len returns the number of items in the queue.
func (pq FreeMovieQueue) Len() int { return len(pq) }

// Less compares two FreeMovies by price, then by shop id.
func (pq FreeMovieQueue) Less(i, j int) bool {
	if pq[i].price == pq[j].price {
		return pq[i].shop < pq[j].shop
	}

	return pq[i].price < pq[j].price
}

// Swap swaps two FreeMovies in the queue and updates their indices.
func (pq FreeMovieQueue) Swap(i, j int) {
	pq[i], pq[j] = pq[j], pq[i]
	pq[i].index = i
	pq[j].index = j

}

// Push adds a FreeMovie to the queue.
func (pq *FreeMovieQueue) Push(x any) {
	n := len(*pq)
	item := x.(*FreeMovie)
	item.index = n
	*pq = append(*pq, item)
}

// Pop removes and returns the last FreeMovie from the queue.
func (pq *FreeMovieQueue) Pop() any {
	old := *pq
	n := len(old)
	item := old[n-1]
	old[n-1] = nil
	item.index = -1
	*pq = old[0 : n-1]
	
	return item
}

// RentedMovie struct represents a rented movie.
type RentedMovie struct {
	movie int // movie id
	price int // price
	shop  int // shop id
	index int // index in the priority queue
}

// ReportMovieQueue is a priority queue for RentedMovie.
type ReportMovieQueue []*RentedMovie

// Len returns the number of items in the queue.
func (pq ReportMovieQueue) Len() int { return len(pq) }

// Less compares two RentedMovies by price, then by shop id, then by movie id.
func (pq ReportMovieQueue) Less(i, j int) bool {
	if pq[i].price == pq[j].price {
		if pq[i].shop == pq[j].shop {
			return pq[i].movie < pq[j].movie
		}

		return pq[i].shop < pq[j].shop
	}
	
	return pq[i].price < pq[j].price
}

// Swap swaps two RentedMovies in the queue and updates their indices.
func (pq ReportMovieQueue) Swap(i, j int) {
	pq[i], pq[j] = pq[j], pq[i]
	pq[i].index = i
	pq[j].index = j
}

// Push adds a RentedMovie to the queue.
func (pq *ReportMovieQueue) Push(x any) {
	n := len(*pq)
	item := x.(*RentedMovie)
	item.index = n
	*pq = append(*pq, item)
}

// Pop removes and returns the last RentedMovie from the queue.
func (pq *ReportMovieQueue) Pop() any {
	old := *pq
	n := len(old)
	item := old[n-1]
	old[n-1] = nil
	item.index = -1
	*pq = old[0 : n-1]

	return item
}
