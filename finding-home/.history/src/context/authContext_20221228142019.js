import { async } from "@firebase/util";
import { useEffect, createContext, useContext, useState } from "react";
const AuthContext = createContext();
import { auth, 
    signInWithEmailAndPassword,
     createUserWithEmailAndPassword } from "../firebase";

const useAuth = ()=>{
    return useContext(AuthContext)
}
const AuthProvider =({children})=>{
    //State=> user information
    const [user,setUser] = useState()
    //signup- register
    const register = async({email,password})=>{
        await createUserWithEmailAndPassword(auth,email,password);
    }
    //login
    const login = async({email,password})=>{
        await signInWithEmailAndPassword(auth,email,password);
    }
    //signout-logout
    const logout =async()=>{
        await auth.logout();
    }

    //Firebase listens to any change in the user status


    useEffect(()=>{
        auth.onAuthStateChanged(async(user)=>{
            setUser(user)
        })
    },[])
    const exports = {
        //user,
        //register,
        //login,
        //logout,
        
    }
    return(
        <AuthContext.Provider value={exports}> {children} </AuthContext.Provider>
    )
   

};
export default AuthProvider;
export{useAuth};
<AuthProvider>
    <ComponentA/>

    <ComponentB/>
</AuthProvider>
const ComponentA =()=>{
    const {user,register,login,logout} = useAuth()
}