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
    this.pdfData = "";
    this.zoom = 1.0;
    this.myPadding = 0.5;
  }

  onFileSelected() {
    let $img: any = document.querySelector('#file');
  
    if (typeof (FileReader) !== 'undefined') {
      let reader = new FileReader();
  
      reader.onload = (e: any) => {
        this.pdfData = e.target.result;
      };
  
      reader.readAsArrayBuffer($img.files[0]);
    }
  }
}