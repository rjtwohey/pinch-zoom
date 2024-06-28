import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { PdfViewerModule } from 'ng2-pdf-viewer';


import { PinchZoomModule } from '@meddv/ngx-pinch-zoom'; // Import PinchZoomModule

import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    PinchZoomModule,
    PdfViewerModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
