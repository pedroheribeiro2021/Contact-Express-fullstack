import { AppDataSource } from "../../data-source"
import { Contact } from "../../entities/contact.user.entity"
import { IContactUpdate } from "../../interfaces/contact.interface"


export const updateContactService = async(contactData: IContactUpdate, contactId: string) => {

    const contacRepository = AppDataSource.getRepository(Contact)

    const findContact = await contacRepository.findOneBy({
        id: contactId
    })

    const updatedContact = contacRepository.create({
        ...findContact,
        ...contactData
    })
    
    await contacRepository.save(updatedContact)

    // const userWithoutPassword = await userWithoutPasswordSerializer.validate(updatedUser, {
    //     stripUnknown: true
    // })

    return updatedContact
}