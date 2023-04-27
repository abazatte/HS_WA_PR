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

  getBrote() : Brot[]{
    return this.dataservice.brote;
  }

  async edit(index: number){
    const modal = await this.modalController.create({
      component: BrotModalComponent,
      componentProps: { brotVonListe : this.getBrote()[index]}
    });
    modal.present();
    console.log("edit " + index);
    const {data,role}= await modal.onWillDismiss();
    if(data){
      //hier wird mitm brot was jemacht
      this.dataservice.edit(index, data.name, data.year, data.type, data.vegan, data.glutenFree);
    }
  }

  delete(index: number) {
    this.dataservice.delete(index);
  }
}
