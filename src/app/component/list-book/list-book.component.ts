import { Component, OnInit } from '@angular/core';
import {BookService} from '../../service/book.service';
import {ActivatedRoute} from '@angular/router';
import {IBook} from '../../model/ibook';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.scss']
})
export class ListBookComponent implements OnInit {
  amountBook = 0;
  books: IBook[] = [];
  constructor(private bookService: BookService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // this.books = this.bookService.findAll();
    console.log(this.bookService.findAllB())
    this.bookService.findAllB().subscribe(result =>{
      this.books = result;
      this.amountBook = this.books.length;
      console.log(result);
    },error => {
      console.log(error) 
    })
  }

}
