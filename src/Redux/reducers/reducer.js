const INIT_STATE = {
    carts: []
};

export const cartReducer =(state=INIT_STATE, action)=>{
  if (action.type==="ADD_CART") {
    return{
        ...state,
        carts:[...state.carts,action.payload]
    }
  }
  return state
}