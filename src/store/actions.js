import axios from 'axios';
import {
    VIEW_FOOT,
    ADD_ITEM,
    CHANGE_ITEM,
    REMOVE_ITEM,
    CLEAR_BUYCAR,
    CLICK_LEFT,
    VIEW_LOADING
} from './types'

export default{
    [VIEW_FOOT]:({state,commit},payload)=>commit(VIEW_FOOT,payload),
    [VIEW_LOADING]:({state,commit},payload)=>commit(VIEW_LOADING,payload),

    //购物车
    [ADD_ITEM]:({commit,state},payload)=>{
        let arr=[...state.buycar];
        let find=false;
        arr.forEach((item,index)=>{
            if(item._id==payload._id){
                item.num++;
                find=true
            }
        });
        if(!find){
            payload.num=1;
            arr.push(payload)
        }    
        commit(ADD_ITEM,arr)
    },
    [CHANGE_ITEM]:({commit,state},payload)=>{
        state.buycar.forEach((item,index)=>{
            if(item._id==payload._id){
                item.num+=payload.n;
            }
        });
        commit(CHANGE_ITEM,[...state.buycar])

    },
    [CLICK_LEFT]:({commit,state},payload)=>{
        window.history.go(-1)
    },
    [REMOVE_ITEM]:({commit,state},payload)=>{
        state.buycar.forEach((item,index)=>{
            if(item._id===payload._id){
                state.buycar.splice(index,1);
            }
        });
        commit(REMOVE_ITEM,[...state.buycar]);
    },
    [CLEAR_BUYCAR]:({commit,state},payload)=>state.buycar = []

}



