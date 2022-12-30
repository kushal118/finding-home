import { useEffect, createContext, useContext, useState } from "react";
import {collection,addDoc,db,severTimestamp } from "../firebase/firebase";
const ProfileContext = createContext();

const useProfile = ()=>{
    return useContext(ProfileContext)
}
const ProfileProvider =({children})=>{

    //Post(Add)
   const addProfile = async(profile)=>{
    //-->Firebase --> add
    await addDoc(collection(db, "profiles"), {
        ...profile,
        createAt:severTimestamp(),
        updateAt:severTimestamp(),
      });

   }
    const exports = {};
 
    return(
        <ProfileContext.Provider value={exports}> {children} </ProfileContext.Provider>
    )
   

};
export default ProfileProvider;
export{useProfile};
