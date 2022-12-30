import { useState } from "react";

const Register = () => {
    const onSubmit = (e)=>{
        e.preventDefault()
    }
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('')
    const {register}=
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