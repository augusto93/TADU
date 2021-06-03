<template>
  <div class="projects">
    
    <router-link to="/"><TaduSvg v-if="expShowMenu" ></TaduSvg></router-link>
    
    <section class="all">
      <div class="container-gallery">
        <div v-for="projetos in projetos" :key="projetos.id" class="box-gallery">
          <router-link :to="{name: 'Project', params:{project: projetos.id}}"><img :src="projetos.fotocapa" /></router-link>
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
    // setTimeout(this.gridProjects, 500);
    this.tlPageIn = this.$gsap.timeline()
    this.tlPageIn
      .from('.container-gallery', { 
        opacity: 0,
        y:-500, 
        duration: .8, 
        ease: 'power2.out' 
        })
  },
  updated() {
    this.$nextTick(() => {
        this.gridProjects()
    })
  },
  methods: {
    gridProjects() {
      let divs = document.querySelectorAll('.box-gallery'); 
      console.log(divs);
      let divsArr = Array.from(divs);
      let lastDiv = divsArr.pop(); 
      let arraySize = divsArr.length;
      let fixNumberArr = arraySize + 1;
      let fixNumberArr2 = fixNumberArr + 1;

      if(fixNumberArr % 3 === 0 || (fixNumberArr2 % 3) === 0 ){
      console.log('é múltiplo');
      }else{
        console.log('não é múltiplo')
        lastDiv.style.gridColumn="span 2"
      }
    }
  },
  components: {
    TaduSvg
  }
}
</script>

<style lang="scss">

</style>