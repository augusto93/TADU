<template>
  <div class="filters">
    <div class="selected-filter">
      <p class="target">All</p>
      <div class="seta-dropdown">\/</div>
    </div>
    <ul v v-if="showDropdown">
      <li>Bar & Restaurants</li>
      <li>Corporate</li>
      <li>Hotels</li>
      <li>Residencies</li>
      <li>Retails</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Filters',
  data() {
    return {
      showDropdown: true
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
    }
  }
</style>
