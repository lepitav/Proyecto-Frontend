<template>
  <div class="wrapper bgded clear split" style="background-image:url('https://images6.alphacoders.com/691/thumb-1920-691185.jpg');">
  <article class="box"> 
    <!-- ################################################################################################ -->
    <h4 class="heading font-x3">{{ movies.title }}</h4>
    <p class="btmspace-30">{{ movies.opening_crawl }}</p>
    <p class="btmspace-30">{{ movies.director }}</p>
    <p class="btmspace-30">{{ movies.producer }}</p>
    <p class="btmspace-30">{{ movies.release_date }}</p>
    <!-- ################################################################################################ -->
  </article>
</div>
</template>

<script>
export default {
  name: 'epv',
  props: ['epv']
}
</script>

<style scoped>

</style>
