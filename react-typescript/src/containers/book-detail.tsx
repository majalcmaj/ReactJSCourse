import * as React from 'react';
import Book from "../types/Book";
import {connect} from "react-redux";

interface BookDetailProps {
    book: Book
}

class BookDetail extends React.Component<BookDetailProps> {
    render(): JSX.Element {
        if(!this.props.book) {
            return <div>Select a book to get started.</div>;
        }
        return (
            <div>
                <h3>Details</h3>
                <div>Title: {this.props.book.title}</div>
                <div>pages count: {this.props.book.pagesCount}</div>
            </div>
        );
    }
}

function mapStateToProps(state: any): BookDetailProps {
    return {
        book: state.activeBook
    }
}

export default connect(mapStateToProps)(BookDetail);