<template>
    <h1>Movies</h1>
    <ul>
      <li v-for="movie in movies" :key="movie.id">
        <!-- <router-link :to="{name: 'MovieDetails', params: {id: movie.id}}">{{ movie.title }}</router-link> -->
        <button @click="goToMovie(movie.id)">Go to movie {{ movie.title }}</button>
      </li>
    </ul>
  </template>
  
  <script>
  export default {
    name: 'MovieList',
    data() {
      return {
        movies: []
      }
    },
    methods: {
      goToMovie(movieId) {
        this.$router.push({ name: 'MovieDetails', params: { id: movieId } })
      },
      async fetchMovies() {
        try {
          const response = await fetch('http://localhost:3000/movies')
          const data = await response.json()
          this.movies = data
        } catch (error) {
          console.error(error)
        }
      }
    },
    mounted() {
      console.log('MovieList mounted')
    },
    created() {
      console.log('MovieList created')
      this.fetchMovies()
    }
  }
  </script>
  
  <style scoped></style>
  