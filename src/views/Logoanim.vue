<template>
    <div id="app">
        <div class="lottie-anim">
          <loading :options="defaultOptions" :height="150" :width="150"/> 
          
        </div>
    </div>

</template>

<script>
  import Loading from '@/components/loading.vue';
  import * as animationData from '@/assets/tadu.json';
  export default {
    name: 'app',
    components: {
      'loading': Loading,
    },
    data() {
      return {
        defaultOptions: {animationData: animationData.default},
      }
    },
    methods: {

    }
  }
</script>

<style>
    /* body {
        background-color: black;
    }
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
    h1, h2 {
        font-weight: normal;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #42b983;
    } */
    .lottie-anim {
      width:100%;
      display:flex;
      flex-direction: column;
      margin:200px 0 100px 0;
    }
    .lottie-anim button {
      width:10%;
    }
</style>