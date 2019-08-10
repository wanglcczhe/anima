<template>
    <div class="detail">
        <van-nav-bar
        title="商品详情"
        left-text="返回"
        left-arrow
        @click-left="CLICK_LEFT"
        fixed
        class="buy"
        />
        <div class="img">
          {{detail.imgP}}
            <img :src="'http://localhost:3000'+detail.goods" alt="">
        </div>
        <div class="price">
            <h3>{{detail.price}}</h3>
            <span>{{detail.des}}</span>
        </div>
        <van-goods-action>
        <van-goods-action-icon
            icon="chat-o"
            text="客服"

        />
        <van-goods-action-icon
            icon="cart-o"
            :info=buycar.length
            text="购物车"
            to="/buycar"
        />
        <van-goods-action-button
            type="warning"
            text="加入购物车"
            @click="ADD_ITEM(item);$toast({
              message: '添加购物车成功',
              duration:1000
              });"
        />
        <van-goods-action-button
            type="danger"
            text="立即购买"
           
        />
        </van-goods-action>
    </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'
import Vue from 'vue';
import { NavBar } from 'vant';
Vue.use(NavBar);

import { Toast } from 'vant';
Vue.use(Toast);

import {
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton
} from 'vant';

Vue
  .use(GoodsAction)
  .use(GoodsActionIcon)
  .use(GoodsActionButton);
export default {
  name:'detail', 
  data(){
    return {
      detail:{},
      item:{
        _id:this.$route.params.aid,
        price:this.$route.query.price,
        goods:this.$route.query.goods
      }
    }
  }, 
  methods:mapActions([
      'CLICK_LEFT','ADD_ITEM'
    ]),
  computed:mapGetters(['buycar']),
  mounted(){
      let id=this.$route.params.aid
      let dataName=this.$route.query.dataName
      let price=this.$route.query.price
      axios({
          url:`/api/${dataName}/${id}`,
          params:{_page:1,_limit:10}
      }).then((res)=>{this.detail=res.data.data;})
  } 
}
</script>
<style scoped>
.price h3{color:purple;text-align: left;font: 700 20px/2 "";height:40px;}
.price{text-align: left;}
.img img{width:100%;height:400px}
</style>

