<template>
  <div>
    <header class="header">
      <router-link to="/" class="back"></router-link>
      <h1 class="mb">{{title}}</h1>
    </header>
  </div>
</template>
<script>
export default {
  name: 'p-header',
  data() {
    return {

    }
  },
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}

</script>
<style lang="scss" scoped>
.header {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  height: 10%;
  box-shadow: 0 2px 2px #bc223d;
  display: flex;
  align-items: center;
  padding: 0 30px;
  justify-content: center;
  background: rgba(0, 0, 0, 0.8);
  .back {
    width: 30px;
    height: 30px;
    border-left: 5px solid #fff;
    border-top: 5px solid #fff;
    transform: rotate(-45deg);
    display: block;
    margin-right: auto;
  }
  h1 {
    width: 100%;
    text-align: center;
  }
  .thd {
    text-shadow: 0 1px 0 hsl(174, 5%, 80%),
    0 2px 0 hsl(174, 5%, 75%),
    0 3px 0 hsl(174, 5%, 70%),
    0 4px 0 hsl(174, 5%, 66%),
    0 5px 0 hsl(174, 5%, 64%),
    0 6px 0 hsl(174, 5%, 62%),
    0 7px 0 hsl(174, 5%, 61%),
    0 8px 0 hsl(174, 5%, 60%),
    0 0 5px rgba(0, 0, 0, .05),
    0 1px 3px rgba(0, 0, 0, .2),
    0 3px 5px rgba(0, 0, 0, .2),
    0 5px 10px rgba(0, 0, 0, .2),
    0 10px 10px rgba(0, 0, 0, .2),
    0 20px 20px rgba(0, 0, 0, .3);
  }
  .mb {
    letter-spacing: 0;
    padding: .25em 0 .325em;
    display: block;
    margin: 0 auto;
    text-shadow: 0 0 80px rgba(255, 255, 255, 0.5);
    /* Clip Background Image */
    background: url('../assets/images/animated_text_fill.png') repeat-y;
    -webkit-background-clip: text;
    background-clip: text;
    /* Animate Background Image */
    -webkit-text-fill-color: transparent;
    -webkit-animation: aitf 80s linear infinite;
    /* Activate hardware acceleration for smoother animations */
    -webkit-transform: translate3d(0, 0, 0);
    -webkit-backface-visibility: hidden;
  }
}



/* Animate Background Image */

@-webkit-keyframes aitf {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
}

</style>
