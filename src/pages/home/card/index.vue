<template>
     <el-card shadow="hover" class="box-card">
        <div class="content">
            <div class="left">
                <div class="leftTop">{{ hospitalinfo.hosname }}</div>
                <div class="leftfooter">
                    <div class="left_footer_left">{{ hospitalinfo.param.hostypeString }}</div>
                    <div class="left_footer_riight">每天09.15取票</div>
                </div>
            </div>
            <div class="right">
                <img :src="`data:image/jpeg;base64,${hospitalinfo.logoData}`" alt="">
            </div>
        </div>
    
        
    
  </el-card>
 

  </template>
  
  <script lang="ts" setup>
  defineProps(['hospitalinfo'])

  
  </script>
  
  <style lang="scss" scoped>
.content{
    display: flex;
    justify-content: space-between;
    .left{
        width: 60%;
        .leftfooter{
            margin-top: 1vh;
            display: flex;
            justify-content: space-between;
            font-size: 14px;
        }
    }
    .right{
        img{
            width: 50px;
            height: 50px;
        }
        
    }
}
</style>