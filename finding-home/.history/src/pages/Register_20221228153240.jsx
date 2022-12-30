const Register = () => {
    const onSubmit = (e)=>{
        e.preventDefault()
    }
    return ( 
        <form onSubmit={onSubmit}></form>
     );
}
 
export default Register;