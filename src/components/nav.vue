<template>
    <div class="nav">
        <van-tabs
            title-active-color="red"
        >
        <van-tab title="今日推荐"></van-tab>
        <van-tab title="彩妆专区"></van-tab>
        <van-tab title="香水专区"></van-tab>
        <van-tab title="穷逼专区"></van-tab>
    </van-tabs>
    </div>
</template>
<script>
import Vue from 'vue'
import { Tab, Tabs } from 'vant';
Vue.use(Tab).use(Tabs);
export default {
   data(){
       return {}
   } 
}
</script>
