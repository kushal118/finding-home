const Register = () => {
    const onSubmit = (e)=>{
        e.preventDefault()
    }
    return ( 
        <form onSubmit={onSubmit}>
            <label>E</label>
        </form>
     );
}
 
export default Register;