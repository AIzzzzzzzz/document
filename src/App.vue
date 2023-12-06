<template>
  <div class="container">
    <!-- 顶部 -->
    <HospitalTop></HospitalTop>
    <!-- 中间的路由内容 -->
    <div class="content">
      <RouterView></RouterView>
    </div>
    <!-- 底部 -->
    <Hospitabottom></Hospitabottom>
  </div>
</template>

<script lang="ts" setup>
import request from './utils/request';
import { onMounted } from 'vue';


onMounted(async ()=>{
  let a = await request.get('/hosp/hospital/1/10')
  
  
})

</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.content {
  width: 70%;
  



}
</style>