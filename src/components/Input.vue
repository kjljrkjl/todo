<template>
  <div class="input1">
    <div action="" class="base">
      <input type="text" v-model="inputValue">
      <button @click="AddList">添加</button>
    </div>
    
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  data() {
    return {
      inputValue: ''
    }
  },
  methods: {
    ...mapMutations({
        getList:'getList'
    }),
    AddList() {
      this.$store.commit('addList',{matter:this.inputValue,success:()=>{
          this.getList()
      }})
    }
  }
}
</script>

<style  scoped> 
.input1{width:400px;height:60px;text-align: center;}
.base{width:350px;;height:50px;display: flex;justify-content: space-around;align-items: center;}
input{width:250px;height:30px;display: inline-block;font-size:16px;border: none;border: 1px solid #ccc;}
button{width:50px;height:30px;font-size: 16px;}


</style>
