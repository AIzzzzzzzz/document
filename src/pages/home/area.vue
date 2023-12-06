<template>
    <div>
        <div class="region">
            <div class="content">
                <div class="left">地区</div>
                <ul>
                    <li class="active">全部</li>
                    <li>雄安</li>
                    <li>雄安</li>
                    <li>雄安</li>
                    <li>雄安</li>
                    <li>雄安</li>
                    <li>雄安</li>
                    <li>雄安</li>
                    <li>雄安</li>
                    <li>雄安</li>
                    <li>雄安</li>
                    <li>雄安</li>
                    <li>雄安</li>
                    <li>雄安</li>
                    <li>雄安</li>
                    <li>雄安</li>
                    <li>雄安</li>
                    <li>雄安</li>
                    <li>雄安</li>
                    <li>雄安</li>
                    <li>雄安</li>
                    <li>雄安</li>
                    <li>雄安</li>
                    <li>雄安</li>
                    <li>雄安</li>
                    <li>雄安</li>
                    <li>雄安</li>
                    <li>雄安</li>
                    <li>雄安</li>
                    <li>雄安</li>
                    <li>雄安</li>
                    <li>雄安</li>
                    <li>雄安</li>
                    <li>雄安</li>
                    <li>雄安</li>
                    <li>雄安</li>
                    <li>雄安</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.content {
    display: flex;

    .left {
        width: 50px;
    }

    ul {
        display: flex;
        flex-wrap: wrap;

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