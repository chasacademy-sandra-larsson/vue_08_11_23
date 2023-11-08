<template>
    <div v-if="movie">
        <h1>movie.title</h1>
         <p>The movie is is {{ movie.id }}</p>
         <p>{{  movie.genre }}</p>
    </div>
    <div v-else>
        <p>Loading</p>
    </div>  
   

</template>

<script lang="ts">
import { defineComponent } from 'vue';

type Movie = {
    id: number,
    title: string,
    genre: string
}

export default defineComponent({
    name: 'Moviedetails',
    data() {
        return {
            movie: null as Movie | null
        }
    },
    methods: {
        async fetchMovies(movieId: number) {
      try {
        const response = await fetch(`http://localhost:3000/movies/${movieId}`)
        const data = await response.json()
        this.movie = data
        console.log(this.movie)
      } catch (error) {
        console.error(error)
      }
    }
    },
    mounted() {
        console.log("MovieList mounted")
    },
    created() {
        const movieId = Number(this.$route.params.id)
        this.fetchMovies(movieId)
    }

})


</script>