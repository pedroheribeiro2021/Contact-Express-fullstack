import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Contact } from "../../entities/contact.user.entity"


export const deleteContactsService = async (id: string) => {

    const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact)

    const contact:any = await contactRepository.findOneBy({
        id: id
    })

    await contactRepository.softRemove(contact)

    // if(!user.isActive) {
        
    //     throw new AppError('User is not active', 400)

    // } else {

    //     user.isActive = false
    
    //     await userRepository.save(user)
    
    //     return {}
    // }
    
}