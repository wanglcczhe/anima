<template>
<div class="serch">
    <span>登录</span>
    <van-search placeholder="大家都在搜：衣服" v-model="value" class="en" />
    
</div>
</template>
<script>
    import Vue from 'vue'
    import { Search } from 'vant';
    Vue.use(Search)
export default {
    data(){
        return {
            value:''
        }
    }
}
</script>
<style scoped>
.serch{display: flex;}
.serch span{color: royalblue;margin:18px 0 0 12px;font-size: 14px;}
.en{width:80%;}
</style>


