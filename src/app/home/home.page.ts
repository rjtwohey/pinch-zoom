import { Component } from '@angular/core';
import { Platform } from '@ionic/angular'; // Import Platform service

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  pdfData: string;
  zoom: number;
  myPadding: number;

  constructor(public platform: Platform) {
    this.pdfData = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";
    this.zoom = 1.0;
    this.myPadding = 0.5;
  }
}