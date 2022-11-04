<template>
  <router-view />
</template>

<script>
import { defineComponent, onMounted } from 'vue'
import eventBus from 'src/utils/eventBus'

export default defineComponent({
  name: 'App',
  setup () {
    const init = () => { eventBus.emit('plus') }
    onMounted(() => { init() })
  }
})
</script>
