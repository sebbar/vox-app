import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  currentRate = 0;

  constructor() {}

  printNewRate(newrate:number) {
    console.log(" newrate = " + newrate + " - currentRate = " + this.currentRate);
  }
  
}
