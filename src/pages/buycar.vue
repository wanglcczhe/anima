<template>
    <div class="buycar">
        <van-nav-bar
            title="购物车"
            left-text="返回"
            right-text="确定"
            left-arrow
            @click-left="CLICK_LEFT"
        />
        <ul>
            <li v-for="(item) in buycar" :key="item._id">
                <img :src="baseUrl+item.goods" alt="">    
                <div class="des">
                    <h3>{{item.des}}</h3>
                    <p>单价：{{item.price}}</p>
                    <span>数量：x{{item.num}}</span>
                </div>
                <div class="bu">
                    <input type="button" value="-" @click="CHANGE_ITEM({_id:item._id,n:-1})">
                    <b>{{item.num}}</b>
                    <input type="button" value="+" @click="CHANGE_ITEM({_id:item._id,n:1})">                   
                </div> 
                <input type="button" value="x" class="delete" @click="REMOVE_ITEM({_id:item._id})">               
            </li>
        </ul> 
        <div class="bottom" v-if="buycar.length"><span>共计：￥{{PRICE}}</span><input type="button" value="清空购物车" @click="CLEAR_BUYCAR"/><input type="button" value="去结算"/></div>
    </div>
</template>

<script>
import Vue from 'vue'
import { NavBar } from 'vant';
Vue.use(NavBar);

import search from '../components/serch';
import {mapActions,mapGetters} from 'vuex'


export default {
    data() {
        return {
            value:1
        }
    },
    name:'buycar',
    components:{search,},
    methods:mapActions([
        'CHANGE_ITEM','REMOVE_ITEM','CLEAR_BUYCAR','CLICK_LEFT'
    ]),
    computed:mapGetters(['buycar','PRICE'])
}
</script>

<style scoped>
    .buycar ul{margin-bottom: 50px;}
    .buycar ul li .des{width: 200px;}
    .buycar ul li{height: 150px;display: flex;justify-content: space-between;align-items: center;}
    .buycar ul li img{height: 80px;width: 80px;}
    .buycar ul li p{font: 16px/2 "";color: deeppink;}
    .buycar ul li input{float: left;height: 20px;width: 20px;background: lightgreen;}
    .buycar ul li input.delete{background:tomato;border-radius: 50%;text-align: center;line-height: 20px;}
    .buycar ul li b{float: left;display:block;height: 20px;width: 20px;background: lemonchiffon;text-align: center;line-height: 20px;}

    .bottom span{margin-right:10px;font-size: 20px}
    .bottom input{height:30px;padding:0 5px;border:1px solid #000;background: yellowgreen;border-radius: 5px;margin-left: 80px;}
</style>
