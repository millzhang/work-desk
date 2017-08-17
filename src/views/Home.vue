<template>
  <div class="container">
    <div class="list">
      <template v-for="item in list">
        <router-link class="wrap" :to="item.path">
          <h1>{{item.title}}</h1>
          <div class="image">
            <img :src="item.img">
          </div>
          <p>{{item.desc}}</p>
        </router-link>
      </template>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
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
      axios.get('/api/menu').then(result => {
        if (result.status == 200) {
          this.list = result.data.data;
        }
      })
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped src="./../assets/styles/home.scss"></style>
