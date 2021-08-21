import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {NgxAmapComponent} from "ngx-amap";

declare var AMap: any

@Component({
  selector: 'app-tunnel-map',
  templateUrl: './tunnel-map.component.html',
  styleUrls: ['./tunnel-map.component.scss']
})
export class TunnelMapComponent implements OnInit, AfterViewInit {

  @ViewChild('map',{static:true}) map: NgxAmapComponent | undefined;

  constructor() { }

  private lays: AMap.TileLayer[] | undefined;

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    console.log(this.map);
  }

  mapReady() {
    // @ts-ignore
    //this.map.mapStyle = "amap://styles/7dc0b3d363bea828169d4ddd2019855c";
    console.log(this.map)
  }
}
