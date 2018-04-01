<template>
  <div class="wrapper bgded clear split" style="background-image:url('http://media.cleveland.com/ent_impact_home/photo/force-awakens-08b0f5b51fa08750.jpeg');">
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
  name: 'epvii',
  props: ['epvii']
}
</script>

<style scoped>

</style>
