import { useState } from "react";

const Register = () => {
    const onSubmit = (e)=>{
        e.preventDefault()
    }
    const [email,setEmail]=useState('');
    const [password]
    return ( 
        <form onSubmit={onSubmit}>
            <label>Email</label>
            <input type="text" />
            <label>Password</label>
            <input type="password" />
            <input type="submit" value="SUBMIT" />
        </form>
     );
}
 
export default Register;