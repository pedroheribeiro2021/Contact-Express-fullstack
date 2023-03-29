import { Link } from "react-router-dom"
import { AiFillEye } from 'react-icons/ai';
import { useForm } from 'react-hook-form'
import { useContext } from "react";
import { UserContext } from "../../context/userContext";

interface iDataLogin {
    email: string;
    password: string;
}

export const Login = () => {

    // const { userLogin } = useContext(UserContext)

    // const {
    //     register,
    //     handleSubmit,
    //   } = useForm<iDataLogin>({
    //     resolver: yupResolver(formSchema),
    //   })

    // const submit = (data: iDataLogin) => {
    //     userLogin(data)
    // }

    return (
        <section>
            <form >
            <h3>Login</h3>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Digite seu E-mail"/>
                <label htmlFor="password">Senha</label>
                <input type="password" id="password" placeholder="Senha"/>
                <AiFillEye/>
                <button className='btn1' type="submit">Entrar</button>
                <span>Ainda não possui uma conta?</span>
                <Link to={'/register'} >Cadastre-se</Link>
            </form>
        </section>
    )
}
