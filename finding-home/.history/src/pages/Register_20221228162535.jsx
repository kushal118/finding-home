import { async } from "@firebase/util";
import { useState } from "react";
import { useAuth } from "../context/authContext";
const Register = () => {
    
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('')
    const [loading,setLoading]=useState(false)
    const [error,setError] =useState('')
    const {register}=useAuth()
    
    const onSubmit = async(e)=>{
        e.preventDefault()
        try {
            await register({email,password});
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
            setError(err.message)
        }
    }
    if(loading) return <div>loading...</div>
    if(error) return <div>{</div>
    return ( 
        <form onSubmit={onSubmit}>
            <label>Email</label>
            <input type="text" onChange={(e)=>{
                setEmail(e.target.value)
                
            }} value={email} />
            <label>Password</label>
            <input type="password" onChange={(e)=>{
                setPassword(e.target.value)
            }} value={password} />
            <input type="submit" value="SUBMIT" />
        </form>
     );
}
 
export default Register;