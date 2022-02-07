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
          {title:'标题4',date:'2022-2-7',labels:['js','函数']},
          {title:'标题5',date:'2022-2-7',labels:['js','函数']},
          {title:'标题6',date:'2022-2-7',labels:['js','函数']},
          {title:'标题7',date:'2022-2-7',labels:['js','函数']},
          {title:'标题8',date:'2022-2-7',labels:['js','函数']},
          {title:'标题9',date:'2022-2-7',labels:['js','函数']},
          {title:'标题10',date:'2022-2-7',labels:['js','函数']},
          {title:'标题11',date:'2022-2-7',labels:['js','函数']},
          {title:'标题12',date:'2022-2-7',labels:['js','函数']},
          {title:'标题13',date:'2022-2-7',labels:['js','函数']},
          {title:'标题14',date:'2022-2-7',labels:['js','函数']},
          {title:'标题15',date:'2022-2-7',labels:['js','函数']},
          {title:'标题16',date:'2022-2-7',labels:['js','函数']},
          {title:'标题17',date:'2022-2-7',labels:['js','函数']},
          {title:'标题18',date:'2022-2-7',labels:['js','函数']},
          {title:'标题19',date:'2022-2-7',labels:['js','函数']},
          {title:'标题20',date:'2022-2-7',labels:['js','函数']},
          {title:'标题21',date:'2022-2-7',labels:['js','函数']}
          ]}
    }
 }
</script>

<style scoped>
 .home-container {
  height: 100%;
  
}


</style>