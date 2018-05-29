import { Disciplina } from './disciplina.model';
import { Professor } from './professor.model';
import { Aluno } from './aluno.model';

export class Turma{
    id: number;
    disciplina: Disciplina;
    ano: Date;
    professor: Professor;
    alunos: Array<Aluno>;

    constructor(id:number,disciplina: Disciplina, ano: Date, professor: Professor) {
        this.id = id;
        this.disciplina = disciplina;
        this.ano = ano;
        this.professor = professor;
    }

    addAluno(aluno: Aluno){
        //addAluno em alunos;
    }
  }