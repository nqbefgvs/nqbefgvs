import {NgModule} from "@angular/core";
import {MyFormsPage} from "./my-forms.page";
import {ClientCommonModule} from "../client-common/client-common.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {Form1Component} from "./form1/form1.component";
import {
  ForbiddenValidatorDirective,
  Form2Component,
  IdentityRevealedValidatorDirective,
  UniqueAlterEgoValidatorDirective
} from "./form2/form2.component";

@NgModule({
  declarations: [
    MyFormsPage,
    Form1Component,
    Form2Component,
    IdentityRevealedValidatorDirective,
    ForbiddenValidatorDirective,
    UniqueAlterEgoValidatorDirective
  ],
  imports: [
    ClientCommonModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ]
})
export class MyFormsModule { }