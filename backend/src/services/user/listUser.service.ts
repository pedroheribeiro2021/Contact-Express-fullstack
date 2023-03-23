import { AppDataSource } from "../../data-source"
import { User } from "../../entities/client.user.entity"



export const listUsersServices = async (userId: string): Promise<any> => {

    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.find({
        where: {
            id: userId
        },
        relations: {
            contacts: true
        }
    })

    return user
}