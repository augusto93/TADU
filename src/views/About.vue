<template>
  <div class="about">
    
    <router-link to="/"><TaduSvg v-if="expShowMenu" ></TaduSvg></router-link>
    <div class="title-mobile">
        <h3>{{ $route.name }}</h3>
    </div>
    <section class="all">     
        <div class="container-default">
          <div class="text-about">
            <span style="white-space: pre-wrap;">
            {{projetos.texto}}
            </span>
          </div>
          <div class="subTitle-about">
            Our team
          </div>
          <div class="img-about-flex">
            <div v-for="team in projetos.team"  :key="team.id"  class="img-about">
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

export default {
  name: 'About',
  props:['expShowMenu'],
  mixins: [fetchData],
  created() {
    this.fetchProjetos("/paginas/sobre");
  },
  mounted() {
    this.tlPageIn = this.$gsap.timeline()
    this.tlPageIn
      .from('.container-default', { 
        opacity: 0,
        y:-300, 
        duration: .8, 
        ease: 'power2.out' 
      })
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
    TaduSvg
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
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
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
}

.img-about div {
  width: 100%;
  max-width: 173px;
  padding:5px 0 0 20px;

}
/* END ABOUT */
</style>
