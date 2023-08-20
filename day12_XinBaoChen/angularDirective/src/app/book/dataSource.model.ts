import { Book } from "./book.model";

export class dataSource{
    private books:Book[]

    constructor(){
        this.books = new Array<Book>(
         new Book(1,'Awesome Kitchen', 'Megan Hall', 36),
         new Book(2,'General Science', 'Sherwin',110),
         new Book(3,"Hello from Planet Earth", 'Gusto', 16)
        )
    }
    getBooks():Book[]{
        return this.books
    }
}