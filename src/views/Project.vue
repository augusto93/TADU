<template>
  <div class="project">
    <div :class="{ buttonaboutprojectactive: showAbout }" class="container-button-about-project">
      <div  v-on:click="showAbout = !showAbout" class="button-about-project" >
        <div :class="{ classactiveabout: showAbout }" class="plus-straps">
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
    <transition name="fade">
    <router-link to="/"><TaduSvg v-if="expShowMenu" ></TaduSvg></router-link>
    </transition>
    <!-- <h1>{{ projetos}}</h1> -->
    <section class="all">
      <div class="container-gallery2">
        <div class="main-img-project">
          <img :src="projetos.fotocapa" alt="">
        </div>
        <div class="about-project">
          <div class="about-project-bl1">
            <p>{{ projetos.descricao }}</p>
          </div>
          <div class="about-project-bl2">
            <p>{{ projetos.especificacao }}</p>
          </div>
        </div>
        <div class="grid-imgs-project">
          <div v-for="fotosgaleria in projetos.fotosgaleria.slice(0, 4)" :key="fotosgaleria.id" >
            <img :src="fotosgaleria.url" :alt="fotosgaleria.description"> 
          </div>
          <!-- <div>
            <img :src="projetos.fotos[0].src" alt="">
          </div>
          <div>
            <img :src="projetos.fotos[0].src" alt="">
          </div> -->
        </div>
        <div class="more-projects">
        <div>
          More projects
        </div>
        <div>
          <img src="img.jpg" alt="">
        </div>
        <div>
          <img src="img.jpg" alt="">
        </div> 
        </div>
      </div>
    </section>
    <transition name="fade">
    <div v-if="showAbout" class="box-about-project" >
      <div class="about-project-blcont">
        <div class="about-project-bl1-mob">
          <p>{{ projetos.descricao }}</p>
        </div>
        <div class="about-project-bl2-mob">
          <p>Floor: 1<br />
            Floor area : 77.25 m²<br />
            Structure : SRC (CFT), RC<br />
            Completion: 03/2020
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

export default {
  name: 'Project',
   data() {
    return {
      showAbout: false
    }
  },
  props:['expShowMenu', 'project'],
  mixins: [fetchData],
  created() {
    this.fetchProjetos(`/projeto/${this.project}`);
  },
  components: {
    TaduSvg
  }
}
</script>