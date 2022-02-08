<template>
    <div class="home-container">
     <DataList :dataList='dataList' :pageSize='10'/>
 </div>
</template>

<script>
import DataList from '../components/DataList'

export default {
    name:'Type',
    components:{
      DataList
    },
    data:function(){
      return {
        dataList:[
          {title:'标题1',date:'2022-2-7',labels:['js','函数']},
          {title:'标题2',date:'2022-2-7',labels:['js','函数']},
          {title:'标题3',date:'2022-2-7',labels:['js','函数']},
          ]}
    }
 }
</script>

<style scoped>
 .home-container {
  height: 100%;
  
}


</style>