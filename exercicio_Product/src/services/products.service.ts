import { Product } from "../models/products.model";
import productRepository from "../repositories/product.repository";

class ProductsService {
    

    //GET (Buscar Produto)
    getAll(){
        return productRepository.getAll();
    }

  
    //POST (Criar Produto)
    create(product: typeof Product) {
        return productRepository.create(product);
    }

    //PUT (Atualizar Produto)    
    update(id: number, product: Partial<typeof Product>) {
        return productRepository.update(id, product);
    }

    //DELETE (Remover Produto)    
    remove(id: number) {
        return productRepository.remove(id);
    }


}

export default new ProductsService();
