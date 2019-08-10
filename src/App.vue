<template>
  <div id="app">
    <div id="loading3" v-show="bLoading">
      <div class="demo3"></div>
      <div class="demo3"></div>
      <div class="demo3"></div>
      <div class="demo3"></div>
      <div class="demo3"></div>
      <div class="demo3"></div>
      <div class="demo3"></div>
      <div class="demo3"></div>
  </div>
    <router-view></router-view>
    <Footer v-show="bFooter"></Footer>
  </div>
</template>

<script>
import Footer from './components/footer';
import {mapGetters} from 'vuex';
import *as types from './store/types'
export default {
  name: 'app',
  components: {
    Footer  
  },
  watch:{
    $route:{
      handler(to){
        let path=to.path;
        if(/home|my|community/.test(path)){
          this.$store.dispatch(types.VIEW_FOOT,true)  
        }
        if(/detail|login|reg|buycar/.test(path)){
          this.$store.dispatch(types.VIEW_FOOT,false)
        }
      },
      immediate:true
    }
   
  },
  computed:mapGetters([
    'bFooter','bLoading'
  ])
  
}
</script>

<style scoped>
#loading3 {
    position: absolute;
    top:50%;
    left:45%;
}
.demo3 {
    width: 4px;
    height: 4px;
    border-radius: 2px;
    background:orange;
    position: absolute;
    animation: demo3 linear 0.8s infinite;
    -webkit-animation: demo3 linear 0.8s infinite;
}
.demo3:nth-child(1){
    left: 24px;
    top: 2px;
    animation-delay:0s;
}
.demo3:nth-child(2){
    left: 40px;
    top: 8px;
    animation-delay:0.1s;
}
.demo3:nth-child(3){
    left: 47px;
    top: 24px;
    animation-delay:0.1s;
}
.demo3:nth-child(4){
    left: 40px;
    top: 40px;
    animation-delay:0.2s;
}
.demo3:nth-child(5){
    left: 24px;
    top: 47px;
    animation-delay:0.4s;
}
.demo3:nth-child(6){
    left: 8px;
    top: 40px;
    animation-delay:0.5s;
}
.demo3:nth-child(7){
    left: 2px;
    top: 24px;
    animation-delay:0.6s;
}
.demo3:nth-child(8){
    left: 8px;
    top: 8px;
    animation-delay:0.7s;
}

@keyframes demo3 
{
    0%,40%,100% {transform: scale(1);}
    20% {transform: scale(3);}
}
@-webkit-keyframes demo3 
{
    0%,40%,100% {transform: scale(1);}
    20% {transform: scale(3);}
}

</style>
