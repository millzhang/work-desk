<template>
  <div class="container">
    <div class="list">
      <router-link class="wrap" to="/canvas/wave">
        <h1>Sample Box</h1>
        <img src="">
        <p></p>
      </router-link>
    </div>
  </div>
</template>
<script>
import axios from ''
export default {
  name: 'hello',
  data() {
    return {
      list: [],
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created() {
    this.fetchMenuList();
  },
  methods: {
    fetchMenuList() {
      axios.get('~assets/js/menu.json').then(result => {
        console.log(result)
      })
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped src="./../assets/styles/home.scss"></style>
