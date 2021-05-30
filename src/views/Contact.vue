<template>
  <div class="contact">
    <transition name="fade">
    <TaduSvg v-if="expShowMenu" ></TaduSvg>
    </transition>
  </div>
</template>

<script>
import TaduSvg from '@/components/TaduSvg.vue'

export default {
  name: 'Contact',
  props:['expShowMenu'],
  components: {
    TaduSvg
  }
}
</script>
