<template>
  <q-page padding>
    <q-btn @click="toggleShow">show</q-btn>
    <transition appear enter-active-class="animated rotateOutDownRight" leave-active-class="animated rotateOutUpRight">
      <!-- Wrapping only one DOM element, defined by QBtn -->
      <q-btn v-show="show" color="secondary" icon="mail" label="Email" />
    </transition>
    <!-- <div class="box row q-gutter-md">
      <div class="one">ssss</div>
      <div class="two">ssss</div>
      <div class="three">ss</div>
    </div>
    <div class="box row q-gutter-md">
      <div class="one">ssss</div>
      <div class="two">ssss</div>
      <div class="three">ss</div>
    </div>
    <div class="box row q-gutter-md">
      <div class="one">ssss</div>
      <div class="two">ssss</div>
      <div class="three">ss</div>
    </div>
    <div class="box row q-gutter-md">
      <div class="one">ssss</div>
      <div class="two">ssss</div>
      <div class="three">ss</div>
    </div> -->
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
const show = ref(true)
const toggleShow = () => {
  show.value = !show.value
}
</script>

<style>
.box {
  width: 800px;
  height: 800px;
  border: 1px solid red;
}

.one {
  width: 100px;
  height: 100px;
  border: 1px solid green;
}

.two {
  width: 300px;
  height: 300px;
  border: 1px solid orange;
}

.three {
  width: 200px;
  height: 200px;
  border: 1px solid blue;
}
</style>
