import { Component, OnInit } from '@angular/core';
import {IBook} from '../../model/ibook';
import {BookService} from '../../service/book.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.scss']
})
export class DeleteBookComponent implements OnInit {
  id: number;
  book: IBook = {
    id: 0,
    title: "",
    author: "",
    description: ""
  };
  books: IBook[] = [];
  constructor(private bookService: BookService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paraMap =>{
      this.id = +paraMap.get("id");
      this.bookService.getBookById(this.id).subscribe(result =>{
        this.book = result;
      });
    })
  }
  deleteBook(){
    console.log(this.bookService.deleteStudentForm(this.id))
    this.bookService.deleteStudentForm(this.id).subscribe(next =>{
         this.router.navigate(["/"]);
         console.log(next.header);
         console.log(next.status);
    });
  }
}
