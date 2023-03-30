import { AxiosError } from "axios";
import { createContext, ReactNode, SetStateAction, useContext, useState } from "react";
import { api } from "../services/api";
import { useHistory } from "react-router-dom"
import { toast } from 'react-toastify';

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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [currentRoute, setCurrentRoute] = useState<string | null>(null)

    const history = useHistory()

    const userLogin = (data: iDataLogin) => {

        api.post(`/login `, data)
        .then((resp: { data: { user: SetStateAction<iUser | null>; token: string; id: string; }; }) => {
            setUser(resp.data.user)
            localStorage.setItem('@token', resp.data.token)
            localStorage.setItem('@id', resp.data.id)
            history.push('/dashboard')
            toast.success('Login efetuado com sucesso!')
        })
        .catch((err) => {
            console.log(err)
            toast.error('Erro de credenciais!')
        })
    }

    const userRegister = async(data: iDataRegister) => {

        await api.post(`/user`, data)
        .then((resp) => {
            console.log(resp)
            toast.success('Cadastro efetuado com sucesso!')
            history.push('/')
        })
        .catch((err: AxiosError<iApiError, any>) => {
            const requestError = err as AxiosError<iApiError>
            console.log(err)
            toast.error(requestError.response?.data.message)
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