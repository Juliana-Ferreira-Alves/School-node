import { Schema } from "mongoose";
import mongoose from "mongoose";

export interface IProduct{
    name: string;
    email: string;
    document: string;
    password: string;
    id: number;
    description: string;
    img: string;
    price: number;
    quantity: number;
    createdAt: string | Date

}

export const productSchema = new Schema <IProduct> ({
    name: {
        type: String
    },
    email: {
        type: String
    },
    document: {
        type: String
    },
    password: {
        type: String
    },
    id: {
        type: Number
    },
    description: {
        type: String
    },
    img:  {
        type: String
    },
    price: {
        type: Number
    },
    quantity: {
        type: Number
    },
    createdAt: {
        type: Date, 
        default: new Date ()
    }
});

export const Product = mongoose.model <IProduct> ('Product', productSchema);

