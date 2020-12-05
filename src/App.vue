<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <ul v-show="isShow">
    <li><router-link to="/home" active-class="active">首页</router-link></li>
    <li><router-link to="/about" active-class="active">关于</router-link></li>
  </ul>
  <h1>{{ msg }}</h1>
  <a-button type="danger" @click="changeMsg">按钮</a-button>
  <router-view />
</template>

<script lang="ts">
import { computed, defineComponent, reactive, toRefs, watch } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'App',
  setup() {
    const isShow = computed(() => useStore().state.isShow)
    const data = reactive({
      msg: 'Hello World'
    })

    const changeMsg = () => {
      data.msg = 'Hello Vue'
    }

    watch(
      () => data.msg,
      (newValue, oldValue) => {
        console.log(newValue, oldValue)
      }
    )

    return { isShow, changeMsg, ...toRefs(data) }
  }
})
</script>
<style lang="scss">
.active {
  color: #000;
}
</style>
