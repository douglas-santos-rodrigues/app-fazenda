import React,{useContext, useState} from "react";
import { api } from "../services/api";
export const AuthContext = createContext({});

export function AuthProvider({children}){
    const [loadingAuth, setLoadingAuth] = useState(false);
    const [user,setUser] = useState({
        id:'',
        nome:'',
        email:'',
    });

    const isAuthenticated = !!user.nome;

    async function signOut() {

    }

    return(
        <AuthContext.Provider value={{}}>
            {children}
        </AuthContext.Provider>
    )
    
}

