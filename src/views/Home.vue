<template>
    <div class="shouye">
        <head>
            <span>返回</span>
            <span>加班/休假</span>
            <span>搜索</span>
        </head>
        <div class="main">
            <div class="hed">
                <div class="tab">
                    <span v-for="(item,index) in tabs" :key='index' @click="fn(index)" :class="{active:current==index}">{{item.title}}</span>
                </div>
                <div class="tab in">
                    <span v-for="(item,index) in tab" :key='index' @click="fn1(index)" :class="{active:cur==index}">{{item.title}}</span>
                </div>
            </div>
            <div class="list">
                <div class="task" v-for="(item,index) in list" :key='index' @click="yy(item.applicationNumber)">
                    <p class="title"><span>{{item.applicationNumber}}</span><span>待审批</span></p>
                     <div class="desc">
                    <div class="block">
                        <div><span>申请人</span><span>{{item.nickname}}</span></div>
                        <div><span>加班日期</span><span>{{new Date(item.startTime).toLocaleDateString()}}</span></div>
                    </div>
                    <div class="block">
                        <div><span>加班类型</span>
                        <span v-if="item.type==1">工作日加班</span>
                        <span v-else-if="item.type==2">双休日加班</span>
                        <span v-else>假期加班</span></div>
                        <div><span>加班时数</span><span>{{((new Date(item.endTime)-new Date(item.startTime))/3600000).toFixed(1)}}</span></div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div  class="btn">
            <button @click="CC">发起任务</button>
        </div>
        <Mock v-if="flag" @click.native="flag=false"/>
    </div>
</template>

<script>
import Mock from './Mock'
import axios from 'axios'
export default {
    data(){
        return{
           status:0,
           type:"overtime",
           list:[],
            tabs:[
                {
                    title:"待处理"
                },
                 {
                    title:"已发起",
                }, {
                    title:"已处理",
                }
            ],
            tab:[
                {
                    title:"加班"
                }, {
                    title:"休假"
                }
            ],
            current:0,
            cur:0,
            flag:false
        }
    },
   mounted(){
        this.axios.get('http://localhost:3000/api/task/list',{
             params:{
                 status:this.status,
                 type:this.type
             }
         }).then((res)=>{
             this.list=res.data.data;       
             console.log(res.data.data);
                   
        })
   },
   methods:{
       fn(index){
            this.current=index,
            this.status=index,
            this.axios.get('http://localhost:3000/api/task/list',{
             params:{
                 status:this.status,
                 type:this.type
             }
         }).then((res)=>{
             this.list=res.data.data;       
                   
        })
       },
       fn1(index){
           this.cur=index
           if(index==1){
               this.type='vacation'
           }else{
               this.type='overtime'
           }
           this.axios.get('http://localhost:3000/api/task/list',{
             params:{
                 status:this.status,
                 type:this.type
             }
         }).then((res)=>{
             this.list=res.data.data;             
        })
       },
       CC(){
           this.flag=true
       },
       yy(id){
           if(this.cur==0){
               this.$router.push('/detile/'+id)
           }else{
                this.$router.push('/de/'+id)
           }
           
       }
   },
   components:{
       Mock
   }
}
</script>

<style scoped>
    .shouye{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    head{
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: space-between;
        padding:0 10px;
        align-items: center;
        border-bottom: 1px solid #eee;
        font-size: 16px
    }
    .main{
        display: flex;
        flex-direction: column;
        flex: 1;
    }
    .active{
        background-color: aqua;
        color: white;
    }
    .tab{
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        border: 1px solid aliceblue;
    }
    .tab span{
        flex: 1;
        height: 100%;
        text-align: center;
        line-height: 50px;
    }
    .list{
        width: 100%;
        flex: 1;
        /* display: flex; */

    }
      .list .task{
        background-color: antiquewhite;
        margin: 20px 0;
        padding: 0 20px;

    }
    .list .task .title{
        display: flex;
        justify-content: space-between;
        align-items: center;
        line-height: 50px;
    }
    .list .task .desc{
        display: flex;
    }
    .list .task .desc .block{
        flex: 1;
        font-size: 16px;
    }
    .list .task .desc .block>div{
        margin-bottom: 15px;
    }
    .list .task .desc .block>div span:first-child{
        width: 40%;
        display: inline-block;
    }
    .list .task .desc .block>div span:last-child{
        color: black;
    }

    .btn{
        display: inline-block;
        width: 150px;
        height: 40px;
        position: fixed;
        right: 0;
        bottom: 0;
        background-color: aqua;
        border-radius: 20px;
    }
    button{
        width: 100%;
        height: 100%;
        overflow: hidden;
         background-color: aqua;
        border-radius: 20px;
        border: none;
    }
    .in{
        width: 50%;
        display: flex;
        justify-content: space-between;
        margin: 0 25%;
        border-radius: 1px solid #ccc;
        border-radius: 25px;
        overflow: hidden;
    }
</style>