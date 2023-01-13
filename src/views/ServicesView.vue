<template>
<!-- <Menu/> -->
<div class="services">
   <Home/>
   <KnowEgera/>
  </div>
</template>

<script>
import Home from '@/components/Home.vue'
import KnowEgera from '@/components/KnowEgera.vue'

export default {
name: 'ServicesView',
  components: {
    Home,
    KnowEgera
  }
}
</script>

<style>

</style>