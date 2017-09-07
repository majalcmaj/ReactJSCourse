import * as React from 'react';
import Book from "../types/Book";
import {bindActionCreators, Reducer} from "redux";
import Action from '../types/Action';
import {connect, Dispatch} from "react-redux";
import {selectBook} from "../actions/index";
import {ReactText} from "react";

export interface Props {
    books: Book[];
    selectBook: (book: Book) => Action<Book>;
}

class BookList extends React.Component<Props, object> {

    renderList(): JSX.Element[] {
        return this.props.books.map((book: Book) => {
            return (
                <li key={book.title as ReactText}
                    onClick={() => this.selectBook(book)}
                    className="list-group-item">
                    {book.title}
                </li>
            );
        })
    }

    selectBook(book: Book): void {
        this.props.selectBook(book)
    }

    render(): JSX.Element {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
}

function mapStateToProps(state: any) {
    return {
        books: state.books
    };
}

function mapDispatchToProps(dispatch: Dispatch<Action<Book>>) {
    return bindActionCreators({selectBook: selectBook}, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(BookList);