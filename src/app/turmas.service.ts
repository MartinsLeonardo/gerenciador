import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Turma } from './turma.model';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class TurmasService {

  private turmas = null;
  private novo_id = 1;

  API_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }
  
  todas() {
    return this.http.get(this.API_URL + '/turmas');
  }

  carregarDados(callback) {
    this.http.get('./assets/dados/turmas.json')
      .subscribe(turmas => this.turmas = turmas)
      .add(callback);
  }

  salvar(id: number, nome: string, descricao: string) {
    const turma = {nome: nome, descricao: descricao};
    if (id) {
      return this.http.patch(this.API_URL + '/turmas/' + id, turma);
    } else {
      return this.http.post(this.API_URL + '/turmas', turma);
    }
  }

  excluir(turma: number | Turma) {
    let id;
    if (typeof(turma) === 'number') {
      id = turma;
    } else {
      id = turma.id;
    }
    return this.http.delete(this.API_URL + '/turmas/' + id);
  }

  encontrar(arg: number) {
    return this.http.get(this.API_URL + '/turmas/' + arg);
  } 
}
