import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
const Login = () => {
    
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('')
    const [loading,setLoading]=useState(false)
    const [error,setError] =useState('')
    const {login}=useAuth()
    const  navigate =useNavigate()
    
    const onSubmit = async(e)=>{
        e.preventDefault()
        try {
            await login({email,password});
            setLoading(false)
            //navigate to a different router
            navigate('/')


        } catch (error) {
            console.log(error)
            setLoading(false)
            setError(error.message)
        }
    }
    if(loading) return <div>loading...</div>
    if(error) return <div>{error}</div>
    return ( <>
         <Link to>Back</Link>
        <form onSubmit={onSubmit}>
        <h1>Login</h1>
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
        <p>New to our website? <Link to= "/register">register</Link></p>
        </>
     );
}
 
export default Login;