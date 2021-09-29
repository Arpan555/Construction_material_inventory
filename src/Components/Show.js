import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useHistory} from 'react-router-dom'
const Show = () => {
    const history=useHistory()
    const data=useSelector(state=>state.reducer.data)
    return (
        <div>
            <center>
                <input type="button" className="btn btn-dark" value="Back To Home" onClick={()=> history.push("/")}/>
                <hr/>
                {data.length>0 ?<h2> Material Details </h2> :"No Data Found"}
                {data.length>0 &&
                data.map( d=>
                    <div className="form" key={d.id}>
                    <p>Company:{d.company}</p>
                    <p>Type:{d.type}</p>
                    <input type="button" value="More" className="btn btn-success sm" onClick={()=>
                    history.push(`/show/${d.id}`) } />
                    </div>)}
            </center>
        </div>
    )
}

export default Show
