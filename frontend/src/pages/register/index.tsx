import { Link } from "react-router-dom"
import { RegisterUserSchema } from "../../validations"
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import { useContext } from "react";
import { UserContext } from "../../context/userContext";

interface iDataRegister {
    name: string;
    email: string;
    password: string;
    passwordConfirm: string;
    phone: string;
}

export const Register = () => {

    const { userRegister } = useContext(UserContext)

    const {
        register, 
        handleSubmit,
        formState: {errors},
    } = useForm<iDataRegister>({
        resolver: yupResolver(RegisterUserSchema)
    })

    const submit = async (data: iDataRegister) => {
        userRegister(data)
    }

    return (
        <section>
            <div>
                <h2>Seja bem vindo(a)!</h2>
                <Link to={'..'}>Voltar</Link>
            </div>
            <form onSubmit={handleSubmit(submit)}>
                <h3>Crie sua conta</h3>
                <span>Rápido e gráits, vamos nessa?!</span>            
                <label htmlFor="name">Nome</label>
                <input type="text" id="name" placeholder="Digite aqui seu nome" {...register('name')} />
                <p>{errors.name?.message}</p>
                <label htmlFor="">Email</label>
                <input type="email" id="email" placeholder="Digite aqui seu Email" {...register('email')} />
                <p>{errors.email?.message}</p>
                <label htmlFor="password">Senha</label>
                <input type="password" id="password" placeholder="Digite aqui seu Senha" {...register('password')} />
                <p>{errors.password?.message}</p>
                <label htmlFor="passwordConfirm">Confirmar senha</label>
                <input type="password" name="passwordConfirm" id="passwordConfirm" placeholder="Digite aqui seu senha" />
                <p>{errors.passwordConfirm?.message}</p>
                <label htmlFor="phone">Contato</label>
                <input type="tel" id="phone" placeholder="Digite aqui seu telefone" {...register('phone')} />
                <p>{errors.phone?.message}</p>
                <button type='submit'>Cadastrar</button>
            </form>
        </section>
    )
}