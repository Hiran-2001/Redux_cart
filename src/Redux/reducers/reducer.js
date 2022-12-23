const INIT_STATE = {
  carts: [],
};

export const cartReducer = (state = INIT_STATE, action) => {
  if (action.type === "ADD_CART") {

    const itemIndex = state.carts.findIndex( item =>item.id===action.payload.id)
    if(itemIndex >=0){
      state.carts[itemIndex].qnty +=1
      return {
        ...state,
        carts:[...state.carts]
      }
    }
    else{
      const temp = {...action.payload, qnty:1}
      return {
        ...state,
        carts: [...state.carts,temp],
      };
    }
  }

  //remove cart


  if (action.type === "RMV_CART") {
    const data = state.carts.filter((el) => el.id !== action.payload);
    return {
      ...state,
      carts:data
    };
  }


  // remove quantity

  if(action.type ==="RMV_QNTY"){
    const itemIndexDec = state.carts.findIndex((item)=>item.id===action.payload.id)
      
    if (state.carts[itemIndexDec].qnty >=1) {
      const dltItem = state.carts[itemIndexDec].qnty -=1
      // console.log([...state.carts,dltItem]);

      return {
        ...state,
        carts:[...state.carts]
      }
    }else if(state.carts[itemIndexDec].qnty===1){
      const data = state.carts.filter((el) => el.id !== action.payload);

      return {
        ...state,
        carts:data
      }
    }
   
    
  }

  return state;
};
