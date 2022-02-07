<template>
    <div class='dataList'>
   <div class='dataList-card' v-for="(item,index) in data" :key="index">
       <div class='dataList-card-title'>{{item.title}}</div>
       <div class='dataList-card-text'>
           <text>{{item.date}}</text>
           <text v-for='(label,index) in item.labels' :key='index'>{{label}}</text>
       </div>
   </div>
 </div>
  <div class="my-pagination">
    <a @click='changePage(false)' href="javascript:;" :class="{disabled: currentPage===1}">上一页</a>
    <span v-if='currentPage > 3'>...</span>
    <a @click='changePage(item)' href="javascript:;" :class='{active: currentPage===item}' v-for='item in list' :key='item'>{{item}}</a>
    <span v-if='currentPage < total - 2'>...</span>
    <a @click='changePage(true)' href="javascript:;" :class='{disabled: currentPage===total}'>下一页</a>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import { computed } from '@vue/runtime-core';
export default {
    name:'DataList',
    props:{
        dataList:Array,
        pageSize:Number
    },
    setup(props){
      const total =computed(()=>Math.ceil(props.dataList.length/props.pageSize)) 
      const currentPage = ref(1)
       // 动态计算页码列表
    const list = computed(() => {
      const result = []
      // 总页码小于等于5；大于5
      if (total.value <= 5) {
        // 总页码小于等于5的情况
        for (let i = 1; i <= total.value; i++) {
          result.push(i)
        }
      } else {
        // 总页码大于5
        if (currentPage.value <= 2) {
          // 左侧临界值
          for (let i = 1; i <= 5; i++) {
            result.push(i)
          }
        } else if (currentPage.value >= total.value - 1) {
          // 右侧临界值
          for (let i = total.value - 4; i <= total.value; i++) {
            result.push(i)
          }
        } else {
          // 中间的状态
          for (let i = currentPage.value - 2; i <= currentPage.value + 2; i++) {
            result.push(i)
          }
        }
      }
      return result
    })
      const changePage=(type)=>{
      if (type === false) {
        // 上一页
        // 页面是第一页时，禁止点击操作
        if (currentPage.value === 1) return
        if (currentPage.value > 1) {
          currentPage.value -= 1
        }
      } else if (type === true) {
        // 下一页
        // 页面是最后页时，禁止点击操作
        if (currentPage.value === total.value) return
        if (currentPage.value < total.value) {
          currentPage.value += 1
        }
      } else {
        // 点击页码
        currentPage.value = type
      }
      }
      const data=computed(()=>{
          let res=[]
          if(props.dataList.length>currentPage.value*props.pageSize){
              res=props.dataList.slice((currentPage.value-1)*props.pageSize,(currentPage.value-1)*props.pageSize+props.pageSize)
          }else{
              res=props.dataList.slice((currentPage.value-1)*props.pageSize)
          }
          return res;
         
      })
       return {data,list,total,currentPage,changePage}
    }
   
}
</script>

<style scoped lang='less'>
  .dataList{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px 30px 0;
   &-card{
        width: 600px;
        height: 100px;
        border-radius: 5px;
        box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.1);
        margin-bottom: 20px;
        padding: 16px 20px;
        &-title{
          font-size: 20px;
          height: 46px;
          line-height: 46px;
        }
        &-text text{
          font-size: 16px;
          margin-right: 8px;
        }
   }
}
.my-pagination {
  display: flex;
  justify-content: center;
  padding: 30px;
  > a {
    display: inline-block;
    padding: 5px 10px;
    text-decoration: none;
    color: #666;
    border: 1px solid #e4e4e4;
    border-radius: 4px;
    margin-right: 10px;
    &:hover {
      color: #1E90FF;
    }
    &.active {
      background: #1E90FF;
      color: #fff;
      border-color: #1E90FF;
    }
    &.disabled {
      cursor: not-allowed;
      opacity: 0.4;
      &:hover {
        color: #333;
      }
    }
  }
  > span {
    margin-right: 10px;
  }
}
</style>