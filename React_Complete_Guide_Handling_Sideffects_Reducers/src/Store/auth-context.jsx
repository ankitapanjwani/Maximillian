import React, { useState, useEffect } from 'react'


//authcontext is an object containing a component.
const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => { },
    onLogin: () => { }
});

export const AuthContextProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    const loginHandler = (email, password) => {
        console.log(email, password);
        localStorage.setItem("LoggedIn", "1");
        setIsLoggedIn(true);
    };

    const logoutHandler = () => {
        localStorage.removeItem("LoggedIn");
        setIsLoggedIn(false);
    };
 // this useeffect runs after thw whole is ran. at the end depending on the dependencies
    useEffect(() => {
        const storedUserLoggedinInformation = localStorage.getItem("LoggedIn");
        if (storedUserLoggedinInformation === "1") {
            setIsLoggedIn(true);
        }
    }, []);

    return <AuthContext.Provider value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler
    }}>
        {children}
    </AuthContext.Provider>
}
export default AuthContext;