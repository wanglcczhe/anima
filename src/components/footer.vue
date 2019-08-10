<template>
    <van-tabbar v-model="active">
    <van-tabbar-item icon="home-o" router to="/home">首页</van-tabbar-item>
    <van-tabbar-item icon="search" dot router to="/community">社区</van-tabbar-item>
    <van-tabbar-item icon="friends-o" :info=buycar.length router to="/buycar">购物车</van-tabbar-item>
    <van-tabbar-item icon="setting-o"  router to="/my">我的</van-tabbar-item>
</van-tabbar>
</template>
<script>
import Vue from 'vue';
import { Tabbar, TabbarItem } from 'vant';
import { mapGetters } from 'vuex';
Vue.use(Tabbar).use(TabbarItem);
export default {
    data() {
      return {
        active: 0,
        icon: {
          normal: '//img.yzcdn.cn/icon-normal.png',
          active: '//img.yzcdn.cn/icon-active.png'
        }
      }
    },
    computed:mapGetters(['buycar'])

}
</script>

