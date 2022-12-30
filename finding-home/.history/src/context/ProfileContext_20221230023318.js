import { useEffect, createContext, useContext, useState } from "react";
import { auth,signInWithEmailAndPassword,createUserWithEmailAndPassword } from "../firebase/firebase";
const ProfileContext = createContext();

const userProfile = ()=>{
    return useContext(ProfileContext)
}
const ProfileProvider =({children})=>{
   
    const exports = {user, register,login,logout};
 
    return(
        <ProfileContext.Provider value={exports}> {children} </ProfileContext.Provider>
    )
   

};
export default AuthProvider;
export{useAuth};
