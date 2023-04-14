import { IProduct, Product } from "../models/products.model";
import productRepository from "../repositories/product.repository";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';

dotenv.config();

const secretJWT = process.env.JWT_SECRET_KEY || "";

class ProductsService {
    

    //GET (Buscar Produto)
    getAll(){
        return productRepository.getAll();
    }

    getById(id: number) {
        return productRepository.getById(id);
    }

  
    //POST (Criar Produto)
    async create(product: IProduct) {
        if(product.password){
            product.password = await bcrypt.hash(product.password, 10);
        }
        return productRepository.create(product);
    }

    async authorization(id: number, password: string){
        const product = await productRepository.getById(id);

        if(!product) throw new Error ('Produto não encontrato!');

        const result = await bcrypt.compare(password, product.password);
        //console.log(result)

        if (result) {
            return jwt.sign({ id: product.id, _id: product._id}, secretJWT, {
                expiresIn: '1h'
            });
        };

        throw new Error('Falha na autenticação!');
    }

    //PUT (Atualizar Produto)    
    update(id: number, product: Partial<IProduct>) {
        return productRepository.update(id, product);
    }

    //DELETE (Remover Produto)    
    remove(id: number) {
        return productRepository.remove(id);
    }


}

export default new ProductsService();
