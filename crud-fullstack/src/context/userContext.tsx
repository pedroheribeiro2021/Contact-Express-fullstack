import { createContext, ReactNode } from "react";

interface iUserProps {
    children: ReactNode;
}

interface iDataRegister {
    name: string;
    email: string;
    password: string;
    contact: string;
}

export interface iUserContext {
    // user: iUser | null;
    // setCurrentRoute: React.Dispatch<SetStateAction<string | null>>;
    // userLogin: (data: iDataLogin) => void;
    userRegister: (data: iDataRegister) => void;
}

export const UserContext = createContext<iUserContext>({} as iUserContext)

export const UserProvider = ({children}: iUserProps) => {

    const userRegister = async(data: iDataRegister) => {

        // await api.post(`/users`, data)
        // .then((resp) => {
        //     console.log(resp)
        //     toast.success('Cadastro efetuado com sucesso!', {
        //         position: "top-right",
        //         autoClose: 2000,
        //         hideProgressBar: false,
        //         closeOnClick: true,
        //         pauseOnHover: true,
        //         draggable: true,
        //         progress: undefined,
        //     })
        //     navigate('/')
        // })
        // .catch((err) => {
        //     const requestError = err as AxiosError<iApiError>
        //     console.log(err)
        //     toast.error(requestError.response?.data.message, {
        //         position: "top-right",
        //         autoClose: 2000,
        //         hideProgressBar: false,
        //         closeOnClick: true,
        //         pauseOnHover: true,
        //         draggable: true,
        //         progress: undefined,
        //         })
        // })
    }

    return (
        <UserContext.Provider value={{
        // userLogin,
        userRegister, 
        // user,
        // setCurrentRoute
        }}>
            {children}
        </UserContext.Provider>
    )
}

// export const useUserContext = () => useContext(UserContext)