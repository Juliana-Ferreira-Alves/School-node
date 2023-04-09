import { Product } from "../models/products.model";

class ProductRepository {
    getAll() {
        return Product.find();
    }

    create(product: typeof Product){
        return Product.create(product);
    }

    update(id: number, product: Partial<typeof Product>){
        return Product.updateOne({ id: id }, {$set: product});
    }

    remove(id: number){
        return Product.deleteOne({ id: id});
    }
}

export default new ProductRepository();
