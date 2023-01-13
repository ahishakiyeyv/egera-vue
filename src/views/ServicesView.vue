<template>
<!-- <Menu/> -->
<div class="services">
   <Home/>
   <KnowEgera/>
   <Services/>
  </div>
</template>

<script>
import Home from '@/components/Home.vue'
import KnowEgera from '@/components/KnowEgera.vue'
import Services from '@/components/Services.vue'

export default {
name: 'ServicesView',
  components: {
    Home,
    KnowEgera,
    Services
  }
}
</script>

<style>

</style>