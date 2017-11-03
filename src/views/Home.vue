<template>
  <div class="container">
    <div class="list">
      <template v-for="item in $router.options.routes">
        <router-link class="wrap" :to="item.path" v-if="item.path != '/'">
          <h1>{{item.name}}</h1>
          <div class="image">
            <img :src="item.meta.cover == undefined ? defaultImage:item.meta.cover">
          </div>
          <p>{{item.meta.desc == undefined ? item.name : item.meta.desc}}</p>
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
      defaultImage: 'http://g.hiphotos.baidu.com/image/pic/item/b3fb43166d224f4a1687bf6603f790529822d1ad.jpg'
    }
  },
  created() {
    // this.fetchMenuList();
  },
  methods: {

  }
}

</script>
<style lang="scss" scoped src="./../assets/styles/home.scss"></style>
