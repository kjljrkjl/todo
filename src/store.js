import Vue from 'vue'
import Vuex from 'vuex'
import qs from 'qs'
import Axios from './utils/axios.js'

Vue.use(Vuex)
Vue.prototype.$axios = Axios

export default new Vuex.Store({
  state: {
    cookie:'',
    token:'',
    _id:'',
    list:[],
    classify: 0,
  
  },
  
  mutations: {
    getList(state) {
      let url = '/hehe/v1/matter/get'
      let token = localStorage.getItem('token')
      let id = localStorage.getItem('uid')
      let data = qs.stringify({token: token,uid:id})

      Axios("post",url,data).then((msg) => {
        console.log(msg);
        state.list=msg.list

        
      })
    },
    addList(state, payload) {
      //console.log(typeof(msg) )
      let url = '/hehe/v1/matter/add'
      let token = localStorage.getItem('token')
      let id = localStorage.getItem('uid')
      //let list=localStorage.getItem('list')
      let data = qs.stringify({token: token,uid:id,matter:payload.matter})
      // console.log(data)
      Axios("post",url,data)
      .then((data) => {
         state.list.push({matter:payload.matter, finish: false}) 
        console.log(data)
      })

    },
    delList(state, payload) {
      let url = '/hehe/v1/matter/del'
      let token = localStorage.getItem('token')
      let id=state.list[payload.index]._id;
      let data = qs.stringify({token: token,_id:id})
      Axios("post",url,data)
      .then((msg) => {
         console.log(msg);
         payload.success();
       
      })

    },
    finish(state, index){
      // console.log(state.list)
      state.list[index].finish = false
      // console.log(state.list)
      localStorage.setItem('list',JSON.stringify(state.list))

    },
    select(state,state1){
      state.classify = state1
    },
    login(state,payload){
        let url = "/hehe/v1/user/login"
        let data = qs.stringify({us: payload.user, ps: payload.pwd})
        Axios("post",url,data)
          .then((msg)=> {
            console.log(msg)
            if(msg.err === 0){
              alert('登录成功！')
              state.token = msg.info.token
              //console.log(state.token)
              state.id = msg.info._id
              localStorage.setItem('token',state.token)
              localStorage.setItem('_id',state.id)
              localStorage.setItem('uid',payload.user)
              payload.success();
              //console.log(123456)

            }else{
              alert('用户名或密码错误！')
            }
            
          })
    }
  },
  getters: {
    classify (state) {
      let data1 = msg.list
      let data = []
      if(state.classify === 0){
        data = data1
      }
      if(state.classify === -1) {
        data1.forEach((item) => {
          if(item.finish === false){
            data.push(item)
          }
        })
      }
      if(state.classify === 1) {
       data1.forEach((item) => {
          if(item.finish === true){
            data.push(item)
          }
        })
      }
      return  data
    }
  },
  actions: {

  }
})
