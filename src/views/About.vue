<template>
  <div class="about">
    
    <router-link  @click.native="taduMobMenu" to="/"><TaduSvg v-if="expShowMenu" ></TaduSvg></router-link>
    <div class="title-mobile">
        <!-- <h3>{{ $route.name }}</h3> -->
        <h3>Sobre</h3> 
    </div>
    <section class="all"> 
        <div class="loading" v-if="loading">
          <lottie :options="defaultOptions" :height="150" :width="150"/>
        </div>   
        <div v-if="api" class="container-default">
          <div class="text-about">
            <span style="white-space: pre-wrap;">
            {{api.texto}}
            </span>
          </div>
          <div class="subTitle-about">
            Nossa equipe
          </div>
          <div class="img-about-flex">
            <div v-for="team in api.team"  :key="team.id"  class="img-about">
              <img :src="team.foto" alt=" ">
              <div>
               {{team.nome}} <br>
               {{team.cargo}} 
              </div>
            </div>
          </div>
        </div>
    </section>
  </div>
</template>

<script>
import TaduSvg from '@/components/TaduSvg.vue'
import fetchData from '@/mixins/fetchData.js'
import Lottie from '@/components/lottie.vue'
import * as animationDataLoading from '@/assets/tadu.json'

export default {
  name: 'About',
  props:['expShowMenu'],
  mixins: [fetchData],
  data() {
    return {
      showAbout: false,
      defaultOptions: {animationData: animationDataLoading.default}
    }
  },
  created() {
    this.fetchProjetos("/paginas/sobre");
  },
  mounted() {
      
  },
  watch: {
    'api': 'pageIn'
  },
  methods: {
    pageIn() {
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
/* ABOUT */
.subTitle-about {
  margin:0 0 60px 0;
  text-align: center;
}

.img-about-flex {
  // display: flex;
  // flex-direction: row;
  // flex-wrap: wrap;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(288px, 420px));
  // grid-template-columns: auto auto auto;
}

.text-about {
  width: 100%;
  max-width: 640px;
  margin: 0 0 60px 0;
}

.img-about {
  width: 100%;
  max-width: 420px;
  margin-bottom: 50px;
  font-size: 0.775rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  overflow: hidden;
}

.img-about img{
  max-width: 216px;
  max-height: 330px;
  min-height: 330px;
  object-fit: cover;
}

.img-about div {
  width: 100%;
  max-width: 173px;
  padding:5px 0 0 20px;

}
/* END ABOUT */
</style>
