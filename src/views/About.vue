<template>
  <h1>About</h1>
  <a-button type="danger" @click="toHome">跳转</a-button>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'About',
  setup() {
    const router = useRouter()
    const store = useStore()
    onMounted(() => {
      store.commit('change')
    })
    onUnmounted(() => {
      store.commit('change')
    })
    const toHome = () => {
      router.push('/home')
    }
    return { toHome }
  }
})
</script>

<style lang="scss"></style>
