import { useEffect, createContext, useContext, useState } from "react";
import { auth,signInWithEmailAndPassword,createUserWithEmailAndPassword } from "../firebase/firebase";
const ProfileContext = createContext();

const userProfile = ()=>{
    return useContext(ProfileContext)
}
const ProfileProvider =({children})=>{
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
        await auth.signOut();
    }

    //Firebase listens to any change in the user status


    useEffect(()=>{
        const unsubscribe= auth.onAuthStateChanged(async(user)=>{
            setUser(user);
        });
        return ()=>{
            unsubscribe();
        }
    },[]);
   
    const exports = {user, register,login,logout};
 
    return(
        <ProfileContext.Provider value={exports}> {children} </.Provider>
    )
   

};
export default AuthProvider;
export{useAuth};
