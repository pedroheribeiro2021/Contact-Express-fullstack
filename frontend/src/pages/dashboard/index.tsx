import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { RegisterContactSchema } from "../../validations";

interface iContactRegister {
    name: string;
    email: string;
    phone: string;
}

export const Dashboard = () => {

    const {
        register, 
        handleSubmit,
        formState: {errors},
    } = useForm<iContactRegister>({
        resolver: yupResolver(RegisterContactSchema)
    })

    const submit = async (data: iContactRegister) => {
        contactRegister(data)
        // console.log(data)
    }

    return (
        <section>
            <h2>Dashboard</h2>
        <form onSubmit={handleSubmit(submit)}>
                <h3>Cadastre seu contato</h3>        
                <label htmlFor="name">Nome</label>
                <input type="text" id="name" placeholder="Digite aqui o nome do contato" {...register('name')} />
                <p>{errors.name?.message}</p>
                <label htmlFor="">Email</label>
                <input type="email" id="email" placeholder="Digite aqui o E-mail do contato" {...register('email')} />
                <p>{errors.email?.message}</p>
                <label htmlFor="phone">Contato</label>
                <input type="tel" id="phone" placeholder="Digite aqui o telefone do seu contato com DDD e número" {...register('phone')} />
                <p>{errors.phone?.message}</p>
                <button type='submit'>Cadastrar</button>
            </form>
        </section>
    )
}

function contactRegister(data: iContactRegister) {
    throw new Error("Function not implemented.");
}
