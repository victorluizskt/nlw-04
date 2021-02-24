import {Request, Response} from 'express';
import {User} from '../models/User';
import {getRepository} from 'typeorm';

class UserController {
    async Create(request:Request, response:Response){
        const {name, email} = request.body;

        const usersRepository = getRepository(User);
        
        // SELECT * FROM USERS EMAIL = "EMAIL"
        const userAlreadyExists = await usersRepository.findOne({
            email
        });

        if(userAlreadyExists) {
            return response.status(400).json({
                error: "user already exists"
            })
        }

        const user = usersRepository.create({name, email});
        await usersRepository.save(user);

        return response.json(user);
    }
}

export {UserController};