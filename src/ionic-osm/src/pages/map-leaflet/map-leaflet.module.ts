import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MapLeaflet } from './map-leaflet';

@NgModule({
  declarations: [
    MapLeaflet,
  ],
  imports: [
    IonicPageModule.forChild(MapLeaflet),
  ],
  exports: [
    MapLeaflet
  ]
})
export class MapLeafletModule {}
