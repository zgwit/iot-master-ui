import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {NgxAmapComponent} from "ngx-amap";
import {RequestService} from "../../request.service";
import {Router} from "@angular/router";
import {TabRef} from "../../helper/tabs/tabs.component";

declare var AMap: any

@Component({
  selector: 'app-device-map',
  templateUrl: './device-map.component.html',
  styleUrls: ['./device-map.component.scss']
})
export class DeviceMapComponent implements OnInit, AfterViewInit {

  @ViewChild('map',{static:true}) map: NgxAmapComponent | undefined;
  datum: any;

  constructor(private tab: TabRef, private rs: RequestService, private router: Router) {
    tab.name = "设备地图";
  }

  private lays: AMap.TileLayer[] | undefined;

  ngOnInit(): void {
    this.load()
  }

  ngAfterViewInit() {
    console.log(this.map);
  }

  mapReady() {
    // @ts-ignore
    //this.map.mapStyle = "amap://styles/7dc0b3d363bea828169d4ddd2019855c";
    console.log(this.map)
  }

  load(): void {
    this.rs.post('device/list', {
      filter:{ location: {$exists: true}},
      fields:["name", "location"],
      limit: 999999
    }).subscribe(res => {
      console.log('res', res);
      this.datum = res.data;
    }).add(() => {
      //this.loading = false;
    });
  }

  open(data: any): void{
    this.router.navigate(['/admin/device/detail/' + data._id]);
  }
}
