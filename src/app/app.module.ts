import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PdfComponent } from './pdf/pdf.component';
import {MatButtonModule,MatCheckboxModule,MatTableModule} from '@angular/material';
import { TemplateComponent } from './template/template.component';
import { MatFormFieldModule} from '@angular/material';
import { MedInComponent } from './med-in/med-in.component'
@NgModule({
  declarations: [
    AppComponent,
    PdfComponent,
    TemplateComponent,
    MedInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTableModule,
    MatFormFieldModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
