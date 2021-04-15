import { Component, OnInit } from '@angular/core';
import {BookService} from '../../service/book.service';
import {ActivatedRoute, Router} from '@angular/router';
import {IBook} from '../../model/ibook';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.scss']
})
export class UpdateBookComponent implements OnInit {
  id: number;
  books: IBook[];
  book: IBook = {
    id:0,
    title: "",
    author: "",
    description: ""
  };

  constructor(private bookService: BookService, private router: Router,
              private activatedRoute: ActivatedRoute, private fb: FormBuilder) {
  }
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe( paramMap => {
      this.id = +paramMap.get("id");
      console.log(this.id);
      this.bookService.getBookById(this.id).subscribe(result => {
        this.book = result;
        console.log(this.book)
      }, error => {
        console.log(error)
      })
    })
  }

  editBook(){
      this.bookService.updateStudentForm(this.book.id,this.book).subscribe( result =>{
       alert("ok")
        this.router.navigate(['/']);
      });
  }
}
