import React, {useState} from "react";
import {Spin} from "antd";
import {auth} from "../firebase/config";
import {useNavigate} from "react-router-dom";

export  const AuthContext = React.createContext();

export default function AuthProvider({children}){
    const [user,setUser] = useState();
    let navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);

    React.useEffect(()=>{
       const unsubscibed= auth.onAuthStateChanged ((user)=>{
            if(user){
                const {displayName,email,uid,photoUrl} = user;
                setUser({
                    displayName,email,uid,photoUrl
                });
                setIsLoading(false);
                return navigate("/");
            }
           setUser({});
           setIsLoading(false);
           navigate('/login');
        });
       //clean function
        return () =>{
            unsubscibed();
        }
    },[navigate])



    return(
        <AuthContext.Provider value={{user}}>
            {isLoading ? <Spin style={{ position: 'fixed', inset: 0 }} /> : children}
        </AuthContext.Provider>
    )
}