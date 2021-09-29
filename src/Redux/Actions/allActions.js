import { ADD_DATA, DELETE_DATA, EDIT_DATA, RESET_DATA, SET_DATA } from "./index";
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
    console.log(data)
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