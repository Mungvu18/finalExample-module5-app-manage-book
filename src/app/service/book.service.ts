import { Injectable } from '@angular/core';
import {IBook} from '../model/ibook';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
const API_URL = 'http://localhost:3000/books';
@Injectable({
  providedIn: 'root'
})
export class BookService {
  books: IBook[] = []
  constructor(private httpClient: HttpClient) { }
  findAllB(): Observable<IBook[]> {
    return this.httpClient.get<IBook[]>(API_URL);
  }

  getBookById(id: number): Observable<IBook>{
   return  this.httpClient.get<IBook>(API_URL+`/${id}`);
  }

  deleteStudentForm(index: number): Observable<any> {
   return  this.httpClient.delete(API_URL+ `/${index}`, {observe: 'response'});
  }
  createStudentForm(book: IBook): Observable<IBook> {
    return this.httpClient.post<IBook>(API_URL,book);
  }

  updateStudentForm(index: number, book: IBook) : Observable<IBook>{
   return  this.httpClient.put<IBook>(API_URL + `/${index}`, book);
  }
}
