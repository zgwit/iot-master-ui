import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {AMapLoaderService, NgxAmapComponent} from "ngx-amap";


declare var AMap: any

@Component({
  selector: 'app-tunnel-map',
  templateUrl: './tunnel-map.component.html',
  styleUrls: ['./tunnel-map.component.scss']
})
export class TunnelMapComponent implements OnInit, AfterViewInit {

  @ViewChild('map',{static:true}) map: NgxAmapComponent | undefined;

  constructor(private  als : AMapLoaderService) { }

  private lays: AMap.TileLayer[] | undefined;

  ngOnInit(): void {
    let options: any = {mapStyle: "amap://styles/7dc0b3d363bea828169d4ddd2019855c"};
    this.als.load().subscribe(()=>{
      this.lays = [new AMap.TileLayer(options)]
    })
  }

  ngAfterViewInit() {
    console.log(this.map);
  }

}
