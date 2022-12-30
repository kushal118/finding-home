import { async } from "@firebase/util";
import { useState } from "react";

const Register = () => {
    
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('')
    const {register}=useAuth()
    const onSubmit = async(e)=>{
        e.preventDefault()
        tr
    }
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