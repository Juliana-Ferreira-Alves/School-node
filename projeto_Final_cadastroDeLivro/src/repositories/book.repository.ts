import { IBook, Book } from "../models/book.model";

class BookRepository {
    getAll() {
        return Book.find();
    }

    getByISBN(isbn: string) {
        return Book.findOne({ ISBN: isbn});
    }

    create(book: IBook){
        return Book.create(book);
    }

    update(isbn: string, book: Partial<IBook>){
        return Book.updateOne({ ISBN: isbn}, {$set: book});
    }

    remove(isbn: string){
        return Book.deleteOne({ISBN: isbn});
    }
}

export default new BookRepository();