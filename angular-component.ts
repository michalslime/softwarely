import { Component, Input } from '@angular/core';
import moment from 'moment';
import { CustomerInfoService } from "./services";

@Component({
  selector: 'my-app',
  template: `<h1>Customer latest activity date
  {{ formatDate(latestActivityDate) }}</h1>`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  latestActivityDate: string;
  @Input() a: boolean; // id użytkownika
  constructor(private customerInfoService: CustomerInfoService) {
    customerInfoService.getCustomerIPById(this.a).subscribe((x) => {
      customerInfoService.getIPActivityDates(x).subscribe((y) => {
        this.latestActivityDate = y.latestDate;
      })
    })
  }

  private formatDate(dateString: string): string {
    return moment(dateString).format('HH:m:s');
  }
}
