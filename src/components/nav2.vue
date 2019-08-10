<template>
    <div class="nav2">
        <van-row type="flex" justify="space-around" class="row1">
            <van-col span="6" class="col1"><img src="../assets/imgs/icon_1.png"/><span>鞋包馆</span></van-col>
            <van-col span="6" class="col1"><img src="../assets/imgs/icon_2.png"/><span>运动馆</span></van-col>
            <van-col span="6" class="col1"><img src="../assets/imgs/icon_3.png"/><span>母婴馆</span></van-col>
            <van-col span="6" class="col1"><img src="../assets/imgs/icon_4.png"/><span>超市</span></van-col>
        </van-row>
        <van-row type="flex" justify="space-around" class="row1">
            <van-col span="6" class="col1"><img src="../assets/imgs/icon_6.png"/><span>女装馆</span></van-col>
            <van-col span="6" class="col1"><img src="../assets/imgs/icon_7.png"/><span>美妆馆</span></van-col>
            <van-col span="6" class="col1"><img src="../assets/imgs/icon_8.png"/><span>男装馆</span></van-col>
            <van-col span="6" class="col1"><img src="../assets/imgs/icon_10.png"/><span>更多</span></van-col>
        </van-row>
    </div>
</template>

<script>
import Vue from 'vue';
import { Row, Col } from 'vant';
Vue.use(Row).use(Col);
export default {
    
}
</script>
<style scoped>
.col1{width: 50px;height: 70px;}
.row1{margin-top:12px;}
</style>
