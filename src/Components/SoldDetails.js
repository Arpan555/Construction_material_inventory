import React from 'react'
import { useParams,useHistory } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
const SoldDetails = () => {
    const {id}=useParams()
    const history= useHistory()
    const allData = useSelector(state => state.reducer.data)
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
                    <p>dateTime:{d.dateTime}</p>
                    </div>)}
            </center>
        </div>
    )
}


export default SoldDetails
