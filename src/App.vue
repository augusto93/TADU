<template>
  <div id="app">
    <header id="header" 
    :class="[{ sticky_to_top: stickyActive }, { hide_header: hideHome }]" >
      <div class="box-menu">
        
        <nav class="menu">
          <div id="taduArq" class="taduarq" :class="{ taduarqani: showTaduArq }">
            <h2>
              <router-link to="/">Tadu Arquitetura</router-link>
            </h2>
          </div>
          <ul>
            <li @click="active = 'about'" :class="{active:active === 'about'}">
                <router-link to="/about">Sobre</router-link>
            </li>
            <li @click="active = 'projects'" :class="{active:active === 'projects'}">
                <router-link to="/projects">Projetos</router-link>
            </li>
            <li @click="active = 'contact'" :class="{active:active === 'contact'}">
                <router-link to="/contact">Contato</router-link>
            </li>
          </ul>
        </nav>
        <!-- <nav class="translate">
          <ul>
            <li>PT</li>
            <li>EN</li>
          </ul>
        </nav> -->
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
          <!-- <nav class="translate-mobile">
            <ul>
              <li>PT</li>
              <li>EN</li>
            </ul>
          </nav> -->
          <nav class="menu-mobile">
            <ul>
              <li @click="closeMenu"><router-link to="/about">Sobre</router-link></li>
              <li @click="closeMenu"><router-link to="/projects">Projetos</router-link></li>
              <li @click="closeMenu"><router-link to="/Contact">Contato</router-link></li>
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
      stickyActive: false,
      hideHome:false
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
    document.addEventListener('scroll', this.stickyHeader)
  },
  destroyed () {
    window.removeEventListener('scroll', this.stickyHeader);
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
          const taduarq = document.getElementById("taduArq");
          taduarq.classList.remove("taduarqani");
        });
        
        this.hideHome = true
        this.showHome = false
      } else {
        this.hideHome = false
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
    markMenu: function() {
      let route = this.$route.path
      if(route === '/') {
        this.active = null
      } else if(route === '/about') {
        this.active = 'about'
      } else if(route === '/projects') {
        this.active = 'projects'
      } else if(route === '/contact') {
        this.active = 'contact'
      } else if(route != '/' & route != '/about' & route != '/contact') {
        this.active = 'projects'
      }
    },
    stickyHeader: function() {
      const distanceToTop = window.pageYOffset;
       if (distanceToTop != 0){
         this.stickyActive = true
       }else {
         this.stickyActive = false
       }
    },
    closeMenu: function() {
      if(this.showMenu === true) {
        this.tlPageOut = this.$gsap.timeline()
        this.tlPageOut.to('.tadu', {
        opacity: 0,
        ease: 'power1.in',
        y: -100,
        duration: 0.3,
          onComplete: () => {
            this.showMenu = !this.showMenu
          },
        }) 
      } else {
        this.showMenu = !this.showMenu
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
    top: 0;
    // margin:40px 0 0 0;
    padding:60px 0 20px 0;
    max-width: 1280px;
    width: 100%;
    background: rgba(0, 0, 0, 0.92);
    transition:  transform .5s ease;
  }

  .sticky_to_top{
    transform: translate(0, -40px);
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
    transition: all 0.5s ease-out;
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
  .tadu-start {
    position: fixed;
    top: 60px;
    width: 90% !important;
    max-width: 1280px;
    z-index: 98;
    display: flex;
    flex-direction: column;
  }
  .tadu-start svg {
    position: absolute;
    top:0;
    align-self: flex-end;
  }
  .main-imgs {
  position: relative;
  width: 80%;
  margin-top: 50vh;
  }

.main-imgs ul li {
  margin:0 0 40px 0;
  
}

.box-img-home{
  overflow: hidden;
  width: 100%;
  height: 100%;
}

.main-imgs img {
  width: 100%;
  max-height: 620px;
  min-height: 415px;
  object-fit: cover;
  transform: scale(1);
  opacity: 0;
  transition: transform .5s ease, opacity 1s ease;
}

 .main-imgs ul li:hover img{
    transform: scale(1.05);
  }

.title-mobile {
  position: sticky;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  padding: 10px 0 10px 0;
  display: none;
  z-index: 97;
  background: rgba(0, 0, 0, 0.92);
  top:65px;
  margin:105px 0 0 0;
}

.title-mobile h3 {
  font-size: 1rem;
}

.container-default {
  position: relative;
  padding: 120px 0 40px 0;
  visibility: hidden;
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
  font-size: 1rem;
  margin:0 0 4px 0;
}

.box-menu-mobile .translate-mobile {
  margin: 0 0 10px 0;
}

.box-menu-mobile .translate-mobile ul li {
  display: inline;
  font-size: 0.675rem;
}

.box-menu-mobile .translate-mobile ul li:first-child{
  margin:0 10px 0 0;
}

.bt-menu-mobile {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  // background-color: black;
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
  height: 1px;
  background-color: white;
  -webkit-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

/* PROJETOS */
.container-gallery {
  position:relative;
  padding: 100px 0 0 0;
  visibility: hidden;
}

.projects-header {
  position:sticky;
  width:100%;
  padding:0 0 10px 0;
  display:flex;
  flex-direction: row;
  top:67px;
  background: rgba(0, 0, 0, 0.92);
  z-index: 96;
}

.projects-header div.title-dropdown {
  margin:0 5px 0 0;
}

.grid-projects {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  // grid-auto-rows: 774px;
  grid-auto-flow: row;
  grid-gap: 40px;
}

.grid-projects2 {
  // display: flex;
}

.box-gallery {
  position: relative;
  /* height: 100%; */
  grid-column: span 1;
  overflow: hidden;
}

.box-gallery img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1);
  transition: .5s ease;
}

.box-gallery:nth-child(3n) {
  grid-column: span 2;
}

.hover-projects {
  position:absolute;
  top:-100px;
  left:0;
  width:100%;
  height: 100%;
  opacity: 0;
  transition: .3s ease-in;
} 



.box-gallery:hover img{
 transform: scale(1.05);
}

.box-gallery:hover .hover-projects, .box-gallery:active .hover-projects  {
  opacity: 1;
  top:0;
  transition: .3s ease-out;
  transition-delay: .3s;
}

.animation-hover {
  position:relative;
  // background-color: #735426;
  width:100%;
  height: 100%;
  top:0;
}

.animation-hover div {
  padding:2%;
}

/* END PROJETOS */
/* PROJETO */
.container-gallery2 {
  position: relative;
  padding: 100px 0 40px 0;
  visibility: hidden;
}
.main-img-project {
  position: relative;
  width: 100%;
  padding: 0 0 40px 0;
  margin: 0 0 -7px 0;
  overflow: hidden;
}
.main-img-project img {
  width: 100%;
  height:100%;
  max-height: 775px;
  object-fit: cover;
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
  position: relative;
}
.about-project .about-project-bl1 div.bloco1-about {
  position:absolute;
  z-index: 90;
}
.about-project .about-project-bl1 div.bloco2-about {
  opacity: 0;
  height: 0;
  min-height: 80px;
}

.about-project .about-project-bl1 p {
  cursor:pointer;
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
  max-height: 382.39px;
}

.grid-imgs-project div:nth-child(4n+6), .grid-imgs-project div:nth-child(2) {
  grid-row: span 2;
  max-height: 804px;
  min-height: 804px;
}

.grid-imgs-project div:nth-child(4n){
  grid-column: span 2;
  max-height: 775px;
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
  justify-content: space-between;
}

// .more-projects div {
//   width: 32%;
// }

// .more-projects div:nth-child(2) {
//   padding: 0 2% 0 2%;
// }

// .more-projects div img {
//   width: 100%;
// }

.container-button-about-project {
  width: 100%;
  display: none;
  flex-direction: row;
  justify-content: center;
  position: sticky;
  padding: 0;
  z-index: 96;
  top:115px;
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
  // background-color: #000000;
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
  height: 1px;
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
  transform: translateY(0px) rotate(135deg);
}
.plus-straps.classactiveabout div:nth-child(2) {
  transform: translateY(-1px) rotate(-135deg);
}
.project-header {
  display: flex;
  width:100%;
  flex-direction: row;
  justify-content: space-between;
  margin:0 0 10px 0;
}

.prev-next {
  display:flex;
  flex-direction: row;
}

.prev-next div {
  cursor:pointer;
}

.prev-next div:nth-child(2) {
  margin:0 10px 0 10px;
}

/* END PROJETO */

.loading {
  position:fixed;
  width:100%;
  height: 100vh;
  top:0;
  left:0;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.loading p{
  font-size: 0.5rem;
}

.grid-imgs-project-2 {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width:100%;
}

.grid-imgs-project-2 div {
  width:49%
}

.grid-imgs-project-2 div img {
  width:100%;
  height: 100%;
  object-fit: cover;
} 

.grid-imgs-project-2 div:nth-child(3n){
  width:100%;
}  

.grid-imgs-project-2 div:first-child, .grid-imgs-project-2 div:nth-child(2){
  
}  

.carregando {
  position: absolute; 
  margin: -10px 0 0 0;
}

@media screen and (max-width: 1280px) {
  section.all {
    width: 90%;
    max-width: 1280px;
    margin: 60px 5% 80px 5%;
  }

  header {
    width: 90%;
    padding-left: 5%;
    padding-right: 5%;
  }
  .grid-projects {
    // grid-gap: 5vw;
    // grid-auto-rows: 714px;
  }
  .grid-imgs-project {
    grid-gap: 3vw;
  }
  .main-imgs ul li {
  margin:0 0 3vw 0;
  }
  .main-imgs img {
  height: 80vw;  
  max-height: unset;
  min-height:unset;
}
}
@media screen and (max-width: 1024px) {
  header div.box-menu nav ul {
    display: none;
  }
  .container-default {
    padding: 0 0 0 0; 
  }
  .container-gallery {
    padding:0 0 0 0;
  }
  .box-gallery {
    grid-column: span 2;
  }
  .grid-projects{
    // grid-auto-rows: 620px;
  }
  .grid-imgs-project{
    grid-template-columns: repeat(1, 100%);
  }

  .grid-imgs-project div,
  .grid-imgs-project div:nth-child(4n+6),
  .grid-imgs-project div:nth-child(2),
  .grid-imgs-project div:nth-child(4n) {
    grid-column: span 1;
    grid-row: span 1;
    max-height: unset;
    min-height: unset;
    height: 90vw;
  }


  .title-mobile {
    display: flex;
  }
  .main-img-project {
    // padding: 0 0 3vw 0;
    // height:90vw;
    
    padding:0 0 0 0;
  }
   .main-img-project img{
    height: unset;
    max-height: unset;
    width: 100%;
    object-fit: unset;
  }
  .about-project {
    display: none;
  }
  .container-button-about-project {
    display: flex;
  }
  .container-gallery2 {
    padding: 0 0 40px 0;
  }
  footer {
    display: flex;
  }
  .box-menu-mobile {
    margin: 0 0 75px 10%;
  }
  .projects-header {
    top:109px;
  }
  .projects-header ul li{ 
    display:block;
    margin:0 0 5px 0;
  } 
  .hide_header{
    display:none;
  }
  .carregando {
  position: fixed; 
  margin:0;
  top:15px;
  }
  .grid-imgs-project-2 div {
    width:100%
  }
}

@media screen and (max-width: 768px) {
  .grid-projects {
    // grid-auto-rows: 464px;
  }
  
}

@media screen and (max-width: 540px) {
  .grid-projects {
    // grid-auto-rows: 326px;
  }
  .img-about img,
  .img-about div {
    width: 50%;
  }
  .main-imgs img {
  height: 90vw;  
  }
}

@media screen and (max-width: 414px) {
  .grid-projects {
    // grid-auto-rows: 250px;
  }
  .main-imgs img {
  height: 95vw;  
  }
}

@media screen and (max-width: 375px) {
  .grid-projects {
    // grid-auto-rows: 225px;
  }
  .main-imgs img {
  height: 100vw;  
  }
  
}

@media screen and (max-width: 320px) {
  .grid-projects {
    // grid-auto-rows: 192px;
    justify-content: space-between;
  }
}

/* MOBILE */
@media screen and (max-width: 500px) {
  .tadu {
    top: 40px;
    margin: 0 5% 0 5%;
  }
  .tadu-start {
    top: 40px;
    margin: 0 5% 0 5% !important;
  }
  .tadu svg {
    width: 90% !important;
    align-self: center;
    margin: 0;
  }
  .tadu-start svg {
    width: 90% !important;
    align-self: center;
    margin: 0;
  }
  .main-imgs {
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;
    margin-top:50vh;
  }
  .seta-dropdown {
    display:none;
  }
  // .container-gallery {
  //   padding: 100px 0 0 0;
  // }
}
/* ANIMAÇÕES */


.more-project-2-enter-active,
.more-project-2-leave-active {
  transition: all .8s ease-in;
  max-height: 1030px;
}
.more-project-2-enter, .more-project-2-leave-to /* .fade-leave-active below version 2.1.8 */ {
  max-height: 0;
  opacity: 0;
}


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
  -webkit-transform: translateY(10px) rotate(45deg);
  -ms-transform: translateY(10px) rotate(45deg);
  -o-transform: translateY(10px) rotate(45deg);
  transform: translateY(10px) rotate(45deg);
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
  background-color: rgba(0, 0, 0, 1);
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
