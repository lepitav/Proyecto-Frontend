<template>
  <div id="app">
    
    <home :home="home"></home>
    <movies :movies="movies"></movies>

  </div>
</template>

<script>
import Home from './components/Home.vue'
import Movies from './components/Movies.vue'

export default {
  name: 'app',
  components: {
    'home': Home,
    'movies': Movies,
  },
  data() {
    return {
      home: {
        intro: 'Star Wars es una serie de películas creadas por el cineasta estadounidense George Lucas. Cuentan las historias de diversos personajes en una Galaxia muy muy lejana.',
        movies: 'PELICULAS',
        characters: 'PERSONAJES',
        starships: 'CRUCEROS ESPACIALES',
        vehicles: 'VEHICULOS',
        planets: 'PLANETAS',
        species: 'ESPECIES',
        mpar: 'Listado de todas pelicula de Star Wars, con su sinopsis, fecha, director y productor correspondiente.',
        cpar: 'Listado de cada personaje de Star Wars, con sus atributos fisicos, planetas natales, vehiculos y naves correspondientes.',
        stpar: 'Listado de cruceros espaciales de Star Wars, con sus fabricantes, capacidad de carga, precios y tamaños.',
        vpar: 'Listado de cada vehiculo de Star Wars, con sus fabricantes, capacidad de carga, precios y tamaños correspondientes.',
        ppar: 'Listado de los planetas de Star Wars, con sus climas, fechas de creacion, diametros, gravedad, etc.',
        spar: 'Listado de las especies extraterrestres de Star Wars, con sus atributos fisicos promedio, planetas natales, etc.'
      },
      
      movies: [
        {
          title: '',
          episode_id: '',
          opening_crawl: '',
          director: '',
          producer: '',
          release_date: '',
        },
      ]

    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
