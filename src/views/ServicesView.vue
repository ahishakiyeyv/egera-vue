<template>
<!-- <Menu/> -->
<div class="services">
   <Home/>
   <KnowEgera/>
   <Services/>
   <Team/>
  </div>
</template>

<script>
import Home from '@/components/Home.vue'
import KnowEgera from '@/components/KnowEgera.vue'
import Services from '@/components/Services.vue'
import Team from '@/components/Team.vue'

export default {
name: 'ServicesView',
  components: {
    Home,
    KnowEgera,
    Services,
    Team
  }
}
</script>

<style>

</style>