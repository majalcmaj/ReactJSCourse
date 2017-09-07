class Book {
    readonly title: String;
    readonly pagesCount: number;

    constructor(title: String, pagesCount: number) {
        this.title = title;
        this.pagesCount = pagesCount;
    }
}

export default Book;