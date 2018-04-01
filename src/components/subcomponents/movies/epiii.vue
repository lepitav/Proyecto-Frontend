<template>
  <div class="wrapper bgded clear split" style="background-image:url('http://i0.kym-cdn.com/entries/icons/original/000/022/048/Revenge_of_the_Sith.jpg');">
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
  name: 'epiii',
  props: ['epiii']
}
</script>

<style scoped>

</style>
