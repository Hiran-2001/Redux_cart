export const ADD_TO_CART = (item)=>{
    return {
        type : "ADD_CART",
        payload:item
    }
}

export const DLT = (id)=>{
    return {
        type : "RMV_CART",
        payload :id
    }
}

export const RMV_QNTY =(items)=>{
    return {
        type:"RMV_QNTY",
        payload:items
    }
}