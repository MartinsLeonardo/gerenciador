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
  status_lista = false;

  novo(){
    this.apresentar = true;
  }

  constructor(private turmasService: TurmasService) {
    this.atualizarLista();
  }

  atualizarLista() {
    this.turmasService.todas()
      .subscribe(turmas => {
        this.turmas = turmas;
        this.status_lista = true;
      }, () => this.status_lista = false);
  }

  
}