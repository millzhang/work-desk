<template>
  <div class="container">
    <p-header :title="name"></p-header>
    <section class="content">
      <div class="canvas">
        <canvas id="canvas" width="200" height="200"></canvas>
      </div>
    </section>
  </div>
</template>
<script>
import CanvasWave from 'assets/js/canvas/canvas-wave'
import pHeader from '../Header.vue'
export default {
  name: '',
  data() {
    return {
      name: 'canvas实现波浪效果'
    }
  },
  components: {
    pHeader
  },
  mounted() {
    new CanvasWave('canvas');
  }
}

</script>
<style lang="scss" scoped>
.container {
  text-align: center;
  .canvas {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }
  #canvas {
    border: 10px solid rgba(154, 205, 50, .8);
    border-radius: 50%;

    box-sizing: content-box;
  }
}

</style>
