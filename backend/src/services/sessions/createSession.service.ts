import jwt from 'jsonwebtoken'
import { compare } from 'bcryptjs'
import { AppDataSource } from '../../data-source'
import { IUserLogin } from '../../interfaces/user.interface'
import { User } from '../../entities/client.user.entity'
import 'dotenv/config'
import { Repository } from 'typeorm'
import { AppError } from '../../errors/AppError'

export const createSessionService = async ({email, password}: IUserLogin): Promise<string> => {

    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const user: any = await userRepository.findOneBy({
        email: email
    })

    // if(!user.isActive) {
    //     throw new AppError('User is not active', 400)
    // }
    
    if(!user){
        throw new AppError('User or password invalid', 403)
    }

    const passwordMatch = compare(password, user.password)

    if(!passwordMatch){
        throw new AppError('User or password invalid', 403)
    }

    const token = jwt.sign(
        {
            email: user.email
        },
        process.env.SECRET_KEY!,
        {
            subject: String(user?.id), 
            expiresIn: '24h'
        }
    )

    return token
}