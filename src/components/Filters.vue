<template>
  <div class="filters">
    <div class="selected-filter">
      <p class="target">All</p>
      <div @click="clickDropdown" :class="{ dropdownActive: showDropdown }" class="seta-dropdown"></div>
    </div>
    <transition name="dropdown">
    <ul v-if="showDropdown">
      <li>Bar & Restaurants</li>
      <li>Corporate</li>
      <li>Hotels</li>
      <li>Residencies</li>
      <li>Retails</li>
    </ul>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Filters',
  data() {
    return {
      showDropdown:false
    }
  },
  mounted() {
    this.showFiltersDesktop();
    window.addEventListener("resize", this.showFiltersDesktop);
  },
  methods: {
    clickDropdown() {
      this.showDropdown = !this.showDropdown
    },
    showFiltersDesktop() {
      let userViewHeight = window.innerWidth;
      if (userViewHeight >= 1024) {
        this.showDropdown = true 
      } else {
        this.showDropdown = false
      }
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .filters {
    flex-grow: 2;
    display:flex;
  }
  .filters p{
    margin:0 3% 0 0;
  }
  .filters ul {
  flex-grow: 2;
  }
  .filters ul li{
    display: inline;
    width:auto;
    color:#565656;
    margin:0 3% 0 0;
    cursor:pointer;
    transition: color .3s ease;
  }

  .filters ul li.target, .filters ul li:hover {
    color:#FFFFFF;
  }

  .filters ul li:last-child {
    margin:0;
  }

  .filters .selected-filter {
    display:flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .filters .selected-filter{
    padding:0 3% 0 0;
  }

  .seta-dropdown{
    display:none;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 12px solid #fff;
    margin:10px 0 0 0;
    transition: transform .5s ease;
    transform-origin: center 25%;
  }
  .dropdownActive{
    transform-origin: center 25%;
    transform: rotate(180deg);
  }
  .dropdown-enter-active,
  .dropdown-leave-active {
    transition: all .5s;
    max-height: 230px;
  }
  .dropdown-enter, .dropdown-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
    max-height: 0px;
  }



  @media screen and (max-width: 1024px) {
    .filters ul li{ 
      display:block;
      margin:0 0 5px 0;
    } 
    .filters {
      display:flex;
      flex-direction: column;
    }
    .filters ul {
      padding:5px 0 5px 0;

    }
    .filters .selected-filter{
      padding:0;
    }
    .seta-dropdown{
      display:block;
      cursor:pointer;
    }
  }
</style>
