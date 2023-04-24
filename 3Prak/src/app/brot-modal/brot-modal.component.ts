import { Component, Input, OnInit } from '@angular/core';
import { Brot } from '../services/dataservice.service';
import { ModalController } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IonInput } from '@ionic/angular';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-brot-modal',
  templateUrl: './brot-modal.component.html',
  styleUrls: ['./brot-modal.component.scss'],
  imports:[IonicModule,FormsModule]
})
export class BrotModalComponent  implements OnInit {
  ngOnInit() {}
  
  brot: Brot;

  @Input()brotVonListe : Brot | undefined;

  isVisibleNoEdit: boolean = true;

  constructor(private modalCtrl: ModalController, private cd: ChangeDetectorRef) { 
    this.brot = {
      name: '',
      year: 0,
      type: '',
      vegan: false,
      glutenFree: false
    };

  }

  ngAfterViewInit(){
    if(this.brotVonListe){
      this.brot.name = this.brotVonListe.name; 
      this.brot.year = this.brotVonListe.year; 
      this.brot.type = this.brotVonListe.type; 
      this.brot.vegan = this.brotVonListe.vegan;
      this.brot.glutenFree = this.brotVonListe.glutenFree;
    }
     
    this.cd.detectChanges();
  }

  cancel(){
    return this.modalCtrl.dismiss(null);
  }
  confirm(){
    console.log(this.brot);
    return this.modalCtrl.dismiss(this.brot);
  }

}
