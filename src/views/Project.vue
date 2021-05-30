<template>
  <div class="project">
    <transition name="fade">
    <TaduSvg v-if="expShowMenu" ></TaduSvg>
    </transition>
  </div>
</template>

<script>
import TaduSvg from '@/components/TaduSvg.vue'

export default {
  name: 'Project',
  props:['expShowMenu'],
  components: {
    TaduSvg
  }
}
</script>