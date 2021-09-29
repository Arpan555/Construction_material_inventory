import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import {soldSearch,resetSoldSearch} from "../Redux/Actions/allActions"
let filteredData=[];
let details=[];
const ShowSold = () => {
    const [search,setSearch]=useState({
        sdate:"",
        edate:""
    })
    const dispatch = useDispatch()
    const history=useHistory()
    const data=useSelector(state=>state.reducer.data)
    const searchDate=useSelector(state=>state.reducer.soldSearchDate)
    const soldData=data.filter(d=> d.sold === "true")
    if (searchDate !==[])
    {
        const {sdate,edate}=searchDate
        filteredData=soldData.filter(p=> Date.parse(p.dateTime) >= Date.parse(sdate) 
        && Date.parse(p.dateTime)<= Date.parse(edate)  )   
    }
    if (filteredData.length === 0)
    {   
        details=soldData.map(d=>
            <div className="form" key={d.id}>
                <p>Company:{d.company}</p>
                <p>Type:{d.type}</p>
                <input type="button" value="More" className="btn btn-success sm m-3" onClick={()=>
                history.push(`/solddetails/${d.id}`) } />
            </div>)
    }
    else{
        details=filteredData.map(d=>
            <div className="form" key={d.id}>
                <p>Company:{d.company}</p>
                <p>Type:{d.type}</p>
                <input type="button" value="More" className="btn btn-success sm m-3" onClick={()=>
                history.push(`/solddetails/${d.id}`) } />
            </div>)
    }
    const handleChange=(e)=>{
        let {name,value}=e.target;
        setSearch({ ...search, [name]: value });
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch(resetSoldSearch())
        dispatch(soldSearch({
            sdate:search.sdate,
            edate:search.edate
        }))
        setSearch({
            sdate:"",
            edate:""
        })
    }
    return (
        <div>
            <center>
                <input type="button" className="btn btn-dark m-3" value="Back To Home" onClick={()=>history.push("/")} />
                <br/><br/>
                {soldData.length>0 ? 
                <>
                <form onSubmit={handleSubmit}>
                    <label>Start Date:</label>
                    <input type="date" name="sdate" value={search.sdate} onChange={handleChange} /><br/><br/>
                    <label>End Date:</label>
                    <input type="date" name="edate" value={search.edate} onChange={handleChange} /><br/><br/>
                    <input type="submit" className="btn btn-primary sm" value="apply" />
                </form>
                </>:"No Record Found" } <br/>
                <hr/>
                {details}
          
            </center>
        </div>
    )
}

export default ShowSold
