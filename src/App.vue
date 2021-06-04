<template>
  <div id="app">
    <header>
      <div class="box-menu">
        
        <nav class="menu">
          <div id="taduArq" class="taduarq" :class="{ taduarqani: showTaduArq }">
            <h2>
              <router-link to="/">Tadu Arquitetura</router-link>
            </h2>
          </div>
          <ul>
            <li @click="active = 'about'" :class="{active:active === 'about'}">
                <router-link to="/about">About</router-link>
            </li>
            <li @click="active = 'projects'" :class="{active:active === 'projects'}">
                <router-link to="/projects">Projects</router-link>
            </li>
            <li @click="active = 'contact'" :class="{active:active === 'contact'}">
                <router-link to="/contact">Contact</router-link>
            </li>
          </ul>
        </nav>
        <nav class="translate">
          <ul>
            <li>PT</li>
            <li>EN</li>
          </ul>
        </nav>
      </div>
        
    </header>
    <router-view :expShowMenu="showMenu"></router-view>
    <footer>
      <div v-on:click="showMenu = !showMenu" class="bt-menu-mobile">
        <div :class="{ classactive: showMenu }" class="hamburguer-straps"  >
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
      </div>
    </footer>
    <transition name="fade">
    <div v-if="showMenu"  class="menu-mobile-full">
        <div class="box-menu-mobile">
          <nav class="translate-mobile">
            <ul>
              <li>PT</li>
              <li>EN</li>
            </ul>
          </nav>
          <nav class="menu-mobile">
            <ul>
              <li v-on:click="showMenu = !showMenu"><router-link to="/about">About</router-link></li>
              <li v-on:click="showMenu = !showMenu"><router-link to="/projects">Projects</router-link></li>
              <li v-on:click="showMenu=  !showMenu"><router-link to="/Contact">Contact</router-link></li>
            </ul>
          </nav>
        </div>
    </div>
    </transition>
  </div>
</template>

<script>
// @ is an alias to /src
// import TaduSvg from '@/components/TaduSvg.vue'
// import { mapState, mapMutations } from "vuex"

export default {
  name: 'App',
  data() {
    return {
      active: null,
      showMenu: false,
      showHome:true,
      showTaduArq: false,
    }
  },
  watch: {
    '$route.path': 'checkPath',
  },
  computed: {
    // ...mapState(["showMenuVuex"])
  },
  created() {
    this.checkPath()
  },
  mounted() {
  },
  
  methods: {
    // ...mapMutations(['CHANGE_MENU']),
    checkPath: function() { 
      let route = this.$route.path
      if (route === '/') {
        this.tlTDmenuLeave = this.$gsap.timeline()
        this.tlTDmenuLeave.call(function() {
          var taduarq = document.getElementById("taduArq");
          taduarq.classList.remove("taduarqani");
        });
        this.showHome = false
      } else {
        this.showHome = true
        this.tlTDmenuEnter = this.$gsap.timeline()
        this.tlTDmenuEnter.call(function() {
          var taduarq = document.getElementById("taduArq");
          taduarq.classList.add("taduarqani");
        });
      }
      let stateMenuHome = this.showMenu
      if(stateMenuHome === true & route === '/'){
        this.showMenu = !this.showMenu
      }
      this.markMenu();
    },
    markMenu: function(){
      let route = this.$route.path
      if(route === '/') {
        this.active = null
      } else if(route === '/about') {
        this.active = 'about'
      } else if(route === '/projects') {
        this.active = 'projects'
      } else if(route === '/contact') {
        this.active = 'contact'
      }
    }
  }
}
</script>

