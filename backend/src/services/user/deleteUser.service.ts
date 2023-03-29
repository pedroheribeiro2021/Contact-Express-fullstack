import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { User } from "../../entities/client.user.entity"


export const deleteUserService = async (id: string) => {

    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const user:any = await userRepository.findOneBy({
        id: id
    })

    await userRepository.softRemove(user)

    // if(!user.isActive) {
        
    //     throw new AppError('User is not active', 400)

    // } else {

    //     user.isActive = false
    
    //     await userRepository.save(user)
    
    //     return {}
    // }
    
}