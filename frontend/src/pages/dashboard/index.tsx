import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ContactContext } from "../../context/contactContext";
import { RegisterContactSchema } from "../../validations";
import { useContext, useState } from "react"
import { useHistory } from "react-router-dom";
import { FaTrash } from 'react-icons/fa';
import { AiFillEdit } from 'react-icons/ai';
import ReactModal from "react-modal"
import { toast } from 'react-toastify';
import { DashboardStyle } from '../../styles/dashboardStyle'
import { BsPersonFillAdd } from 'react-icons/bs';



interface iContactRegister {
    name: string;
    email: string;
    phone: string;
}

export const Dashboard = () => {

    const { user, setUser, contacts, contactRegister, removeContacts, updateContacts, contact, setContact } = useContext(ContactContext)

    const {
        register, 
        handleSubmit,
        formState: {errors},
    } = useForm<iContactRegister>({
        resolver: yupResolver(RegisterContactSchema)
    })

    const submit = async (data: iContactRegister) => {
        contactRegister(data)
    }

    const history = useHistory()

    const [registerModalIsOpen, setRegisterModalIsOpen] = useState(false)

    const openRegisterModal = () => setRegisterModalIsOpen(true)
    
    const closeRegisterModal = () => setRegisterModalIsOpen(false)

    const [idState, setIdstate] = useState<string | null>()
    
    const [updateModalIsOpen, setUpdateModalIsOpen] = useState(false)

    const openUpdateModal = () => setUpdateModalIsOpen(true)

    const closeUpdateModal = () => setUpdateModalIsOpen(false)

    const updateSubmit = async (data: iContactRegister) => {
        console.log(data)
        updateContacts(data)
    }

    const logOut = () => {
        setUser(null)
        localStorage.clear()
        toast('bye bye!')
        history.push('/')
    }

    const teste = (cont:any) => {
        setUpdateModalIsOpen(true)
        setContact(cont)
    }

    return (
        <DashboardStyle>
            <button onClick={logOut} className='logout'>Sair</button>
            <BsPersonFillAdd className="add-icon" onClick={() => setRegisterModalIsOpen(true)}/>
            <ReactModal
                isOpen={registerModalIsOpen}
                onRequestClose={closeRegisterModal}
                overlayClassName="modal-overlay"
                className="modal-content"
            >
            <form onSubmit={handleSubmit(submit)} className='register-form'>
                <div>
                    <h3>Cadastre seu contato</h3>
                    <span onClick={closeRegisterModal} > X </span>  
                </div>
                <label htmlFor="name">Nome</label>
                <input type="text" id="name" placeholder="Digite aqui o nome do contato" {...register('name')} />
                <p>{errors.name?.message}</p>
                <label htmlFor="">Email</label>
                <input type="email" id="email" placeholder="Digite aqui o E-mail do contato" {...register('email')} />
                <p>{errors.email?.message}</p>
                <label htmlFor="phone">Contato</label>
                <input type="tel" id="phone" placeholder="Digite aqui o telefone do seu contato com DDD" {...register('phone')} />
                <p>{errors.phone?.message}</p>
                <button type='submit'>Cadastrar</button>
            </form>
            </ReactModal>
            <div className="apresentation">
                <h3>Olá, {user?.name} </h3>
            </div>
            <div className="contacts">
                <h3 className="contacts-title">Aqui estão seus contatos:</h3>
                <ul>
                    {
                            contacts.length ? (
                                contacts.map((contacts, i) =>
                                <li key={i} id={contacts.id}>
                                    <h3>{contacts.name}</h3>
                                    <h3>{contacts.email}</h3>
                                    <h3>{contacts.phone}</h3>
                                    <FaTrash className="icon" onClick={() => removeContacts(contacts.id)}/>
                                    <AiFillEdit className="icon" onClick={() => teste(contacts)}/>
                                </li>
                            )
                        ) : (
                            <h3 className="empty-list">Sua lista de contatos está vazia! :( </h3>
                        )
                    }
                </ul>
            </div>
            <ReactModal
                        isOpen={updateModalIsOpen}
                        onRequestClose={closeUpdateModal}
                        overlayClassName="modal-overlay"
                        className="modal-content"
            >
                <div>
                    <form className='register-form' onSubmit={handleSubmit(updateSubmit)}>
                        <div className="head">
                            <h3>Atualizar contatos</h3>
                            <span onClick={closeUpdateModal} > X </span>
                        </div>
                        <label htmlFor="name">Nome</label>
                        <input type="text" id="name" {...register('name')} />
                        <p>{errors.name?.message}</p>
                        <label htmlFor="">Email</label>
                        <input type="email" id="email" placeholder="Digite aqui o E-mail do contato" {...register('email')} />
                        <p>{errors.email?.message}</p>
                        <label htmlFor="phone">Contato</label>
                        <input type="tel" id="phone" placeholder="Digite aqui o telefone do seu contato com DDD" {...register('phone')} />
                        <p>{errors.phone?.message}</p>
                        <button onClick={closeUpdateModal} >Atualizar</button>
                    </form>
                </div>
            </ReactModal>
        </DashboardStyle>
    )
}
