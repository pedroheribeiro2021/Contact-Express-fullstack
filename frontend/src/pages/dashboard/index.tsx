import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ContactContext } from "../../context/contactContext";
import { RegisterContactSchema } from "../../validations";
import { useContext } from "react"
import { useHistory } from "react-router-dom";

interface iContactRegister {
    name: string;
    email: string;
    phone: string;
}

export const Dashboard = () => {

    const { user, setUser, contacts, contactRegister } = useContext(ContactContext)
 
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

    const history = useHistory()

    const logOut = () => {
        // setUser(null)
        localStorage.clear()
        history.push('/')
    }

    return (
        <section>
            <h2>Dashboard</h2>
            <button onClick={logOut}>Sair</button>
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
            <div>
                <h3>Olá, {user?.name} </h3>
            </div>
            <div>
                <h3>Contatos:</h3>
                <ul>
                    {
                        contacts.length ? (
                            contacts.map((contacts, i) =>
                            <li key={i} id={contacts.id}>
                                <h3>{contacts.name}</h3>
                                <h3>{contacts.email}</h3>
                                <h3>{contacts.phone}</h3>
                            </li>
                            )
                        ) : (
                            <li></li>
                        )
                    }
                </ul>
            </div>
        </section>
    )
}
