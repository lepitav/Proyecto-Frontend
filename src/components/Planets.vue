<template>
<navplanets :navplanets="navplanets"></navplanets>
</template>

<script>
import navplanets from './subcomponents/navbar/navplanets.vue'
export default {
  name: 'planets',
  props: ['planets']
}
</script>

<style scoped>

</style>
