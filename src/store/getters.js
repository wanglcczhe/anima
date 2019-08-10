export default{
  bFooter:(state) => state.bFooter,
  bLoading:(state)=>state.bLoading,
  

  buycar:(state)=>{
    return state.buycar;
  },
  PRICE:(state)=>{
    let P=0;
    state.buycar.forEach((item,index)=>{
      P+=item.num*item.price.slice(1,item.price.length-1)
    })
    return P.toFixed(2)
  }

}