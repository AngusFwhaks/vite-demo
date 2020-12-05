<template>
  <p>{{ msg }}</p>
  <HelloWorld msg="Hello Vue 3.0 + Vite"></HelloWorld>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import HelloWorld from '/@/components/HelloWorld.vue'

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld
  },
  setup() {
    const data = reactive({
      msg: 'HelloWorld'
    })
    return {
      ...toRefs(data)
    }
  }
})
</script>

<style></style>
