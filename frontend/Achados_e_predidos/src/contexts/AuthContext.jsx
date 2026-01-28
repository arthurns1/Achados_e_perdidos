import { Children, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});

    const authUser = (token) => {
        setAuth({
            token,
        });
    };

    const logoutUser = () => {
        setAuth({});
    };

    return (
        <AuthContext.Provider value={{ auth, authUser, logoutUser }}>
            {children}
        </AuthContext.Provider>
    );
};
