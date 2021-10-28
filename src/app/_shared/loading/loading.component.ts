import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent implements OnInit {
  constructor(private spinner: NgxSpinnerService) {}

  ngOnInit() {
    /** spinner starts on init */
    // this.spinner.show();

    // setTimeout(() => {
    //   /** spinner ends after 5 seconds */
    //   this.spinner.hide();
    // }, 5000);
  }

  showSpinner() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 3000);
  }
}
