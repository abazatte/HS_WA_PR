import { Component } from '@angular/core';
import BrotJson from './form_init.json';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';

interface Brot {
  id : Number;
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
  heroForm: any;
  hero: any;
  constructor(private modal: NgbModal){
    console.log(this.brote);
    this.resetLocalStorage();
    console.log("localStorage feritg");
  }

  closeModal: string = '';

  id: number = 0;
  name: string = '';
  year: number = 0;
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

  public addBrot(id : number, name : string, year : number, art : string, vegan: boolean, gluten: boolean) {
    console.log(id, name, year, art, vegan, gluten);
    this.clear();
  }

  private clear() {
    this.id = 0;
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
    if(brotJson!== null){
       brote = JSON.parse(brotJson);
       brote.push(brot);
       localStorage.setItem('Brote',JSON.stringify(brote));
    } else{
      console.log("addBrotToLocalStorage, brotJson war null");
    }

    
  }

  public removeBrotFromLocalStorage(brot : Brot){
    const brotJson = localStorage.getItem('Brote');
  }

}

