import { useState } from "react";
import AuthContext from "./auth-context";

const AuthContextProvider = (props) => {
    const initialToken = localStorage.getItem('idToken');
    const initialUserEmail = localStorage.getItem('userEmail');

    const [token, setToken] = useState(initialToken);
    const [userEmail, setUserEmail] = useState(initialUserEmail);

    const isLoggedIn = !!token;

    const loginHandler = (idToken, email) => {
        setToken(idToken);
        localStorage.setItem('idToken', idToken);
        setUserEmail(email);
        localStorage.setItem('userEmail', email);
    }

    const logoutHandler = () => {
        setToken(null);
        localStorage.removeItem('idToken');
        setUserEmail(null);
        localStorage.removeItem('userEmail');
    }

    const authContext = {
        token: token,
        isLoggedIn: isLoggedIn,
        userEmail: userEmail,
        login: loginHandler,
        logout: logoutHandler
    }
    return (
        <AuthContext.Provider value={authContext}>
            {props.children}
        </AuthContext.Provider>)
}

export default AuthContextProvider;