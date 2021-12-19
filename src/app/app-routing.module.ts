import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EntryPage} from "./entry/entry.page";
import {BookShelfPage} from "./book-shelf/book-shelf.page";
import {MyFormsPage} from "./my-forms/my-forms.page";
import {ZooPage} from "./zoo/zoo.page";
import {Form1Component} from "./my-forms/form1/form1.component";
import {Form2Component} from "./my-forms/form2/form2.component";
import {MyChartsPage} from "./my-charts/my-charts.page";
import {AgricultureProvideComponent} from "./my-charts/agriculture-provide/agriculture-provide.component";
import {TaxStructureComponent} from "./my-charts/tax-structure/tax-structure.component";

const routes: Routes = [
  { path: '', redirectTo: 'entry', pathMatch: 'full' },
  { path: 'entry', component: EntryPage },
  { path: 'book-shelf', component: BookShelfPage },
  {
    path: 'my-forms',
    component: MyFormsPage,
    children: [
      {
        path: '',
        redirectTo: 'form1',
        pathMatch: 'full'
      },
      {
        path: 'form1',
        component: Form1Component
      },
      {
        path: 'form2',
        component: Form2Component
      }
    ]
  },
  { path: 'zoo', component: ZooPage },
  {
    path: 'my-charts',
    component: MyChartsPage,
    children: [
      {
        path: '',
        redirectTo: 'agriculture-provide',
        pathMatch: 'full'
      },
      {
        path: 'agriculture-provide',
        component: AgricultureProvideComponent
      },
      {
        path: 'tax-structure',
        component: TaxStructureComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
