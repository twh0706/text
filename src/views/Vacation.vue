<template>
  <div class="he">
      <Header title="办公室休假申请表"/>
        <dl class="aaa">
          <dt><img :src='lis.avatar' alt=""></dt>
          <dd>
            <p>
              申请人姓名：<span>{{lis.nickname}}</span>
            </p>
            <p>直接主管：   涛涛</p>
          </dd>
        </dl>
        <div class="time">
            <h3>申请消息</h3>
            <div class='item'>
              <span>休假日期</span>
              <input type="text" v-model="ri" @click="$refs.picker.open()">
            </div>
            <div class="item">
              <span>
                  休假类型
              </span>
              <select name="" id="" v-model="type">
                  <option value="-1">没有选择</option>
                  <option value="2">双休日加班</option>
                  <option value="3">假期加班</option>
              </select>
            </div>
            <div class='item'>
              <span>休假起始时间</span>
              <input type="text" v-model="kai" @cclick="$refs.start.open()">
            </div>
            <div class='item'>
              <span>休假结束时间</span>
              <input type="text" v-model="jie" @click="$refs.End.open()">
            </div>
            <div class="item">
               <span>休假事由</span>
                <input type="text" v-model="desc">  
            </div>
        </div>
        <mt-datetime-picker ref="picker" @confirm="handleConfirm"></mt-datetime-picker>
        <mt-datetime-picker ref="start" @confirm="handleConfir"></mt-datetime-picker>
        <mt-datetime-picker ref="End" @confirm="handleConfi"></mt-datetime-picker>
        <div class="Foot">
          <div @click="$router.go(-1)" class="ww">
            取消
          </div>
           <div class="ww uu" @click="submits">
             确定
          </div>
        </div>
  </div>
</template>

<script>
import { DatetimePicker } from 'mint-ui';
// Vue.component(DatetimePicker.name, DatetimePicker);
import Header from '../components/Header'
import axios from 'axios'
export default {
  // props:['title'],\
  data(){
    return {
      lis:{},
      ri:'',
      kai:"",
      jie:'',
      type:1,
       desc:''
    }
  },
  components:{
     Header 
  },
  created() {
    axios.get('http://localhost:3000/api/user/info').then((res)=>{
        this.lis=res.data.data
    })
  },
  methods:{
        handleConfirm:function(date){
            this.ri = date.toLocaleDateString();
        },
         handleConfir:function(date){
            this.kai = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
        }, handleConfi:function(date){
            if((new Date(date)*1)-(new Date(this.kai)*1)<0){
            alert("时间格式不对")
          }else
            this.jie = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

        },
        submits(){
          axios.post('http://localhost:3000/api/apply/vacation',{
            annex:'',describes: this.desc, startTime:this.kai,endTime:this.jie,type:this.type 
          }).then((res)=>{
              console.log(res.data);
          })
          this.$router.go(-1)
        }
  }
}
</script>

<style scoped>
  .he{
    width: 100%;
    height: 100%;
    background-color: antiquewhite;
    display: flex;
    flex-direction: column;
  }
  dl{
    background-color: antiquewhite;
    display: flex;
    width: 100%;
    height: 120px;
  }
  dt{
    flex:1
  }
  dd{
    flex: 2;
    font-size: 16px;
    padding: 20px;
  }
  dt img{
    width:100% ;
  }
  Header{
    background-color: aquamarine;
  }
  p{
     margin: 10px 0;
  }
  .item {
    width: 100%;
    display: flex;
    justify-content: space-between;
   padding: 5px 20px;
  }
  .Foot{
    width: 100%;
    height: 50px;
    border-top: 1px solid #ccc;
    background-color: antiquewhite;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
  }
  .ww{
    width: 50%;
    height: 100%;
    text-align: center;
    line-height: 50px;
  }
  .uu{
    background-color: aquamarine;
  
  }
</style>