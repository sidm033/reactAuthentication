import React, { useEffect, useState } from "react";

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => {},
    onLogin: (email, password) => {}
});


export const AuthContextProvider = (props) => {

    const [isLoggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        console.log('useEffect');
        const isLogin = localStorage.getItem('isLogin');
        setLoggedIn(isLogin === '1'? true : false);

    },[])

    const loginHandler = (email, password) => {
        console.log(email. password)
        localStorage.setItem('isLogin', '1');
        setLoggedIn(true);
    }

    const logoutHeader = () => {
        localStorage.clear();
        setLoggedIn(false);
    }

    return(
        <AuthContext.Provider 
        value={{
            isLoggedIn: isLoggedIn,
            onLogin: loginHandler,
            onLogout: logoutHeader
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext;