import { AxiosError } from 'axios';
import { AnyARecord } from 'dns';
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

interface iContactRegister {
    name: string;
    email: string;
    phone: string;
}
interface iContactContext {
    user: iUser | null;
    setUser: React.Dispatch<React.SetStateAction<iUser | null>>;
    contacts: iContact[];
    contactRegister: (data: iContactRegister) => void;
    // updateTechs: (id: string, data: iUpdate) => void;
    // getUser: () => void;
    // removeTechs: (id: string) => void;
}

interface iContact {
    id: string
    name: string;
    email: string;
    phone: string;
}

interface iUser {
    id: string;
	name: string;
	email: string;
	contacts: iContact[];
    
}

// interface iUpdate {
//     status: string;
// }


export const ContactContext = createContext<iContactContext>({} as iContactContext)

export const ContactProvider = ({children}: iContactProps) => {

    const [loading, setLoading] = useState(false)
    const [contacts, setContacts] = useState ([] as iContact[])
    const [user, setUser] = useState<iUser | null>(null)
    
    useEffect(() => {

        const getUser = async () => {

            const id = localStorage.getItem('@id')

            try {
                setLoading(true)
                 const response = await api.get(`/user/${id}`)
                .then((resp) => {
                    setUser(resp.data)
                    setContacts(resp.data.contacts)
                    console.log(user)
                })
                return response
            } catch (error) {
                console.log(error)
            }
            finally {
                setLoading(false)  
            }
        }
        getUser()
    }, [contacts])

    const contactRegister = (data: iContactRegister) => {

        const token = localStorage.getItem('@token')

        try {
           api.post(`/contact`, data, {
            headers: {Authorization:'Bearer ' + token}
           })
           .then((resp:any) => {
            console.log(resp)
            setContacts(resp.data)
            const newData = [...contacts,{
                id: resp.data.id,
                name: resp.data.name,
                email: resp.data.email,
                phone: resp.data.phone,
            //     created_at: resp.data.created_at,
            //     updated_at: resp.data.update_at,
            //     user: {
            //         id: resp.data.user.id,
                // }
            }]
            // setContacts(newData)
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
            user,
            setUser, 
            contacts,
            contactRegister,
            // updateTechs,
            // getUser,
            // removeTechs
            }}>
                {children}
        </ContactContext.Provider>
    )

}

export const useContactContext = () => useContext(ContactContext)