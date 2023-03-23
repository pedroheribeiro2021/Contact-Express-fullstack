import { AxiosError } from "axios";
import { createContext, ReactNode, SetStateAction, useContext, useState } from "react";
import { api } from "../services/api";
import { useHistory } from "react-router-dom"

interface iApiError {
    message: string;
}

interface iUserProps {
    children: ReactNode;
}

interface iDataLogin {
    email: string;
    password: string;
}

interface iDataRegister {
    name: string;
    email: string;
    password: string;
    phone: string;
}

interface iUser {
    id: string;
	name: string;
	email: string;
	contact: string;
}

export interface iUserContext {
    user: iUser | null;
    setCurrentRoute: React.Dispatch<SetStateAction<string | null>>;
    userLogin: (data: iDataLogin) => void;
    userRegister: (data: iDataRegister) => void;
}

export const UserContext = createContext<iUserContext>({} as iUserContext)

export const UserProvider = ({children}: iUserProps) => {

    const [user, setUser] = useState<iUser | null>(null)
    const [currentRoute, setCurrentRoute] = useState<string | null>(null)

    const history = useHistory()

    const userLogin = (data: iDataLogin) => {

        api.post(`/login `, data)
        .then((resp) => {
            console.log(resp.data.user)
            setUser(resp.data.user)
            localStorage.setItem('@token', resp.data.token)
            console.log(resp.data)
            // localStorage.setItem('@id', resp.data.user.id)
            history.push('/dashboard')
            // toast.success('Login efetuado com sucesso!', {
            //     position: "top-right",
            //     autoClose: 2000,
            //     hideProgressBar: false,
            //     closeOnClick: true,
            //     pauseOnHover: true,
            //     draggable: true,
            //     progress: undefined,
            // })
        })
        .catch((err) => {
            console.log(err)
            // toast.error('Erro de credenciais!', {
            //     position: "top-right",
            //     autoClose: 2000,
            //     hideProgressBar: false,
            //     closeOnClick: true,
            //     pauseOnHover: true,
            //     draggable: true,
            //     progress: undefined,
            //     })
        })
    }

    const userRegister = async(data: iDataRegister) => {

        await api.post(`/user`, data)
        .then((resp) => {
            console.log(resp)
            // toast.success('Cadastro efetuado com sucesso!', {
            //     position: "top-right",
            //     autoClose: 2000,
            //     hideProgressBar: false,
            //     closeOnClick: true,
            //     pauseOnHover: true,
            //     draggable: true,
            //     progress: undefined,
            // })
            history.push('/')
        })
        .catch((err) => {
            // const requestError = err as AxiosError<iApiError>
            console.log(err)
            // toast.error(requestError.response?.data.message, {
            //     position: "top-right",
            //     autoClose: 2000,
            //     hideProgressBar: false,
            //     closeOnClick: true,
            //     pauseOnHover: true,
            //     draggable: true,
            //     progress: undefined,
            //     })
        })
    }

    return (
        <UserContext.Provider value={{
        userLogin,
        userRegister, 
        user,
        setCurrentRoute
        }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => useContext(UserContext)