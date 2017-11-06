<template>
  <section class="app-layout">
    <p-header :title="name"></p-header>
    <main class="main">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </main>
  </section>
</template>
<script>
import pHeader from './Header.vue'
export default {
  name: '',
  data() {
    return {
      name: this.$route.name
    }
  },
  components: {
    pHeader
  },
  created() {},
  computed: {

  },
  methods: {

  }
}

</script>
<style lang="scss" scoped>
.app-layout {
  .main {
    position: absolute;
    width: 100%;
    height: 90%;
    top: 10%;
  }
}

</style>
