<template>
    <div class="home">
        <search></search>
        <Nav></Nav>
        <banner></banner>
        <Nav2></Nav2>
        <List :list="list" dataName="home"></List>
    </div>
</template>
<script>
import search from '../components/serch';
import Nav from '../components/nav';
import banner from '../components/banner';
import Nav2 from '../components/nav2';
import List from '../components/list';
export default {
    name: 'home',
    data(){
        return {
            list:[]
        }
    },
    components:{search,Nav,banner,Nav2,List} ,
    mounted(){
        axios({
            url:'/api/home',
            params:{_page:1,_limit:10}
        }).then(
            
            (res)=>{
                this.list=res.data.data
            }
        )
    }   
}
</script>
