import { AxiosError } from 'axios';
import { ReactNode, useContext, useEffect, useState } from 'react'
import { createContext } from 'react'
import { toast } from 'react-toastify';
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
    updateContacts: (id: string, data: iUpdate) => void;
    removeContacts: (id: string) => void;
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

interface iUpdate {
    name: string;
    email: string;
    phone: string;
}


export const ContactContext = createContext<iContactContext>({} as iContactContext)

export const ContactProvider = ({children}: iContactProps) => {

    const [contacts, setContacts] = useState ([] as iContact[])
    const [user, setUser] = useState<iUser | null>(null)
    
    useEffect(() => {

        const getUser = async () => {

            const id = localStorage.getItem('@id')

            try {
                 const response = await api.get(`/user/${id}`)
                .then((resp:any) => {
                    setUser(resp.data)
                    setContacts(resp.data.contacts)
                })
                return response
            } catch (error) {
                console.log(error)
            }
        }
        getUser()
    }, [])

    const contactRegister = (data: iContactRegister) => {

        const token = localStorage.getItem('@token')

        try {
           api.post(`/contact`, data, {
            headers: {Authorization:'Bearer ' + token}
           })
           .then((resp) => {
               setContacts(resp.data)
               toast.success('Cadastro incluído com sucesso!')
                window.location.reload()
        })
        } catch (error) {
            const requestError = error as AxiosError<iApiError>
            console.log(error)
            toast.error(requestError.response?.data.message)
        }
    }

    const updateContacts = async (id: string, data: iUpdate) => {

        const token = localStorage.getItem('@token')

        try {
            await api.put(`/contact/${id}`, data, {
                headers: {Authorization:'Bearer ' + token}
            })
            .then((resp: any) => console.log(resp))
        } catch (error) {
            console.log(error)
        }
    }

    const removeContacts = async (id: string) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const contactsDelete = contacts.filter(contact => contact.id !== id)

        const token = localStorage.getItem('@token')

        await api.delete(`/contact/${id}`, {
            headers: {Authorization:'Bearer ' + token}
        })

        window.location.reload()
    }

    return (
        <ContactContext.Provider value={{
            user,
            setUser, 
            contacts,
            contactRegister,
            updateContacts,
            removeContacts
            }}>
                {children}
        </ContactContext.Provider>
    )

}

export const useContactContext = () => useContext(ContactContext)