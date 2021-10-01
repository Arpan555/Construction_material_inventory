import React from 'react'
import {useHistory} from "react-router-dom"
import {useSelector} from "react-redux"
let relatedData=[];
let filteredData=[];
let data=[];
const SoldFilter = () => {
    const history=useHistory()    
    const searchDate=useSelector(state=>state.reducer.soldSearchDate)
    data=JSON.parse(localStorage.getItem("data"))
    const soldData=data.filter(d=> d.sold === "true")
    if (searchDate !==[])
    {
        const {sdate,edate}=searchDate
        filteredData=soldData.filter(p=> Date.parse(p.soldDate) >= Date.parse(sdate) 
        && Date.parse(p.soldDate) <= Date.parse(edate)  )   
    }
    relatedData=filteredData.slice(0,3)
    
    return (
        <div>
            <center>
            <input type="button" value="Back To Home" className="btn btn-dark" onClick={()=>history.push("/")}/><br/><br/>
            <h2>Filter Data</h2>
            {filteredData.length>0 ? filteredData.map(d=>
            <div className="form" key={d.id}>
                <p>Company:{d.company}</p>
                <p>Type:{d.type}</p>
                <input type="button" value="More" className="btn btn-success sm m-3" onClick={()=>
                history.push(`/solddetails/${d.id}`) } />
            </div>):"no record found"}

            <hr/>
                {relatedData.length>0 ?
                <><hr/>
                <h2>Related Data</h2>
                {relatedData.map(d=>
                    <div className="related">
                        <p>Company:{d.company}</p>
                        <p>Type:{d.type}</p>
                    </div>)}
                    </>:""}
            </center>
        </div>
    )
}

export default SoldFilter