<style lang="scss">
  * {
  margin: 0;
  padding: 0;
  }
  @font-face {
    font-family: "CourierSansRegular";
    src: url("assets/fonts/CourierSansLLWeb-Regular.woff2") format("woff2"),
      url("assets/fonts/CourierSansLLWeb-Regular.woff") format("woff");
  }
  html {
    width: 100%;
  }
  body {
    width: 100%;
    margin: 0;
    padding: 0;
    background-color: black;
    color: #ffffff;
    font-family: "CourierSansRegular";
    letter-spacing: 0.1px;
    font-size: 16px;
  }
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  a{
    color:#ffffff;
    text-decoration: none;
  }

  #app {
    position: relative;
    max-width: 1280px;
    margin: 0 auto;
  }

  header {
    position: fixed;
    z-index: 97;
    top: 60px;
    max-width: 1280px;
    width: 100%;
    /* border: 1px solid #ffffff; */
  }

  header div.box-menu {
    position: relative;
    width: 50%;
    /* border: 1px solid blue; */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  header div.box-menu h2 {
    display: none;
    font-size: 1rem;
  }

  header div.box-menu nav{
    display:flex;
    flex-direction:row;
  }


  header div.box-menu nav.menu ul{
    padding:0 3.5vw 0 0;
  }

  .taduarq {
    transition: all 0.4s ease-out;
    overflow: hidden;
    opacity: 0;
    flex:0;
    margin:0 0 0 0;
  }

  .taduarqani {
    flex:1;
    opacity: 1;
    margin:0 150px 0 0;
  }

  .taduarq h2{
    width:157px;
  }

  header div.box-menu nav ul {
    display: flex;
    flex-direction: row;
    /* font-size: 18px; */
  }
  

  header div.box-menu nav ul li {
    display: inline-block;
    cursor: pointer;
  }
  header div.box-menu nav ul li::after {
    content: "";
    display: block;
    width: 0;
    height: 2px;
    background: #ffffff;
    transition: width 0.3s;
  }
  header div.box-menu nav ul li:hover::after {
    width: 100%;
  }

   header div.box-menu nav ul li.active::after {
    width: 100%;
   }

  header div.box-menu nav.menu ul li:nth-child(2) {
    padding: 0 2.5vw 0 2.5vw;
  }

  header div.box-menu nav.translate ul li:nth-child(2) {
    padding: 0 0 0 1vw;
  }

  section.all {
  position: relative;
  width: 100%;
  max-width: 1280px;
  margin: 60px 0 80px 0;
  }

  .tadu {
    position: fixed;
    top: 60px;
    width: 90%;
    max-width: 1280px;
    z-index: 98;
    /* height: 100vh; */
    display: flex;
    flex-direction: column;
  }
  .tadu svg {
    position: absolute;
    top: 0;
    align-self: flex-end;
    width: 50%;
  }
  .main-imgs {
  position: relative;
  width: 80%;
  margin-top: 110vh;
  }

  .main-imgs ul li {
  margin:0 0 40px 0;
  }

.main-imgs img {
  width: 100%;
  max-height: 620px;
  min-height: 415px;
  object-fit: cover;
}

.title-mobile {
  position: fixed;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  padding: 40px 0 0 0;
  display: none;
  z-index: 97;
}

.title-mobile h3 {
  font-size: 1rem;
}

.container-default {
  position: relative;
  padding: 120px 0 40px 0;
}
footer {
  position: fixed;
  bottom: 30px;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  display: none;
  z-index: 99;
}

.box-menu-mobile {
  align-self: flex-end;
}

.box-menu-mobile .menu-mobile ul li {
  font-size: 1.365rem;
}

.box-menu-mobile .translate-mobile {
  margin: 0 0 10px 0;
}

.box-menu-mobile .translate-mobile ul li {
  display: inline;
  font-size: 0.875rem;
}

.bt-menu-mobile {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: black;
  cursor: pointer;
}

.bt-menu-mobile .hamburguer-straps {
  width: 27.15px;
  height: 19.6px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.bt-menu-mobile .hamburguer-straps div {
  width: 100%;
  height: 2px;
  background-color: white;
  -webkit-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

/* PROJETOS */
.container-gallery {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 774px;
  grid-auto-flow: row;
  grid-gap: 40px;
  padding: 100px 0 0 0;
}

.box-gallery {
  position: relative;
  /* height: 100%; */
  grid-column: span 1;
}

.box-gallery img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.box-gallery:nth-child(3n) {
  grid-column: span 2;
}
/* END PROJETOS */
/* PROJETO */
.container-gallery2 {
  position: relative;
  padding: 100px 0 40px 0;
}
.main-img-project {
  position: relative;
  width: 100%;
  padding: 0 0 40px 0;
  margin: 0 0 -7px 0;
}
.main-img-project img {
  width: 100%;
}
.about-project {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 0 40px 0;
}
.about-project .about-project-bl1 {
  width: 50%;
}
.about-project .about-project-bl2 {
  width: 30%;
}

.about-project-blcont {
  position: relative;
  width: 90%;
  margin: 200px 5% 0 5%;
}

.about-project-bl1-mob {
  padding: 0 0 20px 0;
}

.grid-imgs-project {
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 40px;
}
.grid-imgs-project div {
  grid-column: span 1;
}

.grid-imgs-project div:nth-child(2){
  grid-row: span 2;
}

.grid-imgs-project div:nth-child(4){
  grid-column: span 2;
}

.grid-imgs-project div img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.more-projects {
  position: relative;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 100px 0 0 0;
}

.more-projects div {
  width: 32%;
}

.more-projects div:nth-child(2) {
  padding: 0 2% 0 2%;
}

.more-projects div img {
  width: 100%;
}

.container-button-about-project {
  width: 100%;
  display: none;
  flex-direction: row;
  justify-content: center;
  position: fixed;
  padding: 80px 0 0 0;
  z-index: 96;
}
/* .buttonaboutprojectactive {
  width: 90%;
  flex-direction: row;
  justify-content: center;
  padding: 0;
} */
.button-about-project {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #000000;
  cursor: pointer;
}
.plus-straps {
  width: 27.15px;
  height: 27.15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.plus-straps div {
  width: 100%;
  height: 2px;
  background-color: white;
  -webkit-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}
.plus-straps div:nth-child(1) {
  transform: translateY(1px) rotate(90deg);
}
.plus-straps div:nth-child(2) {
  transform: translateY(-1px);
}

.plus-straps.classactiveabout div:nth-child(1) {
  transform: translateY(1px) rotate(135deg);
}
.plus-straps.classactiveabout div:nth-child(2) {
  transform: translateY(-1px) rotate(-135deg);
}

/* END PROJETO */

@media screen and (max-width: 1280px) {
  section.all {
    width: 90%;
    max-width: 1280px;
    margin: 60px 5% 80px 5%;
  }

  header {
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;
    top: 40px;
  }
  .container-gallery {
    grid-gap: 5vw;
    grid-auto-rows: 714px;
  }
  .grid-imgs-project {
    grid-gap: 3vw;
  }
  .main-imgs ul li {
  margin:0 0 3vw 0;
  }
}
@media screen and (max-width: 1024px) {
  header div.box-menu nav ul {
    display: none;
  }
  .container-gallery {
    grid-auto-rows: 620px;
  }
  .title-mobile {
    display: flex;
  }
  .main-img-project {
    padding: 0 0 3vw 0;
  }
  .about-project {
    display: none;
  }
  .container-button-about-project {
    display: flex;
  }
  .container-gallery2 {
    padding: 160px 0 40px 0;
  }
  footer {
    display: flex;
  }
  .box-menu-mobile {
    margin: 0 0 100px 10%;
  }
}

@media screen and (max-width: 768px) {
  .container-default {
    /* padding: 0 0 0 0; */
  }
  .container-gallery {
    grid-auto-rows: 464px;
  }
}

@media screen and (max-width: 540px) {
  .container-gallery {
    grid-auto-rows: 326px;
  }
  .img-about img,
  .img-about div {
    width: 50%;
  }
}

@media screen and (max-width: 414px) {
  .container-gallery {
    grid-auto-rows: 250px;
  }
}

@media screen and (max-width: 375px) {
  .container-gallery {
    grid-auto-rows: 225px;
  }
}

@media screen and (max-width: 320px) {
  .container-gallery {
    grid-auto-rows: 192px;
  }
}

/* MOBILE */
@media screen and (max-width: 500px) {
  .tadu {
    top: 40px;
    margin: 0 5% 0 5%;
  }
  .tadu svg {
    width: 90% !important;
    align-self: center;
    margin: 0;
  }
  .main-imgs {
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;
  }
  .container-gallery {
    padding: 100px 0 0 0;
  }
}
/* ANIMAÇÕES */

/* MENU MOBILE */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.hamburguer-straps.classactive .line:nth-child(2) {
  opacity: 0;
}

.hamburguer-straps.classactive .line:nth-child(1) {
  -webkit-transform: translateY(9px) rotate(45deg);
  -ms-transform: translateY(9px) rotate(45deg);
  -o-transform: translateY(9px) rotate(45deg);
  transform: translateY(9px) rotate(45deg);
}

.hamburguer-straps.classactive .line:nth-child(3) {
  -webkit-transform: translateY(-9px) rotate(-45deg);
  -ms-transform: translateY(-9px) rotate(-45deg);
  -o-transform: translateY(-9px) rotate(-45deg);
  transform: translateY(-9px) rotate(-45deg);
}
/*END MENU MOBILE */

.menu-mobile-full {
  position: fixed;
  width: 100%;
  height: 100.5%;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 97;
  top: 0;
  display: flex;
  flex-direction: row;
}

.box-about-project {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 95;
  top: 0;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
}

header div.box-menu h2 {
display: block !important;
}
// header div.box-menu {
//   width:60% !important;
// }

</style>
