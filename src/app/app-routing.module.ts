import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PdfComponent} from './pdf/pdf.component';
import { MedInComponent } from './med-in/med-in.component'
const routes: Routes = [
  {path:'',redirectTo:'/medIn',pathMatch:'full'},
  {path:'print',component:PdfComponent},
  {path:'medIn',component:MedInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
