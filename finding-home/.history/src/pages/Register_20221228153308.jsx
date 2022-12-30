const Register = () => {
    const onSubmit = (e)=>{
        e.preventDefault()
    }
    return ( 
        <form onSubmit={onSubmit}>
            <label>Email</label>
        </form>
     );
}
 
export default Register;