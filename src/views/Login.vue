<template>
      <div class="login-page">
        <div class="phone">
            <input type="text" v-model="user" placeholder="手机号码">    
        </div>   
        <div class="password">
            <input type="text" v-model="pwd" placeholder="密码">
        </div>
        <div class="btn">
            <button @click="fn">登陆</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return {
            user:'',
            pwd:''
        }
    },
    methods:{
         fn() {
                axios.post("http://localhost:3000/api/login",{
                    phone:this.user,
                    password:this.pwd
                }).then(({data})=>{
                    if(data.code==1){
                        localStorage.token=data.token
                        this.$router.push('/home')
                    }
                })
    }
    }
   
}
</script>

<style scoped>
    .login-page{
        margin: 40px 20px;
    }
    .login-page>div{
        margin-bottom: 20px;
    }
    .login-page input{
        height: 50px;
        outline: none;
        border: none;
        border-bottom: 1px solid #f0f0f0;
        font-size: 18px;
        width: 100%;
    }
    .login-page button{
        width: 100%;
        height: 50px;
        line-height: 50px;
        text-align: center;
        border: none;
        color:white;
        background-color: #999999;
        border-radius: 25px;
    }
</style>