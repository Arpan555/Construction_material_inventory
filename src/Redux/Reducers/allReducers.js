import { ADD_DATA, DELETE_DATA, EDIT_DATA, RESET_DATA, RESET_SEARCH_MATERIAL, RESET_SOLD_SEARCH, SEARCH_MATERIAL, SET_DATA, SOLD_SEARCH } from "../Actions"

const initialState={
    data:[],
    setData:{},
    soldSearchDate:{},
    searchMaterial:{}
}
export default function reducer(state=initialState,action){
    switch(action.type){
        case ADD_DATA:
            return{
                ...state,
                data:[...state.data,action.payload]
            }
        case SET_DATA:
            return{
                ...state,
                setData:{...state.setData,...action.payload}
            }
        case DELETE_DATA:
            return{
                ...state,
                data: state.data.filter(data=>data.id !== action.payload)
            }
        case EDIT_DATA:
            return{
                ...state,
                data: state.data.map(d=>{
                    if(d.id === action.payload.id) return {...d,...action.payload}
                    return d
                })
            }
        case RESET_DATA:
            return{
                ...state,
                setData:[]
            }
        case SOLD_SEARCH:
            return{
                ...state,
                soldSearchDate:{...state.soldSearchDate,...action.payload}
            }
        case SEARCH_MATERIAL:
            return{
                ...state,
                searchMaterial:{...state.searchMaterial,...action.payload}
            }
        case RESET_SEARCH_MATERIAL:
            return{
                ...state,
                searchMaterial:{}
            }
        case RESET_SOLD_SEARCH:
            return{
                ...state,
                soldSearchDate:{}
            }
        default:
            return state
    }
}