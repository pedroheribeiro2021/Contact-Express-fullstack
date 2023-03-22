import { AppDataSource } from "../../data-source"
import { User } from "../../entities/client.user.entity"
import { IUser, IUserUpdate } from "../../interfaces/user.interface"
import { userWithoutPasswordSerializer } from "../../schemas/user.serializer"


export const updateUserService = async(userData: IUserUpdate, userId: string): Promise<IUser> => {

    const userRepository = AppDataSource.getRepository(User)

    const findUser = await userRepository.findOneBy({
        id: userId
    })

    const updatedUser = userRepository.create({
        ...findUser,
        ...userData
    })
    
    await userRepository.save(updatedUser)

    const userWithoutPassword = await userWithoutPasswordSerializer.validate(updatedUser, {
        stripUnknown: true
    })

    return userWithoutPassword
}