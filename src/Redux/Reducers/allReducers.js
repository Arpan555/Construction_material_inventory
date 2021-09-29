import { ADD_DATA, DELETE_DATA, EDIT_DATA, RESET_DATA, SET_DATA } from "../Actions"

const initialState={
    data:[],
    setData:{}
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
        default:
            return state
    }
}