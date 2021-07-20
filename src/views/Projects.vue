<template>
  <div class="projects">
    <router-link @click.native="taduMobMenu" to="/"><TaduSvg v-if="expShowMenu" ></TaduSvg></router-link>
    <div class="title-mobile">
      <!-- <h3>{{ $route.name }}</h3> -->
      <h3>Projetos</h3>
    </div>
    <section class="all">
      <div class="loading" v-if="loading">
         <lottie :options="defaultOptions" :height="150" :width="150"/>
      </div>
      <div v-if="api" class="container-gallery">
        <div class="projects-header">
          <!-- <div class="title-dropdown">Exibindo — </div>   -->
          <Filters></Filters>        
        </div>
        <!-- <div class="grid-projects">
          <div v-for="projetos in api"  :key="projetos.id" class="box-gallery">
            <router-link :to="{name: 'Project', params:{project: projetos.id}}">
              <img :src="projetos.fotocapa" />
              <div class="hover-projects">
                <div class="animation-hover" :style="{ backgroundColor: [projetos.cor] }">
                  <div>{{projetos.nome}}</div>
                </div>
              </div>
            </router-link>
          </div>
        </div> -->

        <div class="grid-projects2">
          <!-- <transition-group class="grid-trans" name="fade"> -->
          <div class="grid-trans">
          <div class="box-gallery" :key="projetos.id" v-for="projetos in filteredProjects"   >
            <router-link :to="{name: 'Project', params:{project: projetos.id}}">
              <img :src="projetos.fotocapa" />
              <div class="hover-projects">
                <div class="animation-hover" :style="{ backgroundColor: [projetos.cor] }">
                  <div>{{projetos.nome}}</div>
                </div>
              </div>
            </router-link>
          </div>
          </div>
          <!-- </transition-group> -->
        </div>

      </div>
    </section>
  </div>
</template>

<script>
import TaduSvg from '@/components/TaduSvg.vue'
import fetchData from '@/mixins/fetchData.js'
import Filters from '../components/Filters.vue'
import Lottie from '@/components/lottie.vue';
import * as animationData from '@/assets/tadu.json'; 

export default {
  name: 'Projects',
  mixins: [fetchData, Filters],
  props: ['project', 'expShowMenu'],
  data() {
    return {
      showAbout: false,
      defaultOptions: {animationData: animationData.default},
      categorias: 'todos',
    }
  },
  computed: {
    filteredProjects: function() {
        let categorias = this.categorias;
        
        if(categorias === "todos") {
          return this.api
        } else {
          return this.api.filter(function(projetos) {
            return projetos.categoria === categorias;
          });
        }
    }
  },
  created() {
    this.fetchProjetos("/projeto");
  },
  mounted() {

  },
  watch: {
    'api': 'pageIn',
  },
  updated() {
    this.$nextTick(() => {
      this.gridProjects()
    })
  },
  methods: {
    gridProjects() {
      let divs = document.querySelectorAll('.box-gallery'); 
      let divsArr = Array.from(divs);
      let lastDiv = divsArr.pop(); 
      let arraySize = divsArr.length;
      let fixNumberArr = arraySize + 1;
      let fixNumberArr2 = fixNumberArr + 1;

      if(fixNumberArr % 3 === 0 || (fixNumberArr2 % 3) === 0) {
        // console.log('é múltiplo');
      }else {
        // console.log('não é múltiplo')
        lastDiv.style.gridColumn="span 2"
      }
    },
    
    pageIn(){
      setTimeout(() => {
        this.tlPageIn = this.$gsap.timeline()
        this.tlPageIn
        .to('.container-gallery', {
          duration: 0.1,
          visibility: 'visible',
        })
        .from('.container-gallery', { 
          opacity: 0,
          y:-300, 
          duration: .8, 
          ease: 'power2.out' 
        })
      }, 0)        
    },
    
    setFilter(filter) {
      this.tlFilter = this.$gsap.timeline()
      this.tlFilter.to('.grid-trans', {
        opacity: 0,
        y:300, 
        duration: .3,
        ease: 'power1.in',
        onComplete: () => {
          this.categorias = filter;
        }, 
      })
      .to('.grid-trans', {
        opacity: 1,
        y:0, 
        duration: .5, 
        ease: 'power1.out',
      })
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
    this.tlPageOut.to('.container-gallery', {
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
    Filters,
    'lottie': Lottie
  }
}
</script>

<style lang="scss">

.grid-trans{
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap:30px;
}

.grid-trans .box-gallery{
  width:49%;
  max-width: 625px;
  max-height: 394.5px;
}

.grid-trans .box-gallery:nth-child(3n) {
  width: 100%;
  max-width: 1280px;
  max-height: 775px;
}

// .fade-enter-active, .fade-leave-active {
//   transition:all .1;
// }
// .fade-enter, .fade-leave-to /* .fade-leave-active em versões anteriores a 2.1.8 */ {
//   opacity: 0;
//   transform: scale(0.9);
// }



@media screen and (max-width: 1280px) {
  .grid-trans .box-gallery{
    width:100%;
    max-width: 1280px;
    max-height: none;
  }
}

@media screen and (max-width: 1024px) {
  .grid-trans .box-gallery{
    width:100%;
    max-height: none;
  }
}

</style>