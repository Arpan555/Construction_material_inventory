import React,{useState} from 'react'
import { useSelector,useDispatch} from 'react-redux'
import { useHistory} from 'react-router-dom'
import { editData,searchMaterial,resetSearchMaterial } from '../Redux/Actions/allActions'
let filteredData=[];
let details=[];
let searchData=[];
const Show = () => {
    const [filter,setFilter]=useState({
        type:"",
        sdate:"",
        edate:"",
        company:""
    })
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
   }
    const data=useSelector(state=>state.reducer.data)
    searchData=useSelector(state=>state.reducer.searchMaterial)
    if(searchData !== [])
    {   const {type,sdate,edate,company}=searchData
            if(type && !sdate && !edate && !company )
            {
            filteredData=data.filter(d=> d.type === type)
            }
            else if (type && sdate && edate && !company)
            {
            filteredData=data.filter(d=> d.type === type && d.manufacturingDate>=sdate && d.manufacturingDate<=edate )
            }
            else if (type && sdate && edate && company )
            {
                filteredData=data.filter(d=> d.type === type && d.manufacturingDate>=sdate && d.manufacturingDate<=edate && d.company ===company )
            }
            else if (type && !sdate && !edate && company )
            {
                filteredData=data.filter(d=> d.type === type && d.company ===company )
            }
            else if (!type && sdate && edate && company )
            {
                filteredData=data.filter(d=> d.manufacturingDate>=sdate && d.manufacturingDate<=edate && d.company ===company )
            }
            else if (!type && sdate && edate && !company)
            {
                filteredData=data.filter(d=> d.manufacturingDate>=sdate && d.manufacturingDate<=edate )
            }
            else if (!type && !sdate && !edate && company)
            {
                filteredData=data.filter(d=> d.company ===company )
            }
            
    }
        if (filteredData.length === 0){
            details=data.map( d=>
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
                                dateTime:new Date().toISOString(),
                                id:d.id
                            }))
                        } /><br/> </> }
                    <input type="button" value="More" className="btn btn-success sm m-3" onClick={()=>
                    history.push(`/show/${d.id}`) } />
                </div>
                )
        }
        else{
            details=filteredData.map(d=>
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
                                dateTime:new Date().toISOString(),
                                id:d.id
                            }))
                        } /><br/> </> }
                    <input type="button" value="More" className="btn btn-success sm m-3" onClick={()=>
                    history.push(`/show/${d.id}`) } />
                </div>)
        }    
    return (
        <div>
            <center>
                <input type="button" className="btn btn-dark" value="Back To Home" onClick={()=> history.push("/")}/><br/><br/>
                {data.length>0 ? 
                <> 
                <h2>Filter</h2>
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
                </form>
                </>:"No Data Found"}<hr/>
                <p>{details}</p>
                 <br/><hr/>
                {filteredData.length>0 ?
                <>
                <h3>Related Item</h3>
                {filteredData.map(d =>
                <div className="related">
                <p>Type:{d.type}</p>
                <p>Company:{d.company}</p>
                </div>)}
                </>:""}
            </center>
        </div>
    )
}
export default Show
