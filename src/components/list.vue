<template>
    <div class="list">
        <h3>今日特卖，每天早十点晚八点上新</h3>
        <ul>
            <li 
                v-for="(item,index) of list "
                :key="item._id"           
            >
                <router-link
                    :to="{name:'detail',params:{aid:item._id},query:{dataName:dataName,price:item.price,goods:item.goods}}"
                >
                <img :src="baseUrl+item.goods"/>
                <P>
                    <b>{{item.title}}</b>
                    <span>还剩{{index}}天</span>
                </P>                                
                </router-link>
                <input type="button" value="加入购物车" @click="ADD_ITEM(item);$toast({
                        message: '添加购物车成功',
                        duration:1000
                    })">
            </li>            
        </ul>
    </div>
</template>
<script>
import Vue from 'vue'
import {mapActions} from "vuex"

import { Toast } from 'vant';
Vue.use(Toast)
export default {
    props:['list','dataName'],
    mounted(){
        
    },
    methods:mapActions([
        'ADD_ITEM',
    ])
}



</script>

<style scoped>
.list ul{margin-bottom: 50px;}
.list h3{height: 50px;font:14px/50px "";}
.list img{width:300px;height: 350px;margin-left:80px;}
.list p{display: flex;justify-content: space-between;padding:0 16px;}
.list b{font: 700 14px/2 "";}
.list span{font:12px/2 "";}
.list input{background: lightgreen;height: 30px;width: 80px;border-radius: 5px;color:#fff;margin-left:180px;}
</style>
