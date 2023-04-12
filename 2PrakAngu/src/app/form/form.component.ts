import { Component } from '@angular/core';
import BrotJson from './form_init.json';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button'; 

interface Brot {
  name : String;
  year : Number;
  type : String;
  vegan : boolean;
  glutenFree : boolean;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass', '../css/style.css'],
})
export class FormComponent {
  brote: Brot[] = BrotJson;
  constructor(private modal: NgbModal){
    this.loadFromLocalStorage();
  }

  closeModal: string = '';

  name: string = '';
  year: any = 0;
  art: string = '';
  vegan: boolean = false;
  gluten: boolean = false;
  
  

  openModal(content: any){
    this.modal.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((res) => {
      this.closeModal = `Closded with: ${res}`;
    },(res) => {
      this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
      });
  }

  private getDismissReason(reason: any) : string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  public addBrot(name : string, year : number, art : string, vegan: boolean, gluten: boolean) {
    let newBrot: Brot = {
      name: name,
      year: year,
      type: art,
      vegan: vegan,
      glutenFree: gluten
    };
    this.brote.push(newBrot);
    this.saveToLocalStorage();
    this.clear();
  }

  private clear() {
    this.name = '';
    this.year = 0;
    this.art = '';
    this.vegan = false;
    this.gluten = false;
  } 

  public resetLocalStorage(){
    localStorage.setItem('Brote', JSON.stringify(BrotJson));
  }

  public addBrotToLocalStorage(brot : Brot){
    const brotJson = localStorage.getItem('Brote');
    let brote: Brot[];
    if(brotJson!== null && brotJson!== undefined){
       brote = JSON.parse(brotJson);
       brote.push(brot);
       localStorage.setItem('Brote',JSON.stringify(brote));
    } else{
      console.log("addBrotToLocalStorage, brotJson war null");
    }
  }

  public removeBrotFromLocalStorage(brot : Brot){
    const brotJson = localStorage.getItem('Brote');
    let brotes: Brot[];
    if(brotJson !== null && brotJson !== undefined) {
      brotes = JSON.parse(brotJson);
      brotes = brotes.filter(element => element !== brot);
      console.log(brot);
      console.log(brotes);
      localStorage.setItem('Brote',JSON.stringify(brotes));
    }
  }

  public saveToLocalStorage(){
    localStorage.setItem('Brote',JSON.stringify(this.brote));
  }

  public resetDisplayFromLocalStorage(){
    this.resetLocalStorage();
    this.loadFromLocalStorage();
  }
  public loadFromLocalStorage(){
    const broteString = localStorage.getItem('Brote');
    if(broteString !== null && broteString !== undefined){
      this.brote = JSON.parse(broteString);
    }
  }

  public edit(i: number){
    console.log(i);
  }

  public delete(i: number){
    let brot = this.brote.at(i);
    if(brot !== undefined) {
      
      this.brote = this.brote.filter(broti => broti !== brot);
      //brot aus lokal storage entfernen.
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

