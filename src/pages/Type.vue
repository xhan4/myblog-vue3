<template>
    <div>
      <h1>类别</h1>  
      {{count}}
    </div>
    <div>{{countPlusLocalState}}</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name:'Type',
    data(){
      return{
          localCount:10
      }
    },
    computed:mapState({
      count:state=>state.count,
       countPlusLocalState (state) {
      return state.count + this.localCount
    }
    })
}
</script>

<style scoped>
 

</style>