import ActionType from "../types/ActionType";
import Book from "../types/Book";
import {Reducer} from "redux";
import Action from "../types/Action";

const ActiveBooksReducer: Reducer<Book> = function(state: Book=null, action: Action<Book>): Book {
    switch(action.type) {
        case ActionType.BOOK_SELECTED: {
            return action.payload;
        }
        default: {
            return state;
        }
    }
};

export default ActiveBooksReducer;