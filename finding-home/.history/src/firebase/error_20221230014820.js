export const processFireBaseErrors = (msg)=>{
    switch(msg){
        case "Firebase: Error (auth/email-already-in-use).":
            return "Email already in use, choose another email";
        case "Firebase: Error (auth/invalid-email).":
            return "Email is invalid,choose a valid email: example@example.com";
        case "Firebase: Error (auth/i"

    }
}