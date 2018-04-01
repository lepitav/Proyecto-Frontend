<template>
  <div class="wrapper row3">
  <main id="introblocks" class="hoc container clear"> 
    <!-- main body -->
    <!-- ################################################################################################ -->
    <ul class="nospace group elements">
      <li class="one_third first" id="filmsbg">
        <article class="elementwrapper">
          <div class="elementinfo">
            <a href="#" class="ahome">
              <h2>{{ home.movies }}</h2>
              <p class="phome">{{ home.mpar }}</p>
            </a>
          </div>
        </article>
      </li>
      <li class="one_third" id="charactersbg">
        <article class="elementwrapper">
          <div class="elementinfo">
            <a href="#" class="ahome">
              <h2>{{ home.characters }}</h2>
              <p class="phome">{{ home.cpar }}</p>
            </a>
          </div>
        </article>
      </li>
      <li class="one_third" id="spaceshipsbg">
        <article class="elementwrapper">
          <div class="elementinfo">
            <a href="#" class="ahome">
              <h2>{{ home.starships }}</h2>
              <p class="phome">{{ home.stpar }}</p>
              </a>
          </div>
        </article>
      </li>
      <li class="one_third" id="vehiclesbg">
        <article class="elementwrapper">
          <div class="elementinfo">
            <a href="#" class="ahome">
              <h2>{{ home.vehicles }}</h2>
              <p class="phome">{{ home.vpar }}</p>
            </a>
          </div>
        </article>
      </li>
      <li class="one_third" id="planetsbg">
        <article class="elementwrapper">
          <div class="elementinfo">
            <a href="#" class="ahome">
              <h2>{{ home.planets }}</h2>
              <p class="phome">{{ home.ppar }}</p>
            </a>
          </div>
        </article>
      </li>
      <li class="one_third" id="speciesbg">
        <article class="elementwrapper">
          <div class="elementinfo">
            <a href="#" class="ahome">
              <h2>{{ home.species }}</h2>
              <p class="phome">{{ home.spar }}</p>
            </a>
          </div>
        </article>
      </li>
    </ul>
    <!-- ################################################################################################ -->
    <!-- / main body -->
    <div class="clear"></div>
  </main>
</div>
</template>

<script>
export default {
  name: 'hlinks',
  props: ['hlinks']
}
</script>

<style scoped>

</style>
