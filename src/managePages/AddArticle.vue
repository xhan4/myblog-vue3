<template>
  <md-editor v-model="text" />
 </template>
 
 <script>
 import { defineComponent } from 'vue';
 import MdEditor from 'md-editor-v3';
 import 'md-editor-v3/lib/style.css';
 
 export default defineComponent({
   components: { MdEditor },
   data() {
     return { text: '' };
   }
 });
 </script>