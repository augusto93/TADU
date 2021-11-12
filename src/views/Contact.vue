<template>
  <div class="contact">
    
    <router-link @click.native="taduMobMenu" to="/"><TaduSvg v-if="expShowMenu" ></TaduSvg></router-link>
    <div class="title-mobile">
      <!-- <h3>{{ $route.name }}</h3> -->
      <h3>Contato</h3>
    </div>
    <section class="all">        
      <div class="loading" v-if="loading">
        <lottie :options="defaultOptions" :height="150" :width="150"/>
      </div> 
      <div v-if="api" class="container-default">
        <div v-for="conteudo in api.conteudo"  :key="conteudo.id"  class="info-contact">
          <div class="subTitle-contact">
          <p>{{conteudo.titulobloco}}</p>
          </div>
          <div>
            <span style="white-space: pre-wrap;">
            <p>{{conteudo.textobloco}}</p>
            </span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import TaduSvg from '@/components/TaduSvg.vue'
import fetchData from '@/mixins/fetchData.js'
import Lottie from '@/components/lottie.vue';
import * as animationData from '@/assets/tadu.json';

export default {
  name: 'Contact',
  props:['expShowMenu'],
  mixins: [fetchData],
  data() {
    return {
      showAbout: false,
      defaultOptions: {animationData: animationData.default}
    }
  },
  created() {
    this.fetchProjetos("/paginas/contato");
  },
  mounted() {

  },
  watch: {
    'api': 'pageIn'
  },
  methods: {
    pageIn(){
      this.loading = false;
      setTimeout(() => {
        this.tlPageIn = this.$gsap.timeline()
        this.tlPageIn
        .to('.container-default', {
          duration: 0.1,
          visibility: 'visible',
        })
        .from('.container-default', { 
          opacity: 0,
          y:-300, 
          duration: .8, 
          ease: 'power2.out' 
        })
      }, 0)        
    },
    taduMobMenu() {
      this.tlPageOut = this.$gsap.timeline()
      this.tlPageOut.to('.tadu', {
      opacity: 0,
      ease: 'power1.in',
      y: -100,
      duration: 0.3
      }) 
    }
  },
  beforeRouteLeave(to, from, next) {
    this.tlPageOut = this.$gsap.timeline()
    this.tlPageOut.to('.container-default', {
      opacity: 0,
      y:300, 
      duration: .3, 
      ease: 'power1.in',
      onComplete: () => {
        next()
      }, 
    }) 
  },
  components: {
    TaduSvg,
    'lottie': Lottie
  }
}
</script>

<style lang="scss">
.info-contact {
  width: 100%;
  max-width: 480px;
  margin: 0 0 40px 0;
}
.subTitle-contact {
  font-size: 0.775rem;
  margin-bottom: 5px;
}
</style>
