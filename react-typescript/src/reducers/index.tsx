import {combineReducers, ReducersMapObject} from 'redux';
import BooksReducer from './reducer-books';
import ActiveBooksReducer from './reducer-active-book';


const reducer = combineReducers({
    books: BooksReducer,
    activeBook: ActiveBooksReducer
});

export default reducer;