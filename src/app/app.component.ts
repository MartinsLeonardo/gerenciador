import { Component } from '@angular/core';
import { TurmasService } from './turmas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  apresentar = false;
  turmas = null;

  novo(){
    this.apresentar = true;
  }

  constructor(private turmasService: TurmasService) {
    this.turmasService.carregarDados(
      () => this.turmas = this.turmasService.todas()
    );
  }
  
}
