import { createContext } from "react";

const AuthContext=createContext({
    token: '',
    isLoggedIn: false,
    userEmail: null,
    login:()=>{},
    logout: ()=>{}
})

export default AuthContext;