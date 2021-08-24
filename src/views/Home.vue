<template>
  <div>

    <lottie :options="defaultOptions2" class="tadu-start" />    
    <TaduSvg></TaduSvg>
    <section class="all">
      <div class="main-imgs">
        <div style="margin: -150px 0 0 0;" v-if="loading">
          <p>carregando...</p>
        </div>
        <div class="seta-dropdown bounce" style="position:absolute; left:10px; top:-145px; height:100%;" v-if="api">
          
        </div>
        <ul v-if="api">
          <li v-for="projeto in filterProjetosHome" :key="projeto.id">
            <div class="box-img-home">
              <router-link :to="{name: 'Project', params:{project: projeto.id}}"><img :src="projeto.fotocapa" /></router-link>
            </div>
            <p>{{projeto.nome}}</p>
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
import Lottie from '@/components/lottie.vue'
import * as animationDataOpening from '@/assets/crop_tadu.json';

export default {
  name: 'Home',
  props:['expShowMenu'],
  mixins: [fetchData],
  data() {
    return {
      showAbout: false,
      defaultOptions2: {animationData: animationDataOpening.default, loop: false}
    }
  },
  computed: {
    filterProjetosHome: function(){
        return this.api.filter(api => api.home === 'on')
    }
  },
  created() {
    this.fetchProjetos("/projeto");
    document.addEventListener('scroll', this.setaDropDown);
  },
  destroyed () {
    window.removeEventListener('scroll', this.setaDropDown);
  },
  mounted() {
    this.taduSize();
    
    window.addEventListener("resize", function () {
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) === false) {
        window.location.reload();
      }
    });
   
    // window.addEventListener("resize", this.taduSize, false);

    this.tlPageIn = this.$gsap.timeline()
    this.tlPageIn
      .from('.tadu-start',{
        opacity: 0,
        y:-100,  
        duration: .8, 
        ease: 'power2.out' 
      })
      .from('.tadu', { 
        opacity: 0,
        delay: 1.5,
        // y:-100,  
        duration: .6, 
        ease: 'power2.out' 
      },"<")
      .to('.tadu-start', {
        visibility: "hidden",
        duration: .1,
      })  
  },

  methods: {
    setaDropDown: function() {
      const distanceToTop = window.pageYOffset;
      let seta = document.querySelector('.seta-dropdown');
       if (distanceToTop != 0){
        //  this.setaDrop = false
        seta.classList.add("seta-off");
       }else {
        //  this.setaDrop = true
        seta.classList.remove("seta-off");
       }
    },
    taduSize() {
      let userViewHeight = window.innerHeight;
      let taduDiv = document.querySelector(".svg").clientHeight
      let heightadjust = userViewHeight - 100;

      if (userViewHeight - 60 > taduDiv) {
        document.querySelector(".svg").style.width = "50%";
        document.querySelector(".svg").style.height = "unset";
        document.querySelector(".tadu-start svg").style.width = "50%";
        document.querySelector(".tadu-start svg").style.height = "unset";
      } else {
        document.querySelector(".svg").style.height = heightadjust;
        document.querySelector(".svg").style.width = "initial";
        document.querySelector(".tadu-start svg").style.height = heightadjust;
        document.querySelector(".tadu-start svg").style.width = "initial";
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
    TaduSvg,
    'lottie': Lottie
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
  .seta-dropdown{
    // display:none;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 12px solid #fff;
    margin:10px 0 0 0;
    transition: opacity .5s ease;
    opacity: 1;
  }
  .bounce {
  animation: bounce 2s 5;
  }
  .seta-off {
    opacity: 0;
  }

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-30px);
    }
    60% {
      transform: translateY(-15px);
    }
  }
</style>
