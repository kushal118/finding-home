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
            <input type="submit"  />
        </form>
     );
}
 
export default Register;