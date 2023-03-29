import { AppDataSource } from "../../data-source"
import { User } from "../../entities/client.user.entity"



export const listUsersServices = async (): Promise<User[]> => {

    const userRepository = AppDataSource.getRepository(User)
    
    const users = await userRepository.find()

    return users
}