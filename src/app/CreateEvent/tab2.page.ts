import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public toastController: ToastController) {}

  titleText: string;
  locationText: string;
  startDateText = '2020-05-25';
  startTimeText: string;
  endTimeText: string;
  endDateText: string;

  async createEvent(){
    const toast = await this.toastController.create({
      header: 'Event has been created successfully',
      message: 'Click to Close',
      position: 'top',
      duration: 2000,
      buttons: [
        {
          text: 'Done',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
  }
}
