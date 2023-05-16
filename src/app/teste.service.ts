import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TesteService {
  nomes: String[];

  constructor() {
    this.nomes =  ["Fulano","Ciclano", "Beltrano"];
   }

  getNomes(): String[]{
    return this.nomes;
  }
}
