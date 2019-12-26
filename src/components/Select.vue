<template>
  <div class="select">
    <button @click="selectAll(0)">全部</button>
    <button @click="selectFinished(1)">已完成</button>
    <button @click="selectFinish(-1)">未完成</button>
  </div>
</template>

<script>
import {mapgetters} from 'vuex'
export default{
  methods: {
    selectAll(state1) {
      this.$store.commit('select',state1)
    },
    selectFinished(state1) {
      this.$store.commit('select',state1)
    },
    selectFinish(state1) {
      this.$store.commit('select',state1)
    }
    
  }
}
</script>

<style  scoped>
.select{width:300px;height:50px;display: flex;justify-content: space-around;align-items: center;}
button{width:70px;height:30px;}
</style>
