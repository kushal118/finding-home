export const processFireBaseErrors = (msg)=>{
    switch(msg){
        case "Firebase: Error (auth/email-already-in-use).":
            return "Email already in use, choose another email";
        case "Firebase: Error (auth/invalid-email).":
            return "Email is invalid"

    }
}