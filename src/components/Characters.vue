<template>
  <navcharacters :navcharacters="navcharacters"></navcharacters>
</template>

<script>
import navcharacters from './subcomponents/navbar/navcharacters.vue'

export default {
  name: 'characters',
  props: ['characters']
}
</script>

<style scoped>

</style>
