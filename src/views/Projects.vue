<template>
  <div class="projects">
    <transition name="fade">
    <TaduSvg v-if="expShowMenu" ></TaduSvg>
    </transition>
    <section class="all">
      <div class="container-gallery">
        <div v-for="projetos in projetos" :key="projetos.id" class="box-gallery">
          <img :src="projetos.fotos[0].src" />
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
    this.fetchProjetos();
  },
  mounted() {
    
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