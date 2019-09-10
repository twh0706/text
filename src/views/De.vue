<template>
  <div>
    <p>
     申请人姓名： {{data.nickname}}
    </p>
     <p>
      休假事由：{{data.describes}}
    </p>
     <p>
      开始时间：{{new Date(data.startTime).toLocaleDateString()}}
    </p>
     <p>
      接收时间： {{new Date(data.endTime).toLocaleDateString()}}
    </p>
    <p>

    </p>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      data:{}
    }
  },
  created(){ 
    axios.get('http://localhost:3000/api/apply/vacation',{
      params:{
        applicationNumber:this.$route.params.id
      }
    }).then((res)=>{
     this.data=res.data.data
    })
  }
}
</script>

<style>

</style>