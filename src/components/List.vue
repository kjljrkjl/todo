<template>
  <div class="list">
    <ul>
        <li v-for="(item,index) in list"
            :key="index"
            :class='item.state?"green":"red"'>
            <span class="content">{{index+1}}.{{item.matter}}</span>
            <button @click="DelList(index)">删除</button>
             <span v-if='item.state'>已完成</span>
            <button  v-else @click="Finish(index)">完成</button>
            
            <!-- <span>{{item.matter}}</span> -->

        </li>
    </ul>
  </div>
</template>

<script>

import {mapState, mapGetters} from 'vuex'
export default {
  data(){
    return{
      flag:true,  
    }
  },
  computed: {
    ...mapState(['list']),
    ...mapGetters(['classify']),
  },

  methods: {
    GetList() {

    this.$store.commit('getList')
    
    },
    DelList(index) {
      this.$store.commit('delList',{index:index,success:()=>{
        this.GetList()
      }})
    },
    Finish(index) {
      this.$store.commit('finish',index)
      this.$store.state.list.finish=!this.flag
      console.log(this.$store.state.list.finish)
    }
  },
  created(){
    this.GetList()

  },
  
}
</script>
<style  scoped>
.list{width:375px;font-size:16px;padding-left: 20px;}
li{width:310px;height:30px;}
.content{width:170px;height:30px;display: inline-block;}
button{width:60px;height:30px; margin-right: 5px;}
/* span{width:60px;height:30px;display: inline-block;margin-top: 10px;} */
.green{
  background: green;
}
.red{
 background: red;
}
</style>>
