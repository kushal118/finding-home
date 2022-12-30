const Register = () => {
    const onSubmit = (e)=>{
        e.preventDefault()
    }
    return ( 
        <form onSubmit={onSubmit}>
            <label>Email</label>
            <input type="text" />
            <label>Password</label>
            <input type="password" />
            <input type="s" />
        </form>
     );
}
 
export default Register;