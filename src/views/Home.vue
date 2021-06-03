<template>
  <div>
    <TaduSvg></TaduSvg>
    <section class="all">
      <div class="main-imgs">
        <ul>
          <li v-for="projetos in projetos" :key="projetos.id">
            <router-link :to="{name: 'Project', params:{project: projetos.id}}"><img :src="projetos.fotocapa" /></router-link>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import TaduSvg from '@/components/TaduSvg.vue'
import fetchData from '@/mixins/fetchData.js'

export default {
  name: 'Home',
  props:['expShowMenu'],
  mixins: [fetchData],
  data() {
    return {
      showAbout: false
    }
  },
  created() {
    this.fetchProjetos("/projeto");
  },
  mounted() {
    this.taduSize();
     window.addEventListener("resize", function () {
        window.location.reload()
      });
  },
  methods: {
    taduSize() {
      let userViewHeight = window.innerHeight;
      let taduDiv = document.querySelector(".svg").clientHeight
      let heightadjust = userViewHeight - 100;

      if (userViewHeight - 60 > taduDiv) {
        console.log("Visualização da logo normal 50%");
        document.querySelector(".svg").style.border = "none";
        document.querySelector(".svg").style.width = "50%";
      } else {
        console.log("Tamanho da logo ajustado");
        document.querySelector(".svg").style.height = heightadjust;
        document.querySelector(".svg").style.width = "initial";
      }
    }
  },
   beforeRouteLeave(to, from, next) {
    this.tlPageOut = this.$gsap.timeline()
    this.tlPageOut.to('.main-imgs', {
      opacity: 0,
      ease: 'power1.in',
      y: 300,
      duration: 0.3
    })
    .to('.tadu', {
      opacity: 0,
      ease: 'power1.in',
      y: -100,
      duration: 0.3,
        onComplete: () => {
          next()
        },
    },"<")
  },  
  components: {
    TaduSvg
  }
}
</script>

<style lang="scss">
  .st0 {
  enable-background: new;
  }
  .st1 {
    fill: #fff;
  }
</style>
