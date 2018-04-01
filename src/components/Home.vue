<template>
    <div class="relative bgded overlay" style="background-image:url('https://steamuserimages-a.akamaihd.net/ugc/865115722134877435/C62395D37DEFBAC528A5E2BF6D18F355629AC4C2/');"> 
        
        <navhome :navhome="navhome"></navhome>
        <pageintro :pageintro="pageintro"></pageintro>
        <hlinks :hlinks="hlinks"></hlinks>
    </div>
  <!-- ################################################################################################ -->
</template>

<script>
import pageintro from './subcomponents/home/pageintro.vue'
import navhome from './subcomponents/navbar/navhome.vue'
import hlinks from './subcomponents/home/hlinks.vue'

export default {
  name: 'home',
  props: ['home'],
  components: {
      'pageintro': pageintro,
      'navhome': navhome,
      "hlinks": hlinks


  }
}
</script>

<style scoped>

</style>
