import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Turma } from './turma.model';

@Injectable()
export class TurmasService {

  API_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }
  
  todas() {
    return this.http.get(this.API_URL + '/turmas');
  }

/*  salvar(id: number, nome: string, descricao: string) {
    const turma = {nome: nome, descricao: descricao};
    if (id) {
      return this.http.patch(this.API_URL + '/turmas/' + id, disciplina);
    } else {
      return this.http.post(this.API_URL + '/turmas', disciplina);
    }
  }

  excluir(disciplina: number | Turma) {
    let id;
    if (typeof(disciplina) === 'number') {
      id = disciplina;
    } else {
      id = disciplina.id;
    }
    return this.http.delete(this.API_URL + '/disciplinas/' + id);
  }

  encontrar(arg: number) {
    return this.http.get(this.API_URL + '/disciplinas/' + arg);
  } */
}
