import { IBook, Book } from "../models/book.model";
import bookRepository from "../repositories/book.repository";
import dotenv from 'dotenv';

dotenv.config();

class BookService {

    getAll() {
        return bookRepository.getAll();
    }

    getByISBN(isbn: string) {
        return bookRepository.getByISBN(isbn);
    }

    async create(book: IBook) {
        return bookRepository.create(book);
    }

    remove(isbn: string) {
        if (!isbn) throw new Error('Livro não encontrado!');
        return bookRepository.remove(isbn);
    }

    update(isbn: string, book: Partial<IBook>) {
        return bookRepository.update(isbn, book);
    }
}

export default new BookService();