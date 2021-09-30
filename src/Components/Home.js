import React,{useState} from 'react'
import "./Style.css"
import { useDispatch } from 'react-redux'
import {addData} from "../Redux/Actions/allActions"
import { useHistory } from 'react-router'
import cuid from 'cuid'
const Home = () => {
    const [form,setForm]=useState({
        type:"",
        unit:"",
        manufacturingDate:"",
        company:"",
        price:"",
    })
    const history= useHistory()
    const dispatch = useDispatch()
    const handleChange=(e)=>{
        let { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch(addData({
            type:form.type,
            unit:form.unit,
            manufacturingDate:form.manufacturingDate,
            company:form.company,
            price:form.price,
            sold:"false",
            id:cuid()
        }))
        
        setForm({
            type:"",
            unit:"",
            manufacturingDate:"",
            company:"",
            price:"",
        })
    }
    return (
        <div>
            <center>
            <input type="button" value="Materials" className="btn btn-primary m-3" onClick={()=>
                history.push("/show")}/>
            <input type="button" value="Sold Material" className="btn btn-primary m-3" onClick={()=>
             history.push("/showsold")}/>
                <div className="form">
                <h2>Add Material</h2>
                <form  onSubmit={handleSubmit}>
                <label >Material Type</label>
                <input type="text" name="type" value={form.type} onChange={handleChange} required/><br/><br/>
                <label>Unit</label>
                <input type="number" name="unit" value={form.unit} onChange={handleChange} required/><br/><br/>
                <label>Manufacturing Date</label>
                <input type="date" name="manufacturingDate" value={form.manufacturingDate} onChange={handleChange} required/><br/><br/>
                <label>Company</label>
                <input type="text" name="company" value={form.company} onChange={handleChange} required/><br/><br/>
                <label>Price</label>
                <input type="number" name="price" value={form.price} onChange={handleChange} required/><br/><br/>
                <input type="submit" className="btn btn-primary m-3" value="Submit" />
                </form>
                </div>
            </center>
        </div>
    )
}

export default Home
