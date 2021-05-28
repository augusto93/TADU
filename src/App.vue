<template>
  <div id="app">
    <header>
      <div class="box-menu">
        <h2>
          Tadu Arquitetura
        </h2>
        <nav class="menu">
          <ul>
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/projects">Projects</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
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
    <router-view/>
    <footer>
      <div v-on:click="show = !show" class="bt-menu-mobile">
        <div :class="{ classactive: show }" class="hamburguer-straps"  >
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
      </div>
    </footer>
  </div>
</template>

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
    z-index: 96;
    top: 60px;
    max-width: 1280px;
    width: 100%;
    /* border: 1px solid #ffffff; */
  }

  header div.box-menu {
    position: relative;
    width: 40%;
    /* border: 1px solid blue; */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  header div.box-menu h2 {
    display: none;
    font-size: 1rem;
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

.main-imgs img {
  width: 100%;
  max-height: 620px;
  min-height: 415px;
  object-fit: cover;
}

.title-mobile {
  position: relative;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  padding: 20px 0 0 0;
  display: none;
}

.title-mobile h3 {
  font-size: 1rem;
}

.container-default {
  position: relative;
  padding: 100px 0 40px 0;
}
</style>
