<template>
    <div class="my">
        <h3>我的</h3>
        <dl>
            <dt><P><b><img :src="baseUrl+data.icon"/></b><a href="#">{{data.nikename}}</a><em @click="logout">注销</em></P><span>></span></dt>
            <dd>我的信用积分<em>></em></dd>
            <dd>物流信息<em>></em></dd>
            <dd>联系人管理<em>></em></dd>
            <dd>密码设置<em>></em></dd>
            <dd>安全模式<em>></em></dd>
        </dl>
    </div>
</template>
<script>
export default {
    data(){
        return {
            data:{}
        }
    },
    methods:{
        logout(){
            axios({
                url:'/api/logout',
                method:'put'
            }).then(
                res=>{
                    if(res.data.err===0){this.$router.push('/login')}
                }
            )
        }
    },
    beforeRouteEnter(to,from,next){
        axios({
            url:'/api/user'
        }).then(
            res=>{
              if(res.data.err==1){
                  console.log(res.data)
                  next('/login')
              }else{
                  console.log(res.data)
                  next((_this)=>{_this.data=res.data.data})
              }  
            }
        )
    }
}
</script>

<style scoped>

    .my h3{height: 50px;font: 700 16px/50px "";border-bottom: 1px solid #eee;text-align: center;}
    .my dt{height: 80px;border-bottom: 1px solid #eee;display: flex;justify-content: space-between;padding:0 20px 0 10px;align-items: center;}
    .my dt em{margin-left: 12px;}
    .my dt img{height: 100%;width: 100%;}
    .my dt b{display: block;width:40px;height: 40px;background: chocolate;border-radius: 50%;}
    .my dd{display: flex;justify-content: space-between;height: 30px;border-bottom: 1px solid #eeeeee;align-items: center;padding:0 20px 0 10px;}
</style>


