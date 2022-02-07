<template>
    <div class="home-container">
   <MyPagination @change-page='changePage' :pagesize='10' :total='80' :page='1' />
   
 </div>
</template>

<script>
import { reactive } from 'vue'
import MyPagination from '../components/MyPagination'

export default {
    name:'Home',
    components: {
    MyPagination,
  },
     setup () {
    // 筛选条件准备
    const reqParams = reactive({
      // 当前页码
      page: 1,
      // 每页的条数
      pageSize: 10
    })
    // 控制页码的变化
    const changePage = (page) => {
      // 修改分页参数，重新调用接口即可
      // console.log(page)
      reqParams.page = page
    }

    return { changePage }
  }
 }
</script>

<style scoped>
 .home-container {
  height: 100%;
  
}


</style>