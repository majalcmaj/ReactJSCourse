import Book from '../types/Book';
import {AnyAction, Reducer} from "redux";

export default function(state: any, action: AnyAction): Book[] {
    return [
        new Book("The Witcher", 350),
        new Book("Ruby. Receptures", 500),
        new Book("Android development", 100),
        new Book("Thinking in Java", 1200)
    ];
}