import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth ,GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";
import app from "../Firebase/firebase.config";
export const authContext = createContext(null)

const AuthProvider = ({children}) => {
    const auth = getAuth(app)
const goggleProvider = new GoogleAuthProvider()
const facebookProvider = new FacebookAuthProvider();
const [user,setUser] = useState(null)
const [loading,setLoading] = useState(true)

const createUser = (email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
}

const goggleLogin = ()=>{
    setLoading(true)
    return signInWithPopup(auth,goggleProvider)
}

const facebookLogin =()=>{
    setLoading(true)
    return signInWithPopup(auth,facebookProvider)
}

const signIn =(email,password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}

const logOut =()=>{
    setLoading(true)
    return signOut(auth)
}

const resetPassword =(email)=>{
    
    return sendPasswordResetEmail(auth,email)
}

useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth,currentUser=>{
        if(currentUser){
            setUser(currentUser)
            setLoading(false)
            if(currentUser?.email){
const user = {email: currentUser.email}

fetch('https://assinment-server-alpha.vercel.app/jwt',{
    method:"POST",
    headers:{
        "content-type": "application/json"
    },
    body: JSON.stringify(user)
})
.then(res=>res.json())
.then(data=>{
    console.log(data)
    localStorage.setItem("token" , data.token)
})
            }

           else{
            localStorage.removeItem("token")
           }
            
        }

        else{
            setLoading(false) 
        }
    })

    return ()=>{
        return unSubscribe
    }
},[])

   
const authInfo ={
user,
loading, 
createUser,
goggleLogin, 
signIn,
logOut,
facebookLogin,
resetPassword
}

    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;