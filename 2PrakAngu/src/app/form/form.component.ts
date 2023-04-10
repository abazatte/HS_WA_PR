import { Component } from '@angular/core';
import BrotJson from './form_init.json';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
    console.log(this.brote);
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
    this.clear();
  }

  private clear() {
    this.name = '';
    this.year = 0;
    this.art = '';
    this.vegan = false;
    this.gluten = false;
  } 
  powers = ['Really Smart', 'Super Flexible', 'Weather Changer'];

  hero = {name: 'Dr.', alterEgo: 'Dr. What', power: this.powers[0]};
  brot: Brot = {
    name: '',
    year: 0,
    type: '',
    vegan: false,
    glutenFree: false
  };
}

