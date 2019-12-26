<template>
  <div class="login">
    <div class="content">
      用户：<input type="text" v-model="user"><br>
      密码：<input type="password" v-model="pwd"><br>
      <button @click="Login()">登录</button>
      <button @click="Reg()">注册</button>
    </div>
    
  </div>
</template>

<script>
import Login from './Reg';
import Axios from 'axios'
import qs from 'qs'
export default {
    components: {Login},
    data() {
      return {
        user:'',
        pwd:''
      }
    },
    methods: {
      Login () {
  
        this.$store.commit('login',{user:this.user,pwd:this.pwd,success:()=>{
              this.$router.replace('/shouye')
        }})

      },
      Reg () {
          let url = '/hehe/v1/user/reg'
          let data = qs.stringify({us: this.user, ps: this.pwd})
          Axios.post(url,data,{
             headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
          }})
          .then((err,msg) => {
            //console.log(err,msg);
            alert('注册成功，请登录！')
            window.location.href = 'localhost:8081/?#/login'
            
          })
      }
    }
}
</script>

<style  scoped>
.login{width:100%;height:600px;font-size:16px;text-align: center;background: skyblue;}
.content{width:300; height:400;margin-top:20px;}
input{width:200px;height:30px;margin-top:15px;border:none;border: 1px solid #ccc;}
button{width:50px;height:30px; margin:10px; text-align: center;}

</style>
