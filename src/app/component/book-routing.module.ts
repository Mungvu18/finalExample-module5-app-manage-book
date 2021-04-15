import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ListBookComponent} from './list-book/list-book.component';
import {DeleteBookComponent} from './delete-book/delete-book.component';
import {UpdateBookComponent} from './update-book/update-book.component';
import {CreateBookComponent} from './create-book/create-book.component';
import {DetailBookComponent} from './detail-book/detail-book.component';

const routes: Routes = [
  {path:'', pathMatch:'full',redirectTo:'books'},
  { path:'books', component: ListBookComponent},
  { path: 'delete-book/:id', component: DeleteBookComponent},
  { path: 'update-book/:id', component: UpdateBookComponent},
  { path: 'create-book', component: CreateBookComponent},
  { path: 'detail-book/:id', component: DetailBookComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class BookRoutingModule { }
