import { Schema } from "mongoose";
import mongoose from "mongoose";

export interface IBook {
    ISBN: string;
    title: string;
    author: string;
    gender: string;
    publisher: string;
    ageRating: number;
    createdAt: string | Date
}

export const bookSchema = new Schema<IBook>({
    ISBN: {
        type: String
    },
    title: {
        type: String
    },
    author: {
        type: String
    },
    gender: {
        type: String
    },
    publisher: {
        type: String
    },
    ageRating: {
        type: Number
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

export const Book = mongoose.model <IBook> ('Book', bookSchema);