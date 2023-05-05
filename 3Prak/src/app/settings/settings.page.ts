import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { DataserviceService } from '../services/dataservice.service';

@Component({
  selector: 'app-settings',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent],
})
export class SettingsPage {
  constructor(private dataservice: DataserviceService) {}

  public alertButtons = [
    {
      text: 'Abbrechen',
      role: 'cancel'
    },
    {
      text: 'Resetten',
      role: 'confirm'
    }
  ];

  resetLocalStorage(ev: any){
    if(`${ev.detail.role}` === 'confirm') this.dataservice.resetDisplayFromLocalStorage();
  }
}
