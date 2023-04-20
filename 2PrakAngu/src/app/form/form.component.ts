import { Component } from '@angular/core';
import BrotJson from './form_init.json';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

interface Brot {
  name: string;
  year: Number;
  type: string;
  vegan: boolean;
  glutenFree: boolean;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass', '../css/style.css'],
})
export class FormComponent {
  brote: Brot[] = BrotJson; //initial wird das json geladen
  constructor(private modal: NgbModal){
    this.loadFromLocalStorage();
  }

  closeModal: string = '';
  isVisibleNoEdit: boolean = true;
  isVisibleEdit: boolean = true;
  numberEdit: number = 0;

  openModal(content: any, edit: boolean, brotIndex: number) {
    if (!edit) {
      this.clear();
      this.isVisibleNoEdit = true;
      this.isVisibleEdit = false;
    } else {
      this.fill(this.brote.at(brotIndex) as Brot);
      this.numberEdit = brotIndex;
      this.isVisibleNoEdit = false;
      this.isVisibleEdit = true;
    } 
    this.modal.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((res) => {
        this.closeModal = `Closded with: ${res}`;
      }, (res) => {
        this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
      });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
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

  private clear() {
    this.brot.name = '';
    this.brot.year = 0;
    this.brot.type = '';
    this.brot.vegan = false;
    this.brot.glutenFree = false;
  }

  private fill(brot : Brot){
    this.brot.name = brot.name;
    this.brot.year = brot.year;
    this.brot.type = brot.type;
    this.brot.vegan = brot.vegan;
    this.brot.glutenFree = brot.glutenFree;
    //this.brot = { ...brot }
  }

  public resetLocalStorage() {
    localStorage.setItem('Brote', JSON.stringify(BrotJson));
  }

  public addBrotToLocalStorage(brot: Brot) {
    const brotJson = localStorage.getItem('Brote');
    let brote: Brot[];
    if(brotJson){
       brote = JSON.parse(brotJson);
       brote.push(brot);
       localStorage.setItem('Brote',JSON.stringify(brote));
    } else{
      console.log("addBrotToLocalStorage, brotJson war null");
    }
  }

  public removeBrotFromLocalStorage(brot: Brot) {
    const brotJson = localStorage.getItem('Brote');
    let brotes: Brot[];
    if(brotJson) {
      brotes = JSON.parse(brotJson);
      brotes = brotes.filter(element => element !== brot);
      console.log(brot);
      console.log(brotes);
      localStorage.setItem('Brote', JSON.stringify(brotes));
    }
  }

  public saveToLocalStorage() {
    localStorage.setItem('Brote', JSON.stringify(this.brote));
  }

  public resetDisplayFromLocalStorage(){
    this.resetLocalStorage();
    this.loadFromLocalStorage();
  }
  /**
   * wenn vorhanden, werden die Brote aus LocalStorage reingeladen
   */
  public loadFromLocalStorage(){
    const broteString = localStorage.getItem('Brote');
    if(broteString){ //wenn leerer string dann kommt da auch null raus
      this.brote = JSON.parse(broteString);
    }
  }

  public delete(i: number) {
    let brot = this.brote.at(i);
    if (brot) {
      this.brote = this.brote.filter(broti => broti !== brot);
      //brot aus lokal storage entfernen. .splice
      this.saveToLocalStorage();
    }
  }

  brot: Brot = {
    name: '',
    year: 0,
    type: '',
    vegan: false,
    glutenFree: false
  };
}