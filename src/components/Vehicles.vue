<template>
<navvehicles :navvehicles="navvehicles"></navvehicles>

</template>

<script>
import navvehicles from './subcomponents/navbar/navvehicles.vue'
export default {
  name: 'vehicles',
  props: ['vehicles']
}
</script>

<style scoped>

</style>
