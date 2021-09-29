import React,{useState} from 'react'
import { useHistory,useParams } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import {setData,deleteData} from "../Redux/Actions/allActions"
import "./Style.css"
const ShowDetails = () => {
    const {id}=useParams()
    console.log(id)
    const dispatch = useDispatch()
    const history= useHistory()
    const allData = useSelector(state => state.reducer.data)
    const showData=allData.filter(da=> da.id ===id)
    const handleDelete=(id)=>{
        dispatch(deleteData(id))
    }
    return (
        <div>
            <center>
            <input type="button" value="Back To Home" className="btn btn-dark b-5" onClick={()=>history.push("/")} />
            {showData.length>0 && showData.map(d=>
                <div className="form" key={d.id}>
                    <p>Type:{d.type}</p>
                    <p>Company:{d.company}</p>
                    <p>Price:{d.price}</p>
                    <p>Unit:{d.unit}</p>
                    <p>manufacturing Date:{d.manufacturingDate}</p>
                    <p>Sold:{d.sold}</p>
                    <p>ID:{d.id}</p>
                    <input type="button" className="btn btn-warning m-3" value="Edit" onClick={()=>{
                        history.push("/edit")
                        dispatch(setData(d))
                    } }/>
                    <input type="button" className="btn btn-warning" value="Delete" onClick={()=>handleDelete(d.id)}/>
                </div>)}
            </center>
        </div>
    )
}

export default ShowDetails
