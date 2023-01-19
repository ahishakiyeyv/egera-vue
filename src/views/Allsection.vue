<template>

<div class="services">
  <Menu/>
   <Home/>
   <KnowEgera/>
   <Services/>
   <Team/>
   <Portfolio/>
   <Partners/>
  </div>
</template>

<script>

import Menu from '@/components/Menu.vue'
import Home from '@/components/Home.vue'
import KnowEgera from '@/components/KnowEgera.vue'
import Services from '@/components/Services.vue'
import Team from '@/components/Team.vue'
import Portfolio from '@/components/Portfolio.vue'
import Partners from '@/components/Partners.vue'

export default {
name: 'Allsection',
  components: {
    Menu,
    Home,
    KnowEgera,
    Services,
    Team,
    Portfolio,
    Partners
  }
}
</script>

<style>

</style>