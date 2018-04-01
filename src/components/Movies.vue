<template>
  <!--  <navmovies :navmovies="navmovies"></navmovies>
    <epi :epi="epi"></epi>
    <epii :epii="epii"></epii>
    <epiii :epiii="epiii"></epiii>
    <epiv :epiv="epiv"></epiv>
    <epv :epv="epv"></epv>
    <epvi :epvi="epvi"></epvi>
    <epvii :epvii="epvii"></epvii> -->

    <div></div>


</template>

<script>
import navmovies from './subcomponents/navbar/navmovies.vue'
import epi from './subcomponents/movies/epi.vue'
import epii from './subcomponents/movies/epii.vue'
import epiii from './subcomponents/movies/epiii.vue'
import epiv from './subcomponents/movies/epiv.vue'
import epv from './subcomponents/movies/epv.vue'
import epvi from './subcomponents/movies/epvi.vue'
import epvii from './subcomponents/movies/epvii.vue'

export default {
  name: 'movies',
  props: ['movies'],
  components: {
      'navmovies': navmovies,
      'epi': epi,
      'epii': epii,
      'epiii': epiii,
      'epiv': epiv,
      'epv': epv,
      'epvi': epvi,
      'epvii': epvii

  }
}
</script>

<style scoped>

</style>
