<template>
  <div class="wrapper">
    <div id="pageintro" class="hoc clear"> 
      <!-- ################################################################################################ -->
      <div class="introtxt">
        <img src="https://vignette.wikia.nocookie.net/logopedia/images/5/5b/Star-Wars-Logo_Silver.png/revision/latest?cb=20151106011636">
        <br>
        <br>
        <p>{{ home.intro }}</p>
      </div>
      <!-- ################################################################################################ -->
      <div class="clear"></div>
    </div>
  </div>
  <!-- ################################################################################################ -->
</template>

<script>
export default {
  name: 'pageintro',
  props: ['pageintro']
}
</script>

<style scoped>

</style>