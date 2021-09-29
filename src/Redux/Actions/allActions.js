import { ADD_DATA, DELETE_DATA, EDIT_DATA, RESET_DATA, RESET_SEARCH_MATERIAL, RESET_SOLD_SEARCH, SEARCH_MATERIAL, SET_DATA, SOLD_SEARCH } from "./index";
export const addData=(data)=>{
    return{
        type:ADD_DATA,
        payload:data
    }
}
export const setData=(data)=>{
    return{
        type:SET_DATA,
        payload:data
    }
}
export const deleteData=(id)=>{
    return{
        type:DELETE_DATA,
        payload:id
    }
}
export const editData=(data)=>{
    return{
        type:EDIT_DATA,
        payload:data
    }
}
export const resetData=()=>{
    return{
        type:RESET_DATA
    }
}
export const soldSearch=(data)=>{
    return{
        type:SOLD_SEARCH,
        payload:data
    }
}
export const searchMaterial=(data)=>{
    return{
        type:SEARCH_MATERIAL,
        payload:data
    }
}
export const resetSearchMaterial=()=>{
    return{
        type:RESET_SEARCH_MATERIAL
    }
}
export const resetSoldSearch=()=>{
    return{
        type:RESET_SOLD_SEARCH
    }
}