import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { CommonModule } from '@angular/common';
import { DataserviceService , Brot } from '../services/dataservice.service';
import { ModalController } from '@ionic/angular';
import { BrotModalComponent } from '../brot-modal/brot-modal.component';


@Component({
  selector: 'app-data',
  templateUrl: 'data.page.html',
  styleUrls: ['data.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent, CommonModule]
})
export class DataPage {
  constructor(private dataservice : DataserviceService, private modalController: ModalController) {}

  public alertButtons = [
    {
      text: 'Abbrechen',
      role: 'cancel'
    },
    {
      text: 'Löschen',
      role: 'confirm'
    }
  ];

  delete(ev: any, i: number) {
    if(`${ev.detail.role}` === 'confirm') this.remove(i);
  }

  getBrote() : Brot[]{
    return this.dataservice.brote;
  }

  async edit(index: number){
    const modal = await this.modalController.create({
      component: BrotModalComponent,
      componentProps: { brotVonListe : this.getBrote()[index], isAdd: false}
    });
    modal.present();
    console.log("edit " + index);
    const {data,role}= await modal.onWillDismiss();
    if(data){
      //hier wird mitm brot was jemacht
      this.dataservice.edit(index, data.name, data.year, data.type, data.vegan, data.glutenFree);
    }
  }

  remove(index: number) {
    this.dataservice.delete(index);
  }

  async add(){
    const modal = await this.modalController.create({
      component: BrotModalComponent,
      componentProps: { brotVonListe : undefined, isAdd: true},
    });
    modal.present();
    const {data,role}= await modal.onWillDismiss();
    if(data){
      //hier wird mitm brot was jemacht
      this.dataservice.addBrot(data.name, data.year, data.type, data.vegan, data.glutenFree);
    }
  }
}
