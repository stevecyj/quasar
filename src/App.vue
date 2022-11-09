<template>
  <router-view />
</template>

<script>
import { defineComponent, onMounted } from 'vue'
import { useQuasar } from 'quasar'
import eventBus from 'src/utils/eventBus'

export default defineComponent({
  name: 'App',
  setup() {
    const $q = useQuasar()
    const init = () => {
      eventBus.emit('plus')
      console.log($q.platform)
    }
    onMounted(() => {
      init()
    })
  }
})
</script>
