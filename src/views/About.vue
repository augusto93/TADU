<template>
  <div class="about">
    <transition name="fade">
    <TaduSvg v-if="expShowMenu" ></TaduSvg>
    </transition>
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
