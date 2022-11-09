<template>
  <div class="text-h3 text-deep-purple-6 q-ma-sm-sm q-ma-md-xl">Lorem ipsum.</div>
  <div class="text-h3 text-deep-purple-6">Lorem ipsum.</div>
  <button @click="toggleDark">change</button>
</template>

<script setup>
import { useQuasar } from 'quasar'

const $q = useQuasar()

const toggleDark = () => {
  $q.dark.toggle()
}
</script>

<style>
.box {
  width: 600px;
}
</style>
