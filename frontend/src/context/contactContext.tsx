import { AxiosError } from 'axios';
import { ReactNode, useContext, useEffect, useState } from 'react'
import { createContext } from 'react'
// import { toast } from 'react-toastify';
import { api } from '../services/api'

interface iApiError {
    message: string;
}

interface iContactProps {
    children: ReactNode;
}

interface iDataTech {
    title: string;
    status: string;
}

interface iContactContext {
    // user: iUser | null;
    // setUser: React.Dispatch<React.SetStateAction<iUser | null>>;
    // techs: iTechs[];
    contactRegister: (data: iDataTech) => void;
    // updateTechs: (id: string, data: iUpdate) => void;
    // getUser: () => void;
    // removeTechs: (id: string) => void;
}

// interface iTechs {
//     id: string;
//     title: string;
//     status: string;
//     created_at: string;
//     updated_at: string;
//     user: {
//         id: string
//     }
// }

// interface iUser {
//     id: string,
// 	name: string,
// 	email: string,
// 	course_module: string,
// 	bio: string,
// 	contact: string,
// 	techs: [],
// 	works: [],
// }

// interface iUpdate {
//     status: string;
// }


export const ContactContext = createContext<iContactContext>({} as iContactContext)

export const ContactProvider = ({children}: iContactProps) => {

    // const [loading, setLoading] = useState(false)
    // const [techs, setTechs] = useState /* <iTechs[]> */ ([] as iTechs[])
    // const [user, setUser] = useState<iUser | null>(null)
    
    // useEffect(() => {

    //     const getUser = async () => {

    //         const id = localStorage.getItem('@id')

    //         try {
    //             setLoading(true)
    //              const response = await api.get(`/users/${id}`)
    //             .then((resp) => {
    //                 setUser(resp.data)
    //                 setTechs(resp.data.techs)
    //                 // console.log(user)
    //             })
    //             return response
    //         } catch (error) {
    //             console.log(error)
    //         }
    //         finally {
    //             setLoading(false)  
    //         }
    //     }
    //     getUser()
    // }, [techs])

    const contactRegister = (data: iDataTech) => {

        const token = localStorage.getItem('@token')

        try {
           api.post(`/contact`, data, {
            headers: {Authorization:'Bearer ' + token}
           })
           .then((resp) => {
            console.log(data)
            // setTechs(resp.data)
            // const newData = [...techs,{
            //     id: resp.data.id,
            //     title: resp.data.title,
            //     status: resp.data.status,
            //     created_at: resp.data.created_at,
            //     updated_at: resp.data.update_at,
            //     user: {
            //         id: resp.data.user.id,
            //     }
            // }]
            // setTechs(newData)
        })
        } catch (error) {
            // const requestError = error as AxiosError<iApiError>
            console.log(error)
            // toast.error(requestError.response?.data.message, {
            //     position: "top-right",
            //     autoClose: 2000,
            //     hideProgressBar: false,
            //     closeOnClick: true,
            //     pauseOnHover: true,
            //     draggable: true,
            //     progress: undefined,
            // })
        }
    }

    // const updateTechs = async (id: string, data: iUpdate) => {

    //     const token = localStorage.getItem('@token')

    //     try {
    //         await api.put(`/users/techs/${id}`, data, {
    //             headers: {Authorization:'Bearer ' + token}
    //         })
    //         .then((resp) => console.log(resp))
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    // const removeTechs = async (id: string) => {
    //     const techDelete = techs.filter(tech => tech.id !== id)

    //     const token = localStorage.getItem('@token')

    //     await api.delete(`/users/techs/${id}`, {
    //         headers: {Authorization:'Bearer ' + token}
    //     })
    // }

    return (
        <ContactContext.Provider value={{
            // user,
            // setUser, 
            // techs,
            contactRegister
            // updateTechs,
            // getUser,
            // removeTechs
            }}>
                {children}
        </ContactContext.Provider>
    )

}

export const useContactContext = () => useContext(ContactContext)