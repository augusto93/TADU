<template>
  <div class="projects">
    <router-link to="/"><TaduSvg v-if="expShowMenu" ></TaduSvg></router-link>
    <div class="title-mobile">
      <h3>{{ $route.name }}</h3>
    </div>
    <section class="all">
      <div class="loading" v-if="loading">
        <p>loading...</p>
      </div>
      <div v-if="projetos" class="container-gallery">
        <div class="projects-header">
          <div>Showing — </div>
          <ul>
            <li class="target">All</li>
            <li>Bar & Restaurants</li>
            <li>Corporate</li>
            <li>Hotels</li>
            <li>Residencies</li>
            <li>Retails</li>
          </ul>
          
        </div>
        <div class="grid-projects">
          <div v-for="projetos in projetos"  :key="projetos.id" class="box-gallery">
            <router-link :to="{name: 'Project', params:{project: projetos.id}}">
              <img @mouseover="mouseOverProjects" :src="projetos.fotocapa" />
              <div class="hover-projects">
                <div class="animation-hover">
                  <div>{{projetos.nome}}</div>
                </div>
              </div>
            </router-link>
            
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import TaduSvg from '@/components/TaduSvg.vue'
import fetchData from '@/mixins/fetchData.js'

export default {
  name: 'Projects',
  mixins: [fetchData],
  props: ['project', 'expShowMenu'],
   data() {
    return {
      showAbout: false
    }
  },
  created() {
    this.fetchProjetos("/projeto");
  },
  mounted() {

  },
  watch: {
    'projetos': 'pageIn'
  },
  updated() {
    this.$nextTick(() => {
      this.gridProjects()
    })
  },
  methods: {
    gridProjects() {
      let divs = document.querySelectorAll('.box-gallery'); 
      // console.log(divs);
      let divsArr = Array.from(divs);
      let lastDiv = divsArr.pop(); 
      let arraySize = divsArr.length;
      let fixNumberArr = arraySize + 1;
      let fixNumberArr2 = fixNumberArr + 1;

      if(fixNumberArr % 3 === 0 || (fixNumberArr2 % 3) === 0 ){
        // console.log('é múltiplo');
      }else{
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

    mouseOverProjects(e) {
      const gsap = this.$gsap.timeline()
      let divHover = e.target.nextElementSibling
      divHover.classList.add("hovered");
      let divHoverChildren = divHover.firstChild
      
      divHover.onmouseenter = function() {
        divHover.classList.add("hovered");
        gsap.to(divHoverChildren, {
        opacity: 1,
        y: 0,
        duration: .3, 
        ease: 'power1.in'
        })
      };
      divHover.onmouseleave = function(){
        gsap.to( divHoverChildren, {
        opacity: 0,
        y:-100,
        duration: .5, 
        ease: 'power1.out',
        onComplete: () => {
          divHover.classList.remove("hovered");
        }, 
        }) 
        
      };
    },

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
    TaduSvg
  }
}
</script>

<style lang="scss">

</style>