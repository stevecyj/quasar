<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    >
    <div class="q-pa-md row items-start q-gutter-md"></div>
  </q-page>
</template>

<script>
import { defineComponent, onMounted } from 'vue'
import eventBus from 'src/utils/eventBus.js'

export default defineComponent({
  name: 'IndexPage',
  setup () {
    // const app = getCurrentInstance()
    eventBus.on('plus', () => { console.log('index') })
    onMounted(() => { })
    return {
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
    }
  }
})
</script>
