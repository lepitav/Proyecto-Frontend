<template>
  <div class="wrapper bgded clear split light rightaligned" style="background-image:url('https://images3.alphacoders.com/674/thumb-1920-674045.jpg');">
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
  name: 'epii',
  props: ['epii']
}
</script>

<style scoped>

</style>
