import { Injectable } from '@angular/core';
import BrotJson from './form_init.json';

export interface Brot {
  name: string;
  year: Number;
  type: string;
  vegan: boolean;
  glutenFree: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  public brote : Brot[] = BrotJson;
  constructor() {
    this.loadFromLocalStorage();
  }

  public addBrot(name: string, year: number, art: string, vegan: boolean, gluten: boolean) {
    let newBrot: Brot = {
      name,
      year,
      type: art,
      vegan,
      glutenFree: gluten
    };
    this.brote.push(newBrot);
    this.saveToLocalStorage();
  }

  public edit(id: number, name: string, year: number, art: string, vegan: boolean, gluten: boolean) {
    let newBrot: Brot = {
      name,
      year,
      type: art,
      vegan,
      glutenFree: gluten
    };

    this.brote[id] = newBrot;
    this.saveToLocalStorage();
  }

  public delete(i: number) {
    let brot = this.brote[i];
    if (brot) {
      this.brote = this.brote.filter(broti => broti !== brot);
      //brot aus lokal storage entfernen. .splice
      this.saveToLocalStorage();
    }
  }

  public resetLocalStorage(){
    localStorage.setItem('Brote', JSON.stringify(BrotJson));
  }

  public saveToLocalStorage() {
    localStorage.setItem('Brote', JSON.stringify(this.brote));
  }

  /**
   * wenn vorhanden, werden die Brote aus LocalStorage reingeladen
   */
  public loadFromLocalStorage(){
    const broteString = localStorage.getItem('Brote');
    if(broteString){ //wenn leerer string dann kommt da auch null raus
      this.brote = JSON.parse(broteString);
    } else {
      this.resetDisplayFromLocalStorage();
    }
  }

  public resetDisplayFromLocalStorage(){
    this.resetLocalStorage();
    this.loadFromLocalStorage();
  }
}
