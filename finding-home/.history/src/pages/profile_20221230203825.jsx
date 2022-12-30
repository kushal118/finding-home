import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { processFireBaseErrors } from "../firebase/error";
const Profile = () => {
    
    const [name,setName]=useState('');
    const [city,setCity]=useState('')
    const [loading,setLoading]=useState(false)
    const [startDate,setStartdat] =useState('')
    const {register}=useAuth()
    const  navigate =useNavigate()
    
    const onSubmit = async(e)=>{
        e.preventDefault()
        try {
            await register({email,password});
            setLoading(false)
            //navigate to a different router
            navigate('/')


        } catch (error) {
            console.log(error)
            setLoading(false)
            setError(processFireBaseErrors(error.message))
        }
    }
    if(loading) return <div>loading...</div>
    return ( <>
        <Link to="/">Back</Link>
        <form onSubmit={onSubmit}>
        
        <h1>Profile</h1>
        {error && <p style={{color:"red"}}>{error}</p> }
            <label>Name</label>
            <input type="text" 
             value={name} 
             onChange={(e)=>{
             setName(e.target.value)
             }} />
            
            <label>City</label>
            <select>
                <option >Choose...</option>
                <option>Stockholm</option>
                <option>Göteborg</option>
                <option>Malmö</option>
                <option>Uppsala</option>
                <option>Linköping</option>


            </select>
            <input type="text" 
             value={name} 
             onChange={(e)=>{
             setName(e.target.value)
             }} />

            <label>Name</label>
            <input type="text" 
             value={name} 
             onChange={(e)=>{
             setName(e.target.value)
             }} />

            <label>Name</label>
            <input type="text" 
             value={name} 
             onChange={(e)=>{
             setName(e.target.value)
             }} />
            
        </form>
        </>
     );
}
 
export default Profile;