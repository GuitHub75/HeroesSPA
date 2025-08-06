import { useReducer } from "react"
import { auntReducer } from "./authReducer"
import { AuthContext } from "./AuthContext"
import { types } from "../types/types"

const init = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    return{
        logged: !!user,
        user: user
    }
}

export const AuthProvider = ({children}) => {

    const [authState, dispatch] = useReducer(auntReducer,{},init)


    const login = (name = '') =>{
        const user = {
            id: 'ABC',
            name : name
        }
        const action = {
            type : types.login,
            payload :user
        }
        dispatch(action)
        localStorage.setItem('user',JSON.stringify(user))
        }

    const logout = () =>{
        const action = {
            type : types.logout
        }
        dispatch(action)
        localStorage.removeItem('user')
    }    

    return(
        <AuthContext.Provider value={{
            ...authState,
            login:login,
            logout:logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}