<template>
<navstarships :navstarships="navstarships"></navstarships>

</template>

<script>
import navstarships from './subcomponents/navbar/navstarships'
export default {
  name: 'starships',
  props: ['starships']
}
</script>

<style scoped>

</style>
