import {useState, useEffect, createContext} from "react";
import {Token, User} from '@/api'

const tokenCtrl = new Token();
const userCtrl = new User();
export const AuthContext = createContext();

export function AuthProvider(props) {
    const {children} = props

    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const token = tokenCtrl.getToken();

            if(!token){
                logout()
                setLoading(false);
                return;
            }

            if(tokenCtrl.hasExpired(token)){
                logout();
            } else {
                await login(token);
            }
        })()
        }, [])


    const login = async (token) => {
        try{
            tokenCtrl.setToken(token);
            const response =  await userCtrl.getMe();
            setUser(response);
            setToken(token);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    }

    const logout = () => {
        console.log('Cerrando sesión');
    }

    const data= {
        accessToken: token,
        user,
        login,
        logout: null,
        updateUser: null,
    };


    return (
         <AuthContext.Provider value={data}>
              {children}
         </AuthContext.Provider>
    )

}