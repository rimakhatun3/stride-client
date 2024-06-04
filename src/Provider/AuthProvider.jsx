import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth ,GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";
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

useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth,currentUser=>{
        if(currentUser){
            setUser(currentUser)
            setLoading(false)
            
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
facebookLogin
}

    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;