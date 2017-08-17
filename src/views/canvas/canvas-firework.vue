<template>
  <section class="container">
    <p-header :title="name"></p-header>
  </section>
</template>
<script>
import pHeader from '../Header.vue'
export default {
  name: '',
  data() {
    return {
      name: 'canvas实现烟花效果'
    }
  },
  components: {
    pHeader
  },
  created() {

  },
  computed: {

  },
  methods: {

  }
}

</script>
<style lang="scss" scoped>


</style>
