<template>
    <div class="top">
        <div></div>
        <div class="content">
            <div class="left">
                <img src="../../assets/images/logo.png" alt="">
                <p>统一挂号平台</p>
            </div>
            <div class="right">
                <span>帮助中心</span>
                <p>登录注册</p>
            </div>
        </div>
        <div></div>
    </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.top {
    width: 100%;
    height: 70px;
    background-color: aliceblue;
    display: flex;
    justify-content: center;



    .content {
        width: 70%;
        display: flex;
        justify-content: space-between;

        .left {
            display: flex;
            justify-content: center;
            align-items: center;
            color: rgb(0, 179, 255);
            font-size: 3vh;

            img {
                width: 6vh;

            }

            p {
                margin-left: 2vh;
            }
        }



        .right {
            display: flex;
            align-items: center;

            span {
                margin-right: 1vh;

            }
        }

    }
}
</style>