import { useEffect, createContext, useContext, useState } from "react";
import { auth,signInWithEmailAndPassword,createUserWithEmailAndPassword } from "../firebase/firebase";
const ProfileContext = createContext();

const useProfile = ()=>{
    return useContext(ProfileContext)
}
const ProfileProvider =({children})=>{

    //
   
    const exports = {};
 
    return(
        <ProfileContext.Provider value={exports}> {children} </ProfileContext.Provider>
    )
   

};
export default ProfileProvider;
export{useAuth};
