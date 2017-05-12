import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import 'leaflet';
import 'leaflet-providers';

// namespace L {
// //   namespace tileLayer {
//         export function provider(name: string): any {};
// //     }
// }

// function provider(name: string): any {};

// namespace L {
//   namespace tileLayer {
// 	  provider():any;
//     }
// }


@IonicPage()
@Component({
	selector: 'page-map-leaflet',
	templateUrl: 'map-leaflet.html',
})
export class MapLeaflet {

	private map: L.Map;


	constructor(private navCtrl: NavController, private navParams: NavParams) {
		L.tileLayer.prototype.provider = function(name: string) {}
	}

	ionViewDidLoad(): void {
		this.loadOSM();
		// this.loadMapbox();
		this.markerAdd();
	}

	// ngOnInit(): void {}

	private loadMapbox() {
		this.map = L.map('map')
			.setView([-31.625906,-60.696774], 13);
		L.tileLayer('https://api.tiles.mapbox.com/v4/mapbox.streets-basic/{z}/{x}/{y}.png?access_token={accessToken}', {
			attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
			maxZoom: 18,
		    id: 'elaleprieto.g79k5cbm',
		    accessToken: 'pk.eyJ1IjoiZWxhbGVwcmlldG8iLCJhIjoiY2oya2hmYTBnMDBocjJxcGdxeGYzaWgyaCJ9.0a5sORXhWdBfjR7SJ8zrJQ'
		}).addTo(this.map);
	}

	private loadOSM() {
		this.map = L.map('map')
			.setView([-31.625906,-60.696774], 13);
		L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);
		L.tileLayer.provider('Stamen.Watercolor').addTo(this.map);
	}

	private markerAdd() {
		let marker = L.marker([-31.64055, -60.70412]).addTo(this.map);
		marker.bindPopup("<b>Cine América</b>");
		marker = L.marker([-31.64118, -60.67663]).addTo(this.map);
		marker.bindPopup("<b>Fuente de la Coordialidad</b>");
		marker = L.marker([-31.64743, -60.70075]).addTo(this.map);
		marker.bindPopup("<b>Puerto de Santa Fe</b>");
	}

}
