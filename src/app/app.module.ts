import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListBookComponent } from './component/list-book/list-book.component';
import { DetailBookComponent } from './component/detail-book/detail-book.component';
import { CreateBookComponent } from './component/create-book/create-book.component';
import { UpdateBookComponent } from './component/update-book/update-book.component';
import { DeleteBookComponent } from './component/delete-book/delete-book.component';
import {BookRoutingModule} from './component/book-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListBookComponent,
    DetailBookComponent,
    CreateBookComponent,
    UpdateBookComponent,
    DeleteBookComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BookRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
