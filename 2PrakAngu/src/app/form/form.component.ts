import { Component } from '@angular/core';
import BrotJson from './form_init.json';

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
  styleUrls: ['./form.component.sass', '../css/style.css']
})
export class FormComponent {
  brote: Brot[] = BrotJson;
  constructor(){
    console.log(this.brote);
  }
}
