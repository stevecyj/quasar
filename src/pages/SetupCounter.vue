<template>
  <h1>{{ counter }}</h1>
  <h1 class="text_color">{{ doubleCount }}</h1>
  <button @click="add">add</button>
  <button @click="toStyle" label="to">toIndex</button>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { useRouter } from 'vue-router'

const $router = useRouter()
const counter = ref(0)
const color = ref('red')

const add = () => {
  counter.value++
}

watch(counter, (newVal, oldVal) => {
  if (newVal % 2 === 0) {
    color.value = 'red'
  } else {
    color.value = 'green'
  }
})

const toStyle = () => {
  $router.push('index')
}

const doubleCount = computed(() => {
  return counter.value * 2
})
</script>

<style>
.text_color {
  color: v-bind(color);
}
</style>
