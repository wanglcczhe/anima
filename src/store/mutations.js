import * as types from './types'

export default {
    [types.VIEW_FOOT]:(state,payload)=>state.bFooter=payload,
    [types.VIEW_LOADING]:(state,payload)=>state.bLoading=payload,

    [types.ADD_ITEM]:(state,payload)=>{
        state.buycar=payload;
    },
    [types.CHANGE_ITEM]:(state,payload)=>{
        state.buycar=payload;
    },
    [types.REMOVE_ITEM]:(state,payload)=>{
        state.buycar=payload;
    }
}
