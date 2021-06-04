<template>
  <div class="contact">
    
    <router-link to="/"><TaduSvg v-if="expShowMenu" ></TaduSvg></router-link>
    <div class="title-mobile">
      <h3>{{ $route.name }}</h3>
    </div>
    <section class="all">        
      <div class="container-default">
        <div class="info-contact">
          <div class="subTitle-contact">
            For general inquiries
          </div>
          <div>
            info@taduarquitetura.com
          </div>
        </div>
        <div class="info-contact">
          <div class="subTitle-contact">
            For new business
          </div>
          <div>
            new@taduarquitetura.com
          </div>
        </div>
        <div class="info-contact">
          <div class="subTitle-contact">
            For press inquiries
          </div>
          <div>
            press@taduarquitetura.com
          </div>
        </div>
        <div class="info-contact">
          <div class="subTitle-contact">
            Jobs and internships
          </div>
          <div>
            job@taduarquitetura.com
          </div>
        </div>
        <div class="info-contact">
          <div class="subTitle-contact">
            Instagram
          </div>
          <div>
            @taduarquitetura
          </div>
        </div>
        <div class="info-contact">
          <div class="subTitle-contact">
            Find us here
          </div>
          <div>
            We are right next door of Parque Laje - easily accessible by car, train or bike.
          </div>
        </div>
        <div class="info-contact">
          <div class="subTitle-contact">
            Office in Rio
          </div>
          <div>
            T +55 21 2715 12 49<br>
            Rua General Dionísio<br>
            3013 AA Humaitá<br>
            Rio de Janeiro<br>
            Brazil
          </div>
        </div>
        <div class="info-contact">
          <div class="subTitle-contact">
            Office in São Paulo
          </div>
          <div>
            T +55 11 9415 71 76<br>
            Rua General Dionísio<br>
            3013 AA Humaitá<br>
            São Paulo<br>
            Brazil
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import TaduSvg from '@/components/TaduSvg.vue'

export default {
  name: 'Contact',
  props:['expShowMenu'],
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
