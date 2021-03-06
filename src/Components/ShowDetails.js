import React from 'react'
import { useHistory,useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {setSingleData} from "../Redux/Actions/allActions"
import "./Style.css"
const ShowDetails = () => {
    const {id}=useParams()
    const dispatch = useDispatch()
    const history= useHistory()
    const allData = JSON.parse(localStorage.getItem("data"))
    const showData=allData.filter(da=> da.id === id)
    
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
                        dispatch(setSingleData(d))
                    } }/>
                    
                </div>)}
            
            </center>
        </div>
    )
}

export default ShowDetails
