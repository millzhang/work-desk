<template>
  <section class="container">
    <section class="content">
      <svg id="svg" class=""></svg>
      <fieldset class="operate">
        <legend>操作区域</legend>
        <input type="button" value="停!停停!!停停停!!!" @click="stopChange">
        <input type="button" value="拷贝一个" @click="handleClone()">
      </fieldset>
    </section>
  </section>
</template>
<script>
import Snap from 'snapsvg';
export default {
  name: '',
  data() {
    return {
      colors: ['#000', '#aaa', '#1648ad', '#e24213', '#e28468', '#14e62e', '#bc223d'],
      index: 1,
      flag: false
    }
  },
  created() {

  },
  computed: {

  },
  methods: {
    init() {
      //实例化
      this.svg = Snap('#svg');
      //画一个园
      this.c = this.svg.paper.circle(250, 250, 150).attr({
        fill: '#bc2223',
        "fill-opacity": .5,
        stroke: '#bc2223',
        strokeOpacity: .3,
        strokeWidth: 5
      }).data('author', 'zhangyang').click(() => {
        clearInterval(this.timer);
        this.svg.paper.text(210, 250, this.c.data('author'));
        this.changeColor();
      }).dblclick(() => {
        alert('你双击了,那就停止吧');
        this.stopChange();
      })
    },
    /**
     * 改变颜色
     * @return {[type]} [description]
     */
    changeColor() {
      this.timer = setInterval(() => {
        let index = parseInt(Math.random() * 7);
        this.c.animate({
          fill: this.colors[index],
          stroke: this.colors[index],
          strokeOpacity: .3,
        }, 500, mina.bounce);
      }, 500);

    },
    /**
     * 停止改变颜色
     * @return {[type]} [description]
     */
    stopChange() {
      this.c.stop();
      clearInterval(this.timer);
    },
    /**
     * 处理拷贝事件
     * @return {[type]} [description]
     */
    handleClone() {
      this.index++;
      this.c.clone().attr({
        cx: Number(250 + this.index * 50)
      })
    }
  },
  mounted() {
    this.init();
  }
}

</script>
<style scoped>
.container .content {
  width: 50%;
  height: 50%;
  margin: 0 auto;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid #ebebeb;
}

.container .content svg {
  width: 100%;
  height: 100%;
}


.container .content .operate {
  width: 40%;
  height: 100%;
  border: 1px solid #ebebeb;
  position: absolute;
  left: -45%;
  top: 0;
}


input[type="button"] {
  background: #ebebeb;
  padding: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, .5);
  margin: 20px;
  cursor: pointer;
}

input[type="button"]:focus {
  outline: none;
}

</style>
