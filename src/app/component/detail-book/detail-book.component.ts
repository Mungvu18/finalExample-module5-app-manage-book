import { Component, OnInit } from '@angular/core';
import {BookService} from '../../service/book.service';
import {ActivatedRoute} from '@angular/router';
import {IBook} from '../../model/ibook';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-detail-book',
  templateUrl: './detail-book.component.html',
  styleUrls: ['./detail-book.component.scss']
})
export class DetailBookComponent implements OnInit {
  id:number;

  book: IBook ;
  constructor(private bookService: BookService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paraMap =>{
      this.id = +paraMap.get("id");
      this.bookService.getBookById(this.id).subscribe( result =>{
        this.book = result;
        console.log(this.book);
      });
    })
  }


}
