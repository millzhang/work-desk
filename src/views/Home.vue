<template>
  <div class="app-home">
    <div class="list">
      <template v-for="item in routes">
        <router-link class="wrap" :to="item.path == '' ? item.children[0].path : item.path" v-if="!item.root">
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
import image from '@/assets/images/fd7b4d586db805f1e919d918fdf8c4a5.jpg'
export default {
  name: 'hello',
  data() {
    return {
      defaultImage: image,
      routes: this.$router.options.routes
    }
  },
  created() {},
  methods: {

  }
}

</script>
<style lang="scss" scoped src="./../assets/styles/home.scss"></style>
