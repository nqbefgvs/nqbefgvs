import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EntryPage} from "./entry/entry.page";
import {BookShelfPage} from "./book-shelf/book-shelf.page";
import {MyFormsPage} from "./my-forms/my-forms.page";

const routes: Routes = [
  { path: '', redirectTo: 'entry', pathMatch: 'full' },
  { path: 'entry', component: EntryPage },
  { path: 'book-shelf', component: BookShelfPage },
  { path: 'my-forms', component: MyFormsPage }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
