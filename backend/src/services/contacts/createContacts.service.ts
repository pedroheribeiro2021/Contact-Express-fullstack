import { AppDataSource } from "../../data-source"
import { User } from "../../entities/client.user.entity"
import { Contact } from "../../entities/contact.user.entity"
import { IContactRequest } from "../../interfaces/contact.interface"


export const createContactsService = async(data:IContactRequest, userId: string) => {

    const contactsRepository = AppDataSource.getRepository(Contact)

    const usersRepository = AppDataSource.getRepository(User)

    const user: any = await usersRepository.findOneBy({
        id: userId
    })

    const contact = contactsRepository.create({
        name: data.name,
        email: data.email,
        user: user,
    })

    await contactsRepository.save(
        contact
    )

    return contact
}