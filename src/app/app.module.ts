import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TurmasService } from './turmas.service';
import { ListaDeTurmasComponent } from './lista-de-turmas/lista-de-turmas.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaDeTurmasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [TurmasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
