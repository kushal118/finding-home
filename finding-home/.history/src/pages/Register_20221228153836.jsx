import { useState } from "react";

const Register = () => {
    const onSubmit = (e)=>{
        e.preventDefault()
    }
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('')
    return ( 
        <form onSubmit={onSubmit}>
            <label>Email</label>
            <input type="text" onChange={(e)=>{
                setEmail(e.target.Va)
            }} />
            <label>Password</label>
            <input type="password" />
            <input type="submit" value="SUBMIT" />
        </form>
     );
}
 
export default Register;