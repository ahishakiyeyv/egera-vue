<template>

<div class="services">
   <Home/>
   <KnowEgera/>
   <Services/>
   <Team/>
   <Portfolio/>
  </div>
</template>

<script>

import Home from '@/components/Home.vue'
import KnowEgera from '@/components/KnowEgera.vue'
import Services from '@/components/Services.vue'
import Team from '@/components/Team.vue'
import Portfolio from '@/components/Portfolio.vue'

export default {
name: 'Allsection',
  components: {
    Home,
    KnowEgera,
    Services,
    Team,
    Portfolio
  }
}
</script>

<style>

</style>