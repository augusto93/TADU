<template>
  <div class="projects">
    <transition name="fade">
    <TaduSvg v-if="expShowMenu" ></TaduSvg>
    </transition>
  </div>
</template>

<script>
import TaduSvg from '@/components/TaduSvg.vue'

export default {
  name: 'Projects',
  props: ['project', 'expShowMenu'],
  components: {
    TaduSvg
  }
}
</script>