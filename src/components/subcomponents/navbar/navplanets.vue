<template>
    <div class="wrapper row2">
    <nav id="mainav" class="hoc clear"> 
      <!-- ################################################################################################ -->
      <ul class="clear">
        <li><a href="index.html">Home</a></li>
        <li><a href="#">Peliculas</a></li>
        <li><a href="#">Personajes</a></li>
        <li><a href="#">Cruceros Espaciales</a></li>
        <li><a href="#">Vehiculos</a></li>
        <li class="active"><a href="#">Planetas</a></li>
        <li><a href="#">Especies</a></li>
      </ul>
      <!-- ################################################################################################ -->
    </nav>
  </div>
</template>

<script>
export default {
  name: 'navplanets',
  props: ['navplanets']
}
</script>

<style scoped>

</style>