<template>
  <div class="container">
    <canvas id="canvas" width="200" height="200"></canvas>
  </div>
</template>
<script>
import CanvasWave from 'assets/js/canvas/canvas-wave'
export default {
  name: '',
  data() {
    return {

    }
  },
  mounted() {
    new CanvasWave('canvas');
  }
}

</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  text-align: center;
  position: absolute;
  #canvas {
    border: 10px solid rgba(154, 205, 50, .8);
    border-radius: 50%;
    position: relative;
    top: 50%;
    box-sizing: content-box;
    transform: translateY(-50%);
  }
}

</style>
