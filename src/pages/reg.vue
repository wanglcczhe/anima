<template>
    <div class="reg">
        <div class="box">
            <h3><img src="../assets/imgs/welcome.png"/></h3>
             <p>用户名：<input type="text" placeholder="请输入用户名" v-model="username"></p> 
             <p>密码：<input type="text" placeholder="请输入密码" v-model="password"></p>
             <p><input type="button" value="立即注册" class="btn" @click="reg"></p>
             <h3 class="mess">{{mess}}</h3>   
        </div>   
    </div>    
</template>
<script>
export default {
    data(){
        return {
            username:'',
            password:'',
            mess:''
        }
    },
    methods:{
        reg(){
            axios({
                url:'/api/reg',
                method:'post',
                data:{username:this.username,password:this.password}
            }).then(
                res=>{
                    if(res.data.err===0){
                        console.log(res.data)
                        this.$router.push('./login')
                    }else{
                        console.log(res.data)
                        this.mess=res.data.mess
                    }
                }
            )
        }
    }


}
</script>





<style scoped>
.box{background:url(../assets/imgs/login-bg.png);height:739px;width: 100% no-repeat;}
.box img{height: 50px;width: 100%;margin-top: 50px;}
.box input{border: 1px solid #ffffff;height: 20px;width: 150px;border:0;}
.box .btn{color: #ffffff;width: 300px;}
.box p{text-indent: 20px;height: 30px;width: 300px;margin:30px auto;border: 1px solid #ffffff;display: flex;align-items: center;border-radius: 20px;}
.mess{border:none;}
</style>
