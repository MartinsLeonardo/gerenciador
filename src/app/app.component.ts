import { Component } from '@angular/core';
import { TurmasService } from './turmas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  apresentar = false;

  novo(){
    this.apresentar = true;
  }

  //turmas = TurmasService.todas();
}
