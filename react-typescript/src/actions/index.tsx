import Book from "../types/Book";
import Action from "../types/Action";
import ActionType from "../types/ActionType";

export function selectBook(book: Book): Action<Book> {
    return { type: ActionType.BOOK_SELECTED, payload: book} as Action<Book>;
}