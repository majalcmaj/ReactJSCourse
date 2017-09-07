import * as React from "react";
import BookList from "../containers/book-list";
import BookDetail from "../containers/book-detail";

class Hello extends React.Component<null, object> {
    render() {
        return (
            <div>
                <BookList/>
                <BookDetail/>
            </div>
        );
    }
}

export default Hello;
