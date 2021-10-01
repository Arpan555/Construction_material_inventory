import { ADD_DATA, DELETE_DATA, EDIT_DATA, RESET_DATA, RESET_SEARCH_MATERIAL, RESET_SOLD_SEARCH, SEARCH_MATERIAL, SET_SINGLE_DATA, SOLD_SEARCH } from "./index";
let allData=[];
let locData=[];
export const addData=(data)=>{
    allData.push(data)
    localStorage.setItem("data",JSON.stringify(allData))
    return{
        type:ADD_DATA,
        payload:data
    }
}
export const setSingleData=(data)=>{
    return{
        type:SET_SINGLE_DATA,
        payload:data
    }
}
export const deleteData=(id)=>{    
    locData=JSON.parse(localStorage.getItem("data"))
    allData= locData.filter(d=> d.id !== id)
    localStorage.setItem("data",JSON.stringify(allData))
    return{
        type:DELETE_DATA,
        payload:id
    }
}
export const editData=(data)=>{    
     locData=JSON.parse(localStorage.getItem("data"))
    allData=locData.map(d=>{
        if(d.id === data.id) return {...d,...data}
        return d
    })
    localStorage.setItem("data",JSON.stringify(allData))
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