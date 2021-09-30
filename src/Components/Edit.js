import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import {editData,resetData} from "../Redux/Actions/allActions"
const Edit = () => {
    const oldData = useSelector(state =>state.reducer.setData)
    const [form,setForm]=useState({
        type:oldData.type,
        unit:oldData.unit,
        manufacturingDate:oldData.manufacturingDate,
        company:oldData.company,            
        price:oldData.price,
        sold:oldData.sold,
        id:oldData.id
    })
    const history=useHistory()
    const dispatch = useDispatch()
    const handleChange=(e)=>{
        let { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch(editData({
            type:oldData.type,
            id:oldData.id,
            sold:form.sold,
            unit:form.unit,
            manufacturingDate:form.manufacturingDate,
            company:form.company,
            price:form.price
        }))
        dispatch(resetData())
        history.push('/show')
    }
    return (
        <div>
            <center>
            <input type="button" value="Back To Home" className="btn btn-dark m-4" onClick={()=>history.push("/")} />
            <h2>Edit Material Details</h2>
            <form className="form"  onSubmit={handleSubmit}>
                <label>Unit</label>
                <input type="number" name="unit" defaultValue={oldData.unit} onChange={handleChange} /><br/><br/>
                <label>Manufacturing Date</label>
                <input type="date" name="manufacturingDate" defaultValue={oldData.manufacturingDate} onChange={handleChange} /><br/><br/>
                <label>Company</label>
                <input type="text" name="company" defaultValue={oldData.company} onChange={handleChange} /><br/><br/>
                <label>Price</label>
                <input type="number" name="price" defaultValue={oldData.price} onChange={handleChange} /><br/><br/>
                <input type="submit" className="btn btn-primary" value="Submit" />
                </form>
            </center>
        </div>
    )
}
export default Edit
