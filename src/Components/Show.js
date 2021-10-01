import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import { useHistory} from 'react-router-dom'
import { editData,searchMaterial,resetSearchMaterial,deleteData } from '../Redux/Actions/allActions'
let data=[];
const Show = () => {
    const [filter,setFilter]=useState({
        type:"",
        sdate:"",
        edate:"",
        company:""
    })
    const [toggle,setToggle]=useState(false)
    data= JSON.parse(localStorage.getItem("data"))
    const dispatch = useDispatch()
    const history=useHistory()
    const handleChange=(e)=>{
        let {name,value} =e.target;
        setFilter({...filter,[name]:value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch(resetSearchMaterial())
        dispatch(searchMaterial({
            type:filter.type,
            sdate:filter.sdate,
            edate:filter.edate,
            company:filter.company
        }))    
        setFilter({
            type:"",
            sdate:"",
            edate:"",
            company:""
        })
        history.push("/filter")
   }
    const handleDelete=(id)=>{
        dispatch(deleteData(id))
    }
    
return (
        <div>
            <center>
                <input type="button" className="btn btn-dark" value="Back To Home" onClick={()=>
                    history.push("/")}/><br/><br/>
                <input type="button" className="btn btn-dark" value="Filter" onClick={()=> setToggle(!toggle)}/><br/><br/>
                
                {toggle && data.length>0 ? 
                <form onSubmit={handleSubmit}>
                    <label>Type:</label>
                    <input type="text" name="type" value={filter.type} onChange={handleChange} /><br/><br/>
                    <label>Start Date</label>
                    <input type="date" name="sdate" value={filter.sdate} onChange={handleChange} />&nbsp;&nbsp;&nbsp;
                    <label>End Date</label>
                    <input type="date" name="edate" value={filter.edate} onChange={handleChange} /><br/><br/>
                    <label>Company Name:</label>
                    <input type="text" name="company" value={filter.company} onChange={handleChange} /><br/><br/>
                    <input type="submit" className="btn btn-primary" value="apply" />
                </form>:""}<hr/>
                
        
        {data && data.map( d=>
        <div className="form" key={d.id}>
            <p>Company:{d.company}</p>
            <p>Type:{d.type}</p>
            <p>Manufacturing Date: {d.manufacturingDate}</p>
                {d.sold==="true" ? "" :
                <>
                <label>Sold: </label>
                <input type="checkbox" onChange={()=>
                    dispatch(editData({
                        type:d.type,
                        unit:d.unit,
                        manufacturingDate:d.manufacturingDate,
                        company:d.company,
                        price:d.price,
                        sold:"true",
                        soldDate:new Date().toISOString(),
                        id:d.id
                    }))
                } /><br/> </> }
            <input type="button" value="More" className="btn btn-success sm m-3" onClick={()=>
            history.push(`/show/${d.id}`) } />
            <input type="button" className="btn btn-warning" value="Delete" onClick={()=>handleDelete(d.id)}/>
        </div>)}
                
            </center>
        </div>
    )
}
export default Show
