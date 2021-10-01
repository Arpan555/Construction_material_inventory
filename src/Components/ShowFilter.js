import React from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
let data=[];
let searchData=[];
let filteredData=[];
const ShowFilter = () => {
    data= JSON.parse(localStorage.getItem("data"))
    const history=useHistory()
    searchData=useSelector(state=>state.reducer.searchMaterial)
    
    if(searchData !== [])
    {   
        const {type,sdate,edate,company}=searchData
            if(type && !sdate && !edate && !company )
            {
            filteredData=data.filter(d=> d.type === type)
            }
            else if (type && sdate && edate && !company)
            {
            filteredData=data.filter(d=> d.type === type && d.manufacturingDate >= sdate && d.manufacturingDate <= edate )
            }
            else if (type && sdate && edate && company )
            {
                filteredData=data.filter(d=> d.type === type && d.manufacturingDate >= sdate && 
                d.manufacturingDate <= edate && d.company === company )
            }
            else if (type && !sdate && !edate && company )
            {
                filteredData=data.filter(d=> d.type === type && d.company === company )
            }
            else if (!type && sdate && edate && company )
            {
                filteredData=data.filter(d=> d.manufacturingDate >= sdate && d.manufacturingDate <= edate 
                && d.company ===company )
            }
            else if (!type && sdate && edate && !company)
            {
                filteredData=data.filter(d=> d.manufacturingDate >= sdate && d.manufacturingDate <= edate )
            }
            else if (!type && !sdate && !edate && company)
            {
                filteredData=data.filter(d=> d.company === company )
            }
   }
   let relatedData=filteredData.slice(0,3)
    return (
        <div>
            <center>
            <input type ="button" value="Back To Home" className="btn btn-dark" onClick={()=>history.push("/")}/><br/><br/>
            <h2>Filter Data</h2>
            {filteredData.length>0 ? 
                filteredData.map(d=>
                <div className="form" key={d.id}>
                <p>Company:{d.company}</p>
                <p>Type:{d.type}</p>
                <p>Manufacturing Date: {d.manufacturingDate}</p>
                <input type="button" value="More" className="btn btn-success sm m-3" onClick={()=>
                history.push(`/show/${d.id}`) } />
                </div>): "no data found"}
            <hr/>
            {filteredData.length>0 ?
                <>
                <h3>Related Item</h3>
                {relatedData.map(d =>
                <div className="related" key={d.id}>
                <p>Type:{d.type}</p>
                <p>Company:{d.company}</p>
                </div>)}
                </>:""}
            </center>
        </div>
    )
}

export default ShowFilter
