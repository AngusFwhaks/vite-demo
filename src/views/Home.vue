<template>
  <p>{{ msg }}</p>
  <HelloWorld msg="Hello Vue 3.0 + Vite"></HelloWorld>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from 'vue'
import HelloWorld from '/@/components/HelloWorld.vue'
import { fetchList } from '/@/api/index'
export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld
  },
  setup() {
    onMounted(() => {
      fetchList().then(res => {
        console.log(res)
      })
    })
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
