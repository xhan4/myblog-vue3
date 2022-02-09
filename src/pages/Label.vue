<template>
    <div>
      <h1>标签</h1>  
      <button @click="increment">increment</button>
    </div>
</template>

<script>
export default {
    name:'Label',
    methods:{
        increment() {
    this.$store.commit('increment')
   
  }
    }
}
</script>

<style scoped>
 

</style>