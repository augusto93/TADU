<template>
  <div>

    <router-link to="/"><TaduSvg v-if="expShowMenu" ></TaduSvg></router-link>

    <div v-if="api" class="title-mobile">
      <h3>{{ api.nome }}</h3>
    </div>

    <div :class="{ buttonaboutprojectactive: showAbout }" class="container-button-about-project">
      <div  v-on:click="showAbout = !showAbout" class="button-about-project" >
        <div :class="{ classactiveabout: showAbout }" class="plus-straps">
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
    
    <section class="all">
      <transition name="fade">
      <div class="loading" v-if="loading">
        <lottie :options="defaultOptions" :height="150" :width="150"/>
        <!-- <p>loading...</p> -->
      </div>
      </transition>
      <div v-if="api" class="container-gallery2">
        <div class="project-header">
          <div>{{ api.nome }}</div>
          <div class="prev-next">
            <div @click="prevProject">Anterior</div>
            <div>.</div>
            <div @click="nextProject">Próximo</div>
          </div>
        </div>
        <div class="main-img-project">
          <img :src="api.fotocapa" alt="">
        </div>
        <div class="about-project">
          <div class="about-project-bl1">
            
           
            <div v-if="!readMoreActivated" class="bloco1-about">
              <p @click="openActivateReadMore"><span style="white-space: pre-wrap;">{{ api.descricao.slice(0, 180) }}</span><span class="more">...</span></p>
              <p class="more" @click="openActivateReadMore">+</p>
            </div>
            
            
            <div class="bloco2-about">
              <p @click="closeActivateReadMore"><span style="white-space: pre-wrap;">{{ api.descricao }}</span></p>
              <p @click="closeActivateReadMore">-</p>
            </div>
    
            
          </div>
          <div class="about-project-bl2">
            <p><span style="white-space: pre-wrap;">{{ api.especificacao }}</span></p>
          </div>
        </div>
        <div class="grid-imgs-project">
          <!-- <div v-for="fotosgaleria in projetos.fotosgaleria.slice(0, 4)" :key="fotosgaleria.id" > -->
          <div v-for="fotos in api.galeria" :key="fotos.foto_id" >
            <img :src="fotos.foto" alt="Projetos"> 
          </div>
        </div>
        
        <div class="more-projects">
          <div>
           <router-link to="/projects">Mais projetos</router-link>
          </div>
          <div class="prev-next">
            <div @click="prevProject">Anterior</div>
            <div>.</div>
            <div @click="nextProject">Próximo</div>
          </div>
        </div>
      </div>
    </section>
    
    <transition name="fade">
    <div v-if="showAbout" class="box-about-project" >
      <div class="about-project-blcont">
        <div class="about-project-bl1-mob">
          <p><span style="white-space: pre-wrap;">{{ api.descricao }}</span></p>
        </div>
        <div class="about-project-bl2-mob">
          <p>
            <span style="white-space: pre-wrap;">
            Floor: 1<br />
            Floor area : 77.25 m²<br />
            Structure : SRC (CFT), RC<br />
            Completion: 03/2020
            </span>
          </p>
        </div>
      </div>
    </div> 
    </transition>
  </div>
</template>

<script>
import TaduSvg from '@/components/TaduSvg.vue'
import fetchData from '@/mixins/fetchData.js'
import Lottie from '@/components/lottie.vue';
import * as animationData from '@/assets/tadu.json';

export default {
  name: 'Project',
   data() {
    return {
      showAbout: false,
      readMoreActivated: false,
      defaultOptions: {animationData: animationData.default},
    }
  },
  props:['expShowMenu', 'project'],
  mixins: [fetchData],
  created() {
    this.fetchProjetos(`/projeto/${this.project}`);
    this.fetchListaProjetos(`/projeto`);
  },
  mounted() {
    
  },
  computed: {
  routeIndex() {
    let routes = this.listaProjetos
    let index;
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].id == this.project) {
        index = i;
        break;
      }
    }
    return index;
  },
  },
  watch: {
     $route (){
       this.fetchProjetos(`/projeto/${this.project}`);
    },
    'api': 'pageIn',
  },
  methods: {
    activateReadMore(){
      this.readMoreActivated = !this.readMoreActivated;
    },
    openActivateReadMore(){
      this.tlopenActivateReadMore = this.$gsap.timeline()
      this.tlopenActivateReadMore
      .to('.bloco2-about', {
        opacity: 1,
        height: "auto",
        duration: .5, 
        ease: 'power2.out',
      })
      .to('.more', {
        opacity: 0,
        duration: .5, 
        ease: 'power2.out',
        onComplete: () => {
          this.activateReadMore()
        }, 
      },"<")
    },
    closeActivateReadMore(){
      this.tlcloseActivateReadMore = this.$gsap.timeline()
      this.tlcloseActivateReadMore
      .to('.bloco1-about', {
        opacity: 1,
        duration: .1, 
        onComplete: () => {
          this.activateReadMore()
        }, 
      })
      .to('.bloco2-about', {
        opacity: 0,
        height: 0,
        duration: 1, 
        ease: 'power2.out',
      })
    },
    pageIn(){
      setTimeout(() => {
        this.tlPageIn = this.$gsap.timeline()
        this.tlPageIn
        .to('.container-gallery2', {
          duration: 0.1,
          visibility: 'visible',
        })
        .from('.container-gallery2', { 
        opacity: 0,
        y:-300, 
        duration: .8, 
        ease: 'power2.out' 
      })
      }, 0)        
    },
    prevProject(){
      let nextproject = this.listaProjetos[this.routeIndex - 1];
      this.$router.push({ name: 'Project', params:{project: nextproject.id}  });
    },
    nextProject(){
      let nextproject = this.listaProjetos[this.routeIndex + 1];
      this.$router.push({ name: 'Project', params:{project: nextproject.id}  });
    }
    
  },
  updated() {
    this.$nextTick(() => {
      
    })
  },
  beforeRouteLeave(to, from, next) {
    this.tlPageOut = this.$gsap.timeline()
    this.tlPageOut.to('.container-gallery2', {
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