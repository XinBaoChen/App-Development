import { Component } from '@angular/core';
import { BookRepository } from './repsitory.model';
import { Book } from './book.model';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
 model:BookRepository = new BookRepository()
 books: any

 addBook(){
  this.model.addBook(new Book(4,"bokd","Smith",47))
 }
 deleteBook(book:Book){
  this.model.deleteBook(book)
 }
 updateName(book:Book){
  book.name = "Updated Name"
 }
 updatePrice(book:Book){
  book.price = 77
 }
}
