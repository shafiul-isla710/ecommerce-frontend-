<style scoped>

</style>

<template>
  <Header></Header>

  <slot>

  </slot>

  <Footer></Footer>

</template>

<script setup>
 import Header from '@/components/header.vue'
 import Footer from '@/components/footer.vue'
</script>