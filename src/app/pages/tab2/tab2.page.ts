import { Component } from '@angular/core';
// import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {
  currentRate = 0;

  constructor() {}

/*
  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
*/

  onRateChange() {
    console.log(' currentRate = ' + this.currentRate);
  }

  onRatingEvent(newrate: number) {
    console.log('newrate = ' + newrate);
  }


}
