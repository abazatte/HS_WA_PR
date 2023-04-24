import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { CommonModule } from '@angular/common';
import { DataserviceService , Brot } from '../services/dataservice.service';


@Component({
  selector: 'app-data',
  templateUrl: 'data.page.html',
  styleUrls: ['data.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent, CommonModule]
})
export class DataPage {



  constructor(private dataservice : DataserviceService ) {}

  getBrote() : Brot[]{
    return this.dataservice.brote;
  }

  edit(index: number){
    console.log("edit " + index);
  }

  delete(index: number) {
    console.log("delete " + index);
  }
}
