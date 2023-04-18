import { IUser, User } from "../models/user.model";
import userRepository from "../repositories/user.repository";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';

dotenv.config();

const secretJWT = process.env.JWT_SECRET_KEY || "";


class UserService {
    
    getAll() {
        return userRepository.getAll();
    }

    getByDocument(document: string) {
        return userRepository.getByDocument(document);
    }

    async create(user: IUser) {
        if(user.password){
            user.password = await bcrypt.hash(user.password, 10);
        }
        return userRepository.create(user);
    }

    async authorization(document: string, password: string) {
        const user = await userRepository.getByDocument(document);

        if (!user) throw new Error('Usuário não encontrado!');

        const result = await bcrypt.compare(password, user.password);
       
        //console.log(result);

        if (result) {
            return jwt.sign ({document: user.document, _id: user._id}, secretJWT, {
                expiresIn: '1h'
            
                
            });
            
        };
       
        throw new Error('Falha na autenticação!');
    }

    remove(document: string) {
        console.log(document);
        if (!document) throw new Error('Usuário não encontrado!');
        
        return userRepository.remove(document);
    }

    async update(document: string, user: Partial<IUser>) {
        if(user.password){
            user.password = await bcrypt.hash(user.password, 10);
        }
        return userRepository.update(document, user);
    }
}

export default new UserService();