import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  dataReceived = '';
  titleText: string;
  locationText: string;
  startDateText = '2020-05-25';
  startTimeText: string;
  endTimeText: string;
  endDateText: string;

  constructor(public activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe((data) => {
      this.dataReceived = JSON.stringify(data);
      const obj = JSON.parse(this.dataReceived);
      this.titleText = obj.titleText;
      this.locationText = obj.locationText;
      this.startDateText = obj.startDateText;
      this.startTimeText = obj.startTimeText;
      this.endTimeText = obj.endTimeText;
      this.endDateText = obj.endDateText;
    });
  }



}
