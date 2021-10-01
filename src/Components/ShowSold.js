import React,{useState} from 'react'
import {useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import {soldSearch,resetSoldSearch} from "../Redux/Actions/allActions"
let data=[];
const ShowSold = () => {
    const [toggle,setToggle]=useState(false)
    const [search,setSearch]=useState({
        sdate:"",
        edate:""
    })
    const dispatch = useDispatch()
    const history=useHistory()
    data=JSON.parse(localStorage.getItem("data"))
    const soldData=data.filter(d=> d.sold === "true")
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
        history.push("/soldfilter")
    }
    return (
        <div>
            <center>
                <input type="button" className="btn btn-dark m-3" value="Back To Home" onClick={()=>  history.push("/")}/>
                <br/><br/>
                <input type="button" className="btn btn-dark m-3" value="Filter" onClick={()=>  setToggle(!toggle)}/>
                {soldData.length>0 && toggle &&
                <form onSubmit={handleSubmit}>
                    <label>Start Date:</label>
                    <input type="date" name="sdate" value={search.sdate} onChange={handleChange} /><br/><br/>
                    <label>End Date:</label>
                    <input type="date" name="edate" value={search.edate} onChange={handleChange} /><br/><br/>
                    <input type="submit" className="btn btn-primary sm" value="apply" />
                </form>}
                <br/>
                <hr/>
                {soldData.length>0 ? soldData.map(d=>
            <div className="form" key={d.id}>
                <p>Company:{d.company}</p>
                <p>Type:{d.type}</p>
                <input type="button" value="More" className="btn btn-success sm m-3" onClick={()=>
                history.push(`/solddetails/${d.id}`) } />
            </div>):""}
            </center>
        </div>
    )
}

export default ShowSold
