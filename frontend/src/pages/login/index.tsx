import * as yup from 'yup'
import { api } from '../../services/api'
import { Link } from "react-router-dom"
import { AiFillEye } from 'react-icons/ai';
import { AiFillEyeInvisible } from 'react-icons/ai';
import { useForm } from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import { ReactNode, useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/userContext";
import { LoginPageStyle } from '../../styles/loginStyle'

interface iDataLogin {
    email: string;
    password: string;
}

interface iUser {
    id: string;
	name: string;
	email: string;
	contacts: iContact[];
}

interface iContact {
    id: string
    name: string;
    email: string;
    phone: string;
}

const formSchema = yup.object().shape({
    email: yup.string().required('E-mail obrigatório'),
    password: yup.string().required('Senha obrigatória')
})

export const Login = () => {

    const { userLogin } = useContext(UserContext)

    const {
        register,
        handleSubmit,
      } = useForm<iDataLogin>({
        resolver: yupResolver(formSchema),
      })

    const submit = (data: iDataLogin) => {
        userLogin(data)
    }

    const [loading, setLoading] = useState(false)
    const [contacts, setContacts] = useState ([] as iContact[])
    const [user, setUser] = useState<iUser | null>(null)
    
    // useEffect(() => {

    //     const getUser = async () => {

    //         const id = localStorage.getItem('@id')

    //         try {
    //             setLoading(true)
    //              const response = await api.get(`/user/${id}`)
    //             .then((resp:any) => {
    //                 setUser(resp.data)
    //                 setContacts(resp.data.contacts)
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
    // }, [])

    const [showPassword, setShowPassword] = useState(false)

    return (
        <LoginPageStyle>
            <form onSubmit={handleSubmit(submit)}>
            <h3 className='page-title'>Login</h3>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Digite seu E-mail"{...register('email')}/>
                <label htmlFor="password">Senha</label>
                {
                    showPassword === false ? (
                        <input type="password" id="password" placeholder="Senha"{...register('password')}/>
                    ) : (
                        <input type="text" id="password" placeholder="Senha"{...register('password')}/>
                    )
                }
                {
                    showPassword === false ? (
                        <AiFillEye className='eye' onClick={() => setShowPassword(true)}/>
                    ) : (
                        <AiFillEyeInvisible className='eye' onClick={() => setShowPassword(false)}/>
                    )
                }
                <button className='btn1' type="submit">Entrar</button>
                <span>Ainda não possui uma conta?</span>
                <Link to={'/register'} className='register-link'>Cadastre-se</Link>
            </form>
        </LoginPageStyle>
    )
}
