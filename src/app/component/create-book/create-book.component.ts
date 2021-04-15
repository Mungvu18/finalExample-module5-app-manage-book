import { Component, OnInit } from '@angular/core';
import {BookService} from '../../service/book.service';
import {IBook} from '../../model/ibook';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent implements OnInit {
  book: IBook = {
    id: 0,
    title: "",
    author: "",
    description: ""
  };
  books: IBook[] = []
  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
  }
  createBook(){
    this.bookService.createStudentForm(this.book).subscribe(()=>{
      console.log(this.books);
      this.router.navigate(['/']);
      console.log("ok");
    });
  }
}
