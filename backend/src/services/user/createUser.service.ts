import { AppDataSource } from "../../data-source"
import { User } from "../../entities/client.user.entity"
import { IUser, IUserRequest } from "../../interfaces/user.interface"
import { userSerializer, userWithoutPasswordSerializer } from "../../schemas/user.serializer"


export const createUserService = async (userData: IUserRequest): Promise<IUser> => {
    const userRepository = AppDataSource.getRepository(User)

    const createUser = userRepository.create(userData)

    await userRepository.save(createUser)

    const user = userWithoutPasswordSerializer.validate(createUser, {
        stripUnknown: true
    })

    return user
}