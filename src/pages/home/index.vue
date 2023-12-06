<template>
    <div>
        <el-carousel height="350px">
            <el-carousel-item>
                <img src="../../assets/images/web-banner-1.png" alt="">
            </el-carousel-item>
        </el-carousel>
    </div>

    <div class="search">
        <el-autocomplete clearable class="" placeholder="请输入医院名称" />
        <el-button type="primary" size="default" @click="">搜索</el-button>

    </div>

    <el-row :gutter="20">
        <el-col :span="20">
            <div class="level">
                <h1>医院</h1>
                <div class="content">
                    <div class="left">等级:</div>
                    <ul>
                        <li class="active">全部</li>
                        <li>三级甲等</li>
                        <li>三级甲等</li>
                        <li>三级甲等</li>
                        <li>三级甲等</li>
                        <li>三级甲等</li>
                        <li>三级甲等</li>
                        <li>三级甲等</li>
                        <li>三级甲等</li>
                    </ul>
                </div>
            </div>
            <areas></areas>

            <div class="hospital">
                <card class="item" v-for='(item,index) in hosarr' :key="index" :hospitalinfo="item"></card>
                <!-- 分页 -->
                <div class="demo-pagination-block">
                    <div class="demonstration">All combined</div>
                    <el-pagination v-model:current-page="pageNo" v-model:page-size="pageSize4"
                        :page-sizes="[10, 20, 30, 40]" layout="total, sizes, prev, pager, next, jumper" :total="400"
                        @size-change="getHospitalinfo()" @current-change="handleCurrentChange" />
                </div>
            </div>

        </el-col>

        <!-- 地区子组件 -->
        <el-col :span="4">

        </el-col>
    </el-row>
</template>





<script lang="ts" setup>
import areas from '@/pages/home/area.vue'
import card from '@/pages/home/card/index.vue'
import { ref } from 'vue'
import { onMounted } from 'vue';
import { reqHospital } from '@/api/home/index';
import request from '@/utils/request';

let pageNo = ref<number>(1)
let pageSize4 = ref<number>(10)
let hosarr = ref([])

const getHospitalinfo = async ()=>{
    let result:any = await request.get('/hosp/hospital/'+pageNo.value+'/'+pageSize4.value)
    if(result.data.code == 200){
        hosarr.value = result.data.data.content
        console.log(result.data.data.content);
        
    }
    
}
const handleCurrentChange = ()=>{
    getHospitalinfo()
    
}
onMounted(()=>{
    getHospitalinfo()
})
</script>

<style lang="scss" scoped>
img {
    width: 100%;
    height: 350px;
}

.hospital {
    margin: 3vh 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    .item {
        margin: 1vh 0;
        width: 48%;
    }
}

.search {

    display: flex;
    justify-content: center;
    width: 100%;
    height: 50px;
    align-items: center;
    margin: 10px 0;

    ::v-deep(.el-input__inner) {
        width: 600px;
        margin-right: 10px;
    }


}

h1 {
    font-size: 18px;
}

.content {
    display: flex;

    ul {
        display: flex;



        li {
            list-style: none;
            margin-left: 1vh;

            &.active {
                color: rgb(20, 211, 211);
            }

        }

        li:hover {
            color: rgb(20, 211, 211);
            cursor: pointer;
        }
    }
}
</style>