import { AppDataSource } from "../../data-source"
import { User } from "../../entities/client.user.entity"



export const listUsersServices = async (): Promise<any> => {

    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.find({
        relations: {
            contacts: true
        }
    })

    return user
}