<template>
<navspecies :navspecies="navspecies"></navspecies>
</template>

<script>
import navspecies from './subcomponents/navbar/navspecies.vue'
export default {
  name: 'species',
  props: ['species']
}
</script>

<style scoped>

</style>
