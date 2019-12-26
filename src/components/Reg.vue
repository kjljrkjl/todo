<template>
  <div class="reg">
    <h1>注册</h1>
    us:<input type="text"  v-model="us">
    <hr>
    ps:<input type='text' v-model="ps">
    {{us}}{{ps}}
    <hr>
    <button @click="reg">reg</button>
  </div>
</template>
<script>
import qs from 'qs'
export default {
  data(){
    return{
      us:'',
      ps:''
    }
  },
  methods: {
    reg(){
      let url='/fcj/v1/user/reg'
      this.$axios.post(url,{us:this.us,ps:this.ps})
      .then((data)=>{
        console.log(data)
        if(data.err==0){
          this.$router.push('/my/login')
        }else{
          alert(data.msg)
        }
      })
      // console.log(this.us,this.ps)
    }
  },
  
}
</script>
<style lang="less">
  
</style>