import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { processFireBaseErrors } from "../firebase/error";
const Profile = () => {
    
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('')
    const [loading,setLoading]=useState(false)
    const [error,setError] =useState('')
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
            <input type="text" value onChange={(e)=>{
                setEmail(e.target.value)
                
            }} value={email} />
            <label>Password</label>
            <input type="password" onChange={(e)=>{
                setPassword(e.target.value)
            }} value={password} />
            <input type="submit" value="SUBMIT" />
        </form>
        </>
     );
}
 
export default Profile;