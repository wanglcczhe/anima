<template>
    <div class="banner">
        <van-swipe 
            :autoplay="3000" 
            indicator-color="white"
        >
            <van-swipe-item><img src="https://www.giorgioarmanibeauty.cn/on/demandware.static/-/Sites-armani-cn-Library/default/dwd4f11942/landing/2018/neonude/kv.jpg"/></van-swipe-item>
            <van-swipe-item><img src="https://www.giorgioarmanibeauty.cn/on/demandware.static/-/Sites-armani-cn-Library/default/dw2dbd4daf/landing/2019/maestro201905/kv.jpg"/></van-swipe-item>
            <van-swipe-item><img src="https://www.giorgioarmanibeauty.cn/on/demandware.static/-/Sites-armani-cn-Library/default/dw8971b570/landing/2018/neonude/pc2_bak.jpg"/></van-swipe-item>
            <van-swipe-item><img src="https://www.giorgioarmanibeauty.cn/dw/image/v2/AARM_PRD/on/demandware.static/-/Sites-armani-cn-Library/default/dw64f600ef/CategoryLandingPages/skincare/armani_skincare_clp_1920x618_20190306.jpg?sw=1600"/></van-swipe-item>
    </van-swipe>
    </div>
</template>
<script>
import Vue from 'vue'
import { Swipe, SwipeItem } from 'vant';
Vue.use(Swipe).use(SwipeItem);
export default {
    
}
</script>
<style scoped>

.banner img{width: 100%;height:150px;}
</style>
