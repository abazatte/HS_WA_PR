import { Component, Input, OnInit } from '@angular/core';
import { Brot } from '../services/dataservice.service';
import { ModalController } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//https://stackoverflow.com/questions/38892771/cant-bind-to-ngmodel-since-it-isnt-a-known-property-of-input 
//forms module ist für ngmodel
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, Validators, Form, FormControl } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IonInput } from '@ionic/angular';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-brot-modal',
  templateUrl: './brot-modal.component.html',
  styleUrls: ['./brot-modal.component.scss'],
  imports:[IonicModule,FormsModule,ReactiveFormsModule]
})
export class BrotModalComponent  implements OnInit {
  ngOnInit() {}
  
  brot: Brot;
  isSubmitted:boolean = false;

  //https://stackoverflow.com/questions/52012447/ionic-4-how-to-retrieve-data-passed-to-a-modal
  @Input()brotVonListe : Brot | undefined;
  @Input()isAdd: boolean | undefined;

  isVisibleNoEdit: boolean = true;
  ionicForm: FormGroup = this.formBuilder.group({
    brotName: ['', [Validators.required, Validators.minLength(2)]],
    brotYear: ['', [Validators.required, Validators.min(0)]],
    brotType: ['', [Validators.required, Validators.minLength(2)]],
  });

  constructor(private modalCtrl: ModalController, private cd: ChangeDetectorRef, public formBuilder: FormBuilder) { 
    this.brot = {
      name: '',
      year: 0,
      type: '',
      vegan: false,
      glutenFree: false
    };

  }

  ngAfterViewInit(){
    if(this.brotVonListe && !this.isAdd){
      this.brot.name = this.brotVonListe.name; 
      this.brot.year = this.brotVonListe.year; 
      this.brot.type = this.brotVonListe.type; 
      this.brot.vegan = this.brotVonListe.vegan;
      this.brot.glutenFree = this.brotVonListe.glutenFree;
    }
     
    this.cd.detectChanges(); //weil ngafterviewinit die bindings ändert nachdem sie überprüft wurden
  }

  cancel(){
    return this.modalCtrl.dismiss(null);
  }

  confirm(){
    console.log(this.brot);

    return this.modalCtrl.dismiss(this.brot);
  }

  submit(){
    this.isSubmitted = true;
    if (!this.ionicForm.valid) {
      this.confirm();
    } 
  }

}
