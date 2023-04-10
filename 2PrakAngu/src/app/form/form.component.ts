import { Component } from '@angular/core';
import BrotJson from './form_init.json';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

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
  constructor(private modal: NgbModal){
    console.log(this.brote);
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
}
