<template>
  <div class="about">
    <transition name="fade">
    <TaduSvg v-if="expShowMenu" ></TaduSvg>
    </transition>
    <section class="all">     
        <div class="container-default">
          <div class="text-about">
            <p>Criação consciente<br></p>
            <br/>
            <p>Somos um escritório de arquitetura aonde criamos significado traduzido em espaços e visão de mundo.</p><br > 
            <p>Apostamos na simplicidade da resposta justa para cada novo desafio. Em linhas gerais nosso trabalho é fruto da relação generosa entre a história, o espaço e o cliente final.</p>
          </div>
          <div class="subTitle-about">
            Our team
          </div>
          <div class="img-about-flex">
            <div class="img-about">
              <img src="@/assets/person1.jpg" alt="Founder, Arquitect">
              <div>
               Thiago Tavares <br>
               Founder, Arquitect 
              </div>
            </div>
            <div class="img-about">
              <img src="@/assets/person1.jpg" alt="Founder, Arquitect">
              <div>
               João Duayer <br>
               Founder, Arquitect
              </div>
            </div>
            <div class="img-about">
              <img src="@/assets/person1.jpg" alt="Founder, Arquitect">
              <div>
               Melissa Lacaz <br>
               Arquitect
              </div>
            </div>
            <div class="img-about">
              <img src="@/assets/person1.jpg" alt="Founder, Arquitect">
              <div>
               Eduardo Solza <br>
               Arquitect
              </div>
            </div>
            <div class="img-about">
              <img src="@/assets/person1.jpg" alt="Founder, Arquitect">
              <div>
               Thiago Tavares <br>
               Founder, Arquitect
              </div>
            </div>
            <div class="img-about">
              <img src="@/assets/person1.jpg" alt="Founder, Arquitect">
              <div>
               Melissa Lacaz <br>
               Arquitect
              </div>
            </div>
          </div>
        </div>
    </section>
  </div>
</template>

<script>
import TaduSvg from '@/components/TaduSvg.vue'

export default {
  name: 'About',
  props:['expShowMenu'],
  // data() {
  //   return {
  //     teste: true
  //   }
  // },
  components: {
    TaduSvg
  }
}
</script>

<style lang="scss">
/* ABOUT */
.subTitle-about {
  margin-bottom: 80px;
  /* font-size: 18px; */
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
  margin-bottom: 150px;
  /* margin-top: 80px; */
}

.img-about {
  width: 100%;
  max-width: 420px;
  margin-bottom: 50px;
  font-size: 0.875rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.img-about div {
  width: 100%;
  max-width: 173px;
  padding-left: 20px;
  padding-right: 10px;
}
/* END ABOUT */
</style>
