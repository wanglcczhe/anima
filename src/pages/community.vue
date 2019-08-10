<template>
    <div class="community">
        <search></search>
        <Nav></Nav>
        <ul>
            <li
                v-for="(item,index) of list"
                :key="item._id"
            >
                <h3><b>{{index}}</b><span>热点内容，来自于：{{item.auth}}</span><a href="#">...</a></h3>
                <h4></h4>
                <img :src="baseUrl+item.img"/>
                <p>{{item.des}}</p>
            </li>
        </ul>
    </div>
</template>
<script>
import search from '../components/serch';
import Nav from '../components/nav';

import Vue from 'vue';
import { Row, Col } from 'vant';
Vue.use(Row).use(Col);

export default {
    name:'community',
    data(){
        return {
            list:[]
        }
    },
    components:{Nav,search},
    mounted(){
        axios({
            url:'/api/community',
            params:{_page:1,_limit:10}
        }).then(
            
            (res)=>{
                this.list=res.data.data
            }
        )
    } 
}
</script>


<style scoped>
    .community ul{margin-bottom: 60px;}
    .community img{width: 100%;height: 250px}
    .community li h3{height: 50px;}
    .community li h3 b{float: left;display: block;width: 30px;height: 30px;border-radius: 50%;background: lemonchiffon;margin: 10px 0 0 5px}
    .community li h3 span{float: left;font: 12px/50px "";margin-left:25px;color: crimson; }
    .community li h3 a{float: right;margin:24px 10px 0 0}
    .community li p{padding: 0 8px;}
</style>
